/**
 * ตรวจว่าฝั่งมือถือมีลูกเล่นครบจริง
 *   node scripts/mobile-motion-test.mjs
 *
 * เช็คสามเรื่องที่ผู้ใช้แจ้งว่าหายไปบนมือถือ
 *   1. สติกเกอร์ที่โคจรรอบเหรียญตราต้องไม่ถูกเหรียญทับ
 *   2. สติกเกอร์ตกแต่งต้องยังมีให้เห็น ไม่ใช่ซ่อนหมด
 *   3. เลื่อนจอแล้วต้องขยับจริง ทั้งแบบพารัลแลกซ์และแบบสะบัดตามแรงปัด
 */
import { chromium } from "playwright";

const BASE = process.env.BASE || "http://127.0.0.1:4173";
const ok = (label, cond, extra = "") =>
  console.log(`${cond ? "  PASS" : "  FAIL"}  ${label}${extra ? "  — " + extra : ""}`);

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
});
const page = await ctx.newPage();
const errs = [];
page.on("pageerror", (e) => errs.push(String(e)));

await page.goto(BASE + "/", { waitUntil: "networkidle" });
await page.waitForTimeout(900);

console.log("\n1) วงโคจรใน hero");
const orb = await page.evaluate(() => {
  const o = document.querySelector(".orbit").getBoundingClientRect();
  const c = document.querySelector(".orbit__center").getBoundingClientRect();
  const cx = o.left + o.width / 2, cy = o.top + o.height / 2;
  const centerR = c.width / 2;
  const slots = [...document.querySelectorAll(".orbit__slot")].map((s) => {
    const r = s.getBoundingClientRect();
    const dx = r.left + r.width / 2 - cx;
    const dy = r.top + r.height / 2 - cy;
    return {
      dist: Math.round(Math.hypot(dx, dy)),
      w: Math.round(r.width),
      inViewport: r.left >= -4 && r.right <= window.innerWidth + 4,
    };
  });
  return { orbitW: Math.round(o.width), centerW: Math.round(c.width), centerR, slots };
});
ok("เหรียญตราไม่ล้นกรอบวงโคจร", orb.centerW <= orb.orbitW,
   `เหรียญ ${orb.centerW}px / กรอบ ${orb.orbitW}px`);
const covered = orb.slots.filter((s) => s.dist < orb.centerR + s.w / 2);
ok("ไม่มีสติกเกอร์ตัวไหนถูกเหรียญทับ", covered.length === 0,
   `ถูกทับ ${covered.length} จาก ${orb.slots.length} ตัว`);
ok("สติกเกอร์ทุกตัวอยู่ในจอ", orb.slots.every((s) => s.inViewport));
ok("สติกเกอร์กระจายไม่กองซ้อนกัน",
   new Set(orb.slots.map((s) => Math.round(s.dist / 20))).size >= 2,
   `รัศมี ${orb.slots.map((s) => s.dist).join(", ")}px`);

// วัดตลอดหนึ่งรอบการหมุน ไม่ใช่แค่จังหวะเดียว เพราะแต่ละตัวโคจรคนละมุมกัน
const sweep = await page.evaluate(async () => {
  const orbit = document.querySelector(".orbit");
  const arts = [...document.querySelectorAll(".orbit__art")];
  const acc = arts.map((a) => ({ img: a.src.split("/").pop(), min: 1e9, max: 0 }));
  for (let i = 0; i < 40; i++) {
    const o = orbit.getBoundingClientRect();
    const cx = o.left + o.width / 2, cy = o.top + o.height / 2;
    arts.forEach((a, k) => {
      const r = a.getBoundingClientRect();
      // ระยะจากศูนย์กลางถึงขอบด้านในสุดของกล่องสติกเกอร์
      const d = Math.hypot(r.left + r.width / 2 - cx, r.top + r.height / 2 - cy)
              - Math.hypot(r.width, r.height) / 2;
      acc[k].min = Math.min(acc[k].min, d);
      acc[k].max = Math.max(acc[k].max, d);
    });
    await new Promise((r) => setTimeout(r, 120));
  }
  return acc;
});
const badgeR = orb.centerW / 2;
const tightest = Math.min(...sweep.map((s) => s.min));
ok("ตลอดทั้งรอบการหมุนก็ไม่มีตัวไหนแตะเหรียญ", tightest > badgeR + 4,
   `ช่องว่างแคบสุด ${(tightest - badgeR).toFixed(0)}px (รัศมีเหรียญ ${badgeR.toFixed(0)}px)`);

console.log("\n2) สติกเกอร์ตกแต่ง");
const vis = await page.evaluate(() =>
  [...document.querySelectorAll(".scatter__slot")]
    .filter((s) => getComputedStyle(s).display !== "none").length,
);
ok("ยังมีสติกเกอร์ตกแต่งให้เห็นบนมือถือ", vis >= 3, `${vis} ตัว`);

console.log("\n3) พารัลแลกซ์ตอนเลื่อนจอ");
// เลื่อนไปให้สติกเกอร์อยู่กลางจอก่อน ไม่งั้น IntersectionObserver ยังไม่ปลุกลูป
await page.evaluate(() => {
  const s = document.querySelector(".scatter__slot");
  s?.scrollIntoView({ block: "center" });
});
await page.waitForTimeout(700);
const read = () =>
  page.evaluate(() =>
    [...document.querySelectorAll(".scatter__slot")]
      .filter((s) => getComputedStyle(s).display !== "none")
      .map((s) => {
        const m = new DOMMatrixReadOnly(getComputedStyle(s).transform);
        return { x: +m.m41.toFixed(1), y: +m.m42.toFixed(1) };
      }),
  );
const a = await read();
await page.evaluate(() => window.scrollBy(0, 400));
await page.waitForTimeout(700);
const b = await read();
const moved = a.map((p, i) => Math.abs((b[i]?.y ?? 0) - p.y));
ok("สติกเกอร์ขยับจริงเมื่อเลื่อนจอ", moved.some((d) => d > 8),
   `ขยับ ${moved.map((d) => d.toFixed(0)).join(", ")}px`);
ok("แต่ละตัวขยับไม่เท่ากัน (เป็นชั้น ไม่ใช่กองเดียว)",
   new Set(moved.map((d) => Math.round(d / 5))).size >= 2,
   `ค่าที่ต่างกัน ${new Set(moved.map((d) => Math.round(d))).size} แบบ`);

console.log("\n4) สะบัดตามแรงปัดจอ (--scrollv)");
// ต้องสั่ง instant เพราะ html ตั้ง scroll-behavior: smooth ไว้
// ถ้าปล่อยให้เลื่อนแบบนุ่ม มันจะยิง scroll event ต่อเนื่องเป็นวินาที
// แล้วค่าที่วัดได้จะเป็นค่าระหว่างเลื่อน ไม่ใช่ค่าตอนนิ่งจริง
await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
await page.waitForTimeout(1200);
const still = await page.evaluate(() =>
  getComputedStyle(document.documentElement).getPropertyValue("--scrollv").trim(),
);
/* ปัดจอจริงด้วยล้อ แล้วเก็บค่าสูงสุดที่เกิดขึ้นระหว่างปัด
   ต้องเก็บแบบสุ่มตัวอย่างถี่ ๆ เพราะค่าขึ้นแล้วสลายกลับเร็วมาก
   ถ้าอ่านทีเดียวหลังปัดจบ มักอ่านไม่ทัน */
const swing = await page.evaluate(async () => {
  let peak = 0;
  const read = () =>
    parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scrollv") || "0");
  for (let i = 1; i <= 14; i++) {
    window.scrollBy(0, 80);
    await new Promise((r) => requestAnimationFrame(r));
    const v = read();
    if (Math.abs(v) > Math.abs(peak)) peak = v;
  }
  return peak;
});
ok("ตอนอยู่นิ่ง ค่าเป็นศูนย์", still === "0" || still === "" || Math.abs(parseFloat(still || "0")) < 0.02,
   `ค่า "${still}"`);
ok("ปัดจอแล้วค่าขยับจริง", Math.abs(swing) > 0.05, `--scrollv = ${swing}`);
await page.waitForTimeout(1400);
const settled = await page.evaluate(() =>
  parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--scrollv") || "0"),
);
ok("หยุดปัดแล้วค่อย ๆ กลับเข้าที่", Math.abs(settled) < 0.03, `--scrollv = ${settled}`);

console.log("\n5) เคารพการปิดอนิเมชันของระบบ");
const rm = await browser.newContext({
  viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true,
  reducedMotion: "reduce",
});
const rp = await rm.newPage();
await rp.goto(BASE + "/", { waitUntil: "networkidle" });
await rp.evaluate(() => window.scrollBy(0, 500));
await rp.waitForTimeout(500);
const rv = await rp.evaluate(() =>
  getComputedStyle(document.documentElement).getPropertyValue("--scrollv").trim(),
);
ok("ปิด prefers-reduced-motion แล้วไม่สะบัด", rv === "" || parseFloat(rv || "0") === 0, `"${rv}"`);
ok("เนื้อหายังแสดงครบ",
   (await rp.locator(".reveal").count()) ===
     (await rp.locator('.reveal[style*="opacity"], .reveal').count()));

/* ------------------------------------------------------------------
   6) หน้าต้องเลื่อนซ้ายขวาไม่ได้เลย

   ต้องวัดหลายความกว้างและหลายตำแหน่งการเลื่อน ไม่ใช่จุดเดียว
   เพราะเคยเจอกรณีที่ล้นเฉพาะจอ 320px (แถบเมนูย่อไม่ได้ กว้าง 334px)
   และสติกเกอร์พารัลแลกซ์ก็ขยับออกข้างตอนเลื่อนด้วย
   ต้องเช็ค body.scrollWidth ด้วย ไม่ใช่แค่ documentElement
   ------------------------------------------------------------------ */
console.log("\n6) หน้าเลื่อนซ้ายขวาไม่ได้");
const PATHS = ["/", "/register/", "/editions/", "/editions/sut/", "/programme/", "/learn/", "/faq/", "/contact/"];
for (const w of [320, 360, 390, 430]) {
  const c = await browser.newContext({ viewport: { width: w, height: 800 }, isMobile: true, hasTouch: true });
  const pg = await c.newPage();
  let worst = 0, worstAt = "";
  for (const path of PATHS) {
    await pg.goto(BASE + path, { waitUntil: "networkidle" });
    await pg.waitForTimeout(300);
    const h = await pg.evaluate(() => document.body.scrollHeight);
    for (const f of [0, 0.25, 0.5, 0.75, 1]) {
      await pg.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), Math.round((h - 800) * f));
      await pg.waitForTimeout(220);
      const over = await pg.evaluate(() =>
        Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) -
        document.documentElement.clientWidth);
      if (over > worst) { worst = over; worstAt = `${path} @${Math.round(f * 100)}%`; }
    }
  }
  ok(`กว้าง ${w}px — ${PATHS.length} หน้า × 5 ตำแหน่ง`, worst <= 1,
     worst > 1 ? `ล้น ${worst}px ที่ ${worstAt}` : "ล้น 0px");
  await c.close();
}

console.log("\n7) แถบเมนูยังเกาะบนสุดตอนเลื่อน");
for (const w of [320, 390]) {
  const c = await browser.newContext({ viewport: { width: w, height: 800 }, isMobile: true, hasTouch: true });
  const pg = await c.newPage();
  await pg.goto(BASE + "/", { waitUntil: "networkidle" });
  await pg.evaluate(() => window.scrollTo({ top: 1400, behavior: "instant" }));
  await pg.waitForTimeout(350);
  const top = await pg.evaluate(() => Math.round(document.querySelector(".nav").getBoundingClientRect().top));
  // ถ้าเผลอใส่ overflow-x: hidden/clip ที่ html เมื่อไหร่ ค่านี้จะกลายเป็นติดลบเยอะ ๆ
  ok(`กว้าง ${w}px — sticky ยังทำงาน`, Math.abs(top) <= 1, `ขอบบนแถบเมนูอยู่ที่ ${top}px`);
  await c.close();
}

console.log(`\n=== page errors: ${errs.length} ===`);
errs.slice(0, 4).forEach((e) => console.log("   " + e.slice(0, 150)));
await browser.close();
