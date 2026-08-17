/**
 * ตรวจค่าคอนทราสต์ของตัวอักษรทุกชิ้นในเว็บ เทียบกับพื้นหลังที่มันวางอยู่จริง
 * เดินไล่ทุกหน้า ทั้งภาษาไทยและอังกฤษ แล้วรายงานเฉพาะคู่สีที่ตกเกณฑ์ WCAG AA
 *
 *   node scripts/contrast-audit.mjs
 */
import { chromium } from "playwright";

const BASE = process.env.BASE || "http://127.0.0.1:4173";
const PAGES = [
  "/", "/about", "/programme", "/editions", "/editions/sut", "/editions/bangkok",
  "/editions/online", "/learn", "/register", "/speakers", "/partners",
  "/committee", "/qtric", "/news", "/faq", "/contact", "/code-of-conduct",
];

const AUDIT = () => {
  const parse = (c) => {
    const m = c.match(/[\d.]+/g);
    if (!m) return null;
    return [+m[0], +m[1], +m[2], m[3] === undefined ? 1 : +m[3]];
  };
  const lum = ([r, g, b]) => {
    const f = (v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const over = (fg, bg) => {
    const a = fg[3];
    return [0, 1, 2].map((i) => fg[i] * a + bg[i] * (1 - a));
  };
  const ratio = (a, b) => {
    const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
    return (l1 + 0.05) / (l2 + 0.05);
  };

  /** ดึงสีทุกจุดหยุดออกจาก linear/radial-gradient แล้วคืนเป็นอาร์เรย์ */
  const gradientStops = (img) => {
    const stops = [];
    const re = /rgba?\(([^)]+)\)/g;
    let m;
    while ((m = re.exec(img))) {
      const c = parse("rgb(" + m[1] + ")");
      if (c) stops.push(c);
    }
    return stops;
  };

  /**
   * ไล่หาพื้นหลังที่อยู่ใต้ element นี้
   * ถ้าเจอ gradient จะคืนทุกจุดหยุด แล้วผู้เรียกไปคิดกรณีแย่สุด
   * (ตัวอักษรต้องอ่านออกตลอดแนวไล่สี ไม่ใช่แค่ตรงกลาง)
   */
  const bgOf = (el, startFromParent) => {
    const stack = [];
    let node = startFromParent ? el.parentElement : el;
    let grad = null;
    while (node && node.nodeType === 1) {
      const cs = getComputedStyle(node);
      const img = cs.backgroundImage;
      if (img && img !== "none") {
        if (/gradient\(/.test(img)) {
          const stops = gradientStops(img);
          if (stops.length) { grad = stops; break; }
        } else {
          // รูปพื้นหลังจริง เดาสีไม่ได้ ข้ามไป
          return { candidates: null, image: img };
        }
      }
      const c = parse(cs.backgroundColor);
      if (c && c[3] > 0) {
        stack.push(c);
        if (c[3] >= 0.999) break;
      }
      node = node.parentElement;
    }
    const flatten = (base) => {
      let out = base;
      for (let i = stack.length - 1; i >= 0; i--) out = over(stack[i], out);
      return out;
    };
    if (grad) return { candidates: grad.map((g) => flatten([g[0], g[1], g[2]])), image: null };
    return { candidates: [flatten([255, 255, 255])], image: null };
  };

  const out = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const seen = new Set();
  let n;
  while ((n = walker.nextNode())) {
    const text = n.nodeValue.trim();
    if (!text) continue;
    const el = n.parentElement;
    if (!el || seen.has(el)) continue;
    seen.add(el);
    if (el.closest("[aria-hidden='true'], svg, script, style, noscript")) continue;
    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === "hidden" || cs.display === "none") continue;
    const elOpacity = (() => {
      let o = 1, p = el;
      while (p && p !== document.body) { o *= parseFloat(getComputedStyle(p).opacity || "1"); p = p.parentElement; }
      return o;
    })();
    if (elOpacity < 0.05) continue;

    /* ตัวอักษรที่ระบายด้วย gradient (background-clip: text)
       สีจริงของตัวอักษรคือจุดหยุดของ gradient ไม่ใช่ค่า color
       ต้องไล่หาขึ้นไปด้วย เพราะ background-clip ที่ตัวแม่จะระบายลูกทั้งหมด
       เช่น <span class="stat__num"><span class="ticker">…</span></span> */
    let painter = null;
    for (let p = el; p && p !== document.body; p = p.parentElement) {
      const pcs = getComputedStyle(p);
      if ((pcs.webkitBackgroundClip || pcs.backgroundClip) === "text") { painter = p; break; }
    }

    const bg = bgOf(painter || el, !!painter);
    if (!bg.candidates) continue; // พื้นหลังเป็นรูปภาพ ตรวจอัตโนมัติไม่ได้

    let fgs;
    if (painter) {
      const stops = gradientStops(getComputedStyle(painter).backgroundImage);
      if (!stops.length) continue;
      fgs = stops.map((s) => [s[0], s[1], s[2], elOpacity]);
    } else {
      const c = parse(cs.color);
      if (!c) continue;
      fgs = [[c[0], c[1], c[2], c[3] * elOpacity]];
    }

    // คิดกรณีแย่ที่สุด ทั้งตลอดแนวไล่สีพื้นหลังและตลอดแนวไล่สีตัวอักษร
    let worst = Infinity, worstBg = null, worstFg = null;
    for (const cand of bg.candidates) {
      for (const fg of fgs) {
        const cr = ratio(over(fg, cand), cand);
        if (cr < worst) { worst = cr; worstBg = cand; worstFg = fg; }
      }
    }

    const size = parseFloat(cs.fontSize);
    const weight = parseInt(cs.fontWeight) || 400;
    const large = size >= 24 || (size >= 18.66 && weight >= 700);
    const need = large ? 3 : 4.5;
    if (worst < need) {
      out.push({
        text: text.slice(0, 44),
        sel: el.tagName.toLowerCase() + (el.className ? "." + el.className.toString().trim().split(/\s+/).join(".") : ""),
        fg: `rgb(${worstFg.slice(0, 3).map((x) => Math.round(x)).join(",")})`,
        opacity: +elOpacity.toFixed(2),
        bg: `rgb(${worstBg.map((x) => Math.round(x)).join(",")})`,
        size, weight, ratio: +worst.toFixed(2), need,
      });
    }
  }
  return out;
};

const W = +(process.env.W || 1280);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: W, height: 900 } });

// รวมปัญหาที่เหมือนกันเข้าด้วยกัน ปัญหาเดียวที่โผล่ทุกหน้าจะได้ไม่ท่วมรายงาน
const groups = new Map();

for (const path of PAGES) {
  for (const lang of ["th", "en"]) {
    await page.goto(BASE + path, { waitUntil: "networkidle" });
    if (lang === "en") {
      const btn = page.locator(".lang button", { hasText: "EN" }).first();
      if (await btn.count()) { await btn.click(); await page.waitForTimeout(250); }
    }
    // เลื่อนลงสุดเพื่อให้ .reveal ทุกบล็อกเข้าสู่จอและเริ่มแสดงผล
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    // หยุดทุกอนิเมชันไว้ที่สถานะสุดท้าย ไม่งั้นจะจับ .reveal ตอนกำลังจางเข้ามา
    // แล้วรายงานว่าคอนทราสต์ตกทั้งที่จริง ๆ พอวาดเสร็จก็ปกติ
    await page.addStyleTag({
      content: `*,*::before,*::after{animation:none!important;transition:none!important}
                .reveal{opacity:1!important;transform:none!important;filter:none!important}`,
    });
    await page.waitForTimeout(150);
    for (const b of await page.evaluate(AUDIT)) {
      const key = `${b.sel}|${b.fg}|${b.opacity}|${b.bg}|${b.size}`;
      const g = groups.get(key) || { ...b, pages: new Set(), samples: new Set() };
      g.pages.add(path);
      if (g.samples.size < 2) g.samples.add(b.text);
      groups.set(key, g);
    }
  }
}

const all = [...groups.values()].sort((a, b) => a.ratio - b.ratio);
for (const g of all) {
  console.log(
    `${g.ratio.toFixed(2)} / ${g.need}  ${g.fg}${g.opacity < 1 ? ` @${g.opacity}` : ""} on ${g.bg}  ${g.size}px/${g.weight}\n` +
    `    <${g.sel}>\n` +
    `    "${[...g.samples].join('" | "')}"\n` +
    `    ${g.pages.size} page(s): ${[...g.pages].slice(0, 6).join(", ")}${g.pages.size > 6 ? " …" : ""}\n`,
  );
}
console.log(`=== ${all.length} distinct issue(s) ===`);
await browser.close();
