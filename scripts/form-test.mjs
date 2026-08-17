/**
 * ทดสอบฟอร์มลงทะเบียนตั้งแต่ต้นจนจบ เหมือนคนจริงกรอก
 *   node scripts/form-test.mjs
 */
import { chromium } from "playwright";

const BASE = process.env.BASE || "http://127.0.0.1:4173";
const ok = (label, cond, extra = "") =>
  console.log(`${cond ? "  PASS" : "  FAIL"}  ${label}${extra ? "  — " + extra : ""}`);

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await ctx.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });

await page.goto(BASE + "/register/", { waitUntil: "networkidle" });

console.log("\n1) แถบบอกโหมดทดลอง");
ok("แสดงแถบ notice--demo", await page.locator(".notice--demo").isVisible());
ok("มีปุ่มกรอกข้อมูลตัวอย่าง", await page.getByRole("button", { name: /ข้อมูลตัวอย่าง|sample data/i }).isVisible());

console.log("\n2) กดส่งทั้งที่ยังไม่กรอกอะไร");
await page.locator('button[type="submit"]').click();
await page.waitForTimeout(400);
const errCount = await page.locator(".field__err").count();
ok("ขึ้นข้อความเตือนครบทุกช่องบังคับ (7)", errCount === 7, `พบ ${errCount}`);
const focused = await page.evaluate(() => document.activeElement?.id);
ok("โฟกัสกระโดดไปช่องแรกที่ผิด", focused === "f-name", `focus = ${focused}`);
ok("ยังไม่ขึ้นหน้าสำเร็จ", (await page.locator(".form-done").count()) === 0);

console.log("\n3) อีเมลผิดรูปแบบ");
await page.fill("#f-name", "ทดสอบ ระบบ");
await page.fill("#f-email", "not-an-email");
await page.locator('button[type="submit"]').click();
await page.waitForTimeout(300);
ok(
  "จับอีเมลผิดรูปแบบได้",
  (await page.locator("#e-email .field__err").innerText()).match(/ไม่ถูกต้อง|incorrect/) !== null,
);

console.log("\n4) กดปุ่มกรอกข้อมูลตัวอย่าง");
await page.getByRole("button", { name: /ข้อมูลตัวอย่าง|sample data/i }).click();
await page.waitForTimeout(250);
ok("ชื่อถูกเติม", (await page.inputValue("#f-name")).length > 0);
ok("อีเมลถูกเติม", (await page.inputValue("#f-email")).includes("@"));
ok("เลือกงานให้แล้ว", (await page.inputValue("#f-edition")) === "sut");
ok("ติ๊กยอมรับข้อปฏิบัติให้แล้ว", await page.locator('input[name="coc"]').isChecked());
ok("ข้อความเตือนหายไปหมด", (await page.locator(".field__err").count()) === 0);

console.log("\n5) เอาการยอมรับข้อปฏิบัติออก แล้วลองส่ง");
await page.locator('input[name="coc"]').uncheck();
await page.locator('button[type="submit"]').click();
await page.waitForTimeout(350);
ok("บล็อกไว้เพราะยังไม่ยอมรับข้อปฏิบัติ", (await page.locator(".form-done").count()) === 0);
ok("ขึ้นเตือนเรื่องข้อปฏิบัติ", (await page.locator(".field__err").count()) === 1);

console.log("\n6) ส่งจริง");
await page.locator('input[name="coc"]').check();
await page.locator('button[type="submit"]').click();
await page.waitForTimeout(150);
ok("ปุ่มถูกล็อกระหว่างส่ง", await page.locator('button[type="submit"]').isDisabled());
ok("มีวงหมุนบอกสถานะ", (await page.locator(".spin").count()) === 1);

await page.waitForSelector(".form-done", { timeout: 6000 });
console.log("\n7) หน้ายืนยัน");
const ref = (await page.locator(".form-done__ref code").innerText()).trim();
ok("ออกรหัสอ้างอิงถูกรูปแบบ", /^QFF26-[A-Z]{3}-[A-Z0-9]{4}$/.test(ref), ref);
const rows = await page.locator(".receipt__row").count();
ok("สรุปคำตอบครบทุกข้อ (13 + เวลาที่ส่ง)", rows === 14, `พบ ${rows} แถว`);
const rec = await page.locator(".receipt").innerText();
ok("มีชื่อที่กรอกในใบสรุป", rec.includes("ณิชา"));
ok("มีอีเมลที่กรอกในใบสรุป", rec.includes("nicha.w@example.ac.th"));
ok("มีงานที่เลือกในใบสรุป", /สุรนารี|Suranaree/.test(rec));
ok("มีปุ่มส่งอีเมล", await page.getByRole("link", { name: /ทางอีเมล|Email these/i }).isVisible());
ok(
  "ลิงก์อีเมลแนบข้อมูลไปด้วย",
  ((await page.getByRole("link", { name: /ทางอีเมล|Email these/i }).getAttribute("href")) || "").includes("body="),
);

console.log("\n8) เก็บข้อมูลไว้ในเครื่อง");
const stored = await page.evaluate(() => JSON.parse(localStorage.getItem("qff2026:registrations") || "[]"));
ok("บันทึกลง localStorage 1 รายการ", stored.length === 1, `${stored.length} รายการ`);
ok("รหัสอ้างอิงตรงกับที่แสดง", stored[0]?.ref === ref);
ok("เก็บค่าที่กรอกครบ", Object.keys(stored[0]?.values || {}).length === 13);
ok("ติดธงว่าเป็นข้อมูลทดลอง", stored[0]?.demo === true);

console.log("\n9) ลงทะเบียนอีกคน");
await page.getByRole("button", { name: /ลงทะเบียนอีกคน|Register someone else/i }).click();
await page.waitForTimeout(300);
ok("กลับมาที่ฟอร์มเปล่า", (await page.inputValue("#f-name")) === "");
ok("แถบโหมดทดลองยังอยู่", await page.locator(".notice--demo").isVisible());
ok("มีปุ่มดาวน์โหลดรายการที่เก็บไว้", await page.getByRole("button", { name: /ดาวน์โหลด|Download/i }).first().isVisible());

console.log("\n10) ส่งใบที่สอง");
await page.getByRole("button", { name: /ข้อมูลตัวอย่าง|sample data/i }).click();
await page.locator('button[type="submit"]').click();
await page.waitForSelector(".form-done", { timeout: 6000 });
const stored2 = await page.evaluate(() => JSON.parse(localStorage.getItem("qff2026:registrations") || "[]"));
ok("เก็บสะสมเป็น 2 รายการ", stored2.length === 2, `${stored2.length} รายการ`);
ok("รหัสอ้างอิงไม่ซ้ำกัน", stored2[0].ref !== stored2[1].ref, `${stored2[0].ref} / ${stored2[1].ref}`);

console.log("\n11) สลับเป็นภาษาอังกฤษ");
await page.goto(BASE + "/register/", { waitUntil: "networkidle" });
await page.locator(".lang button", { hasText: "EN" }).first().click();
await page.waitForTimeout(300);
ok("แถบโหมดทดลองเป็นอังกฤษ", (await page.locator(".notice--demo").innerText()).includes("Test mode"));
await page.getByRole("button", { name: /sample data/i }).click();
await page.locator('button[type="submit"]').click();
await page.waitForSelector(".form-done", { timeout: 6000 });
ok("หน้ายืนยันเป็นอังกฤษ", (await page.locator(".form-done h3").innerText()).includes("Submitted"));

console.log("\n12) มือถือ");
const mob = await ctx.newPage();
await mob.setViewportSize({ width: 390, height: 780 });
await mob.goto(BASE + "/register/", { waitUntil: "networkidle" });
await mob.getByRole("button", { name: /ข้อมูลตัวอย่าง|sample data/i }).click();
await mob.locator('button[type="submit"]').click();
await mob.waitForSelector(".form-done", { timeout: 6000 });
ok("กรอกและส่งบนจอมือถือได้", await mob.locator(".form-done__ref code").isVisible());
const overflow = await mob.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
ok("ไม่มีอะไรล้นออกนอกจอ", overflow <= 1, `ล้น ${overflow}px`);

console.log("\n13) ปิดอนิเมชัน (prefers-reduced-motion)");
const rm = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1280, height: 900 } });
const rmp = await rm.newPage();
await rmp.goto(BASE + "/register/", { waitUntil: "networkidle" });
await rmp.getByRole("button", { name: /ข้อมูลตัวอย่าง|sample data/i }).click();
await rmp.locator('button[type="submit"]').click();
await rmp.waitForSelector(".form-done", { timeout: 6000 });
ok("ยังส่งได้ตามปกติ", await rmp.locator(".form-done__ref code").isVisible());

console.log(`\n=== console errors: ${errors.length} ===`);
errors.slice(0, 5).forEach((e) => console.log("   " + e.slice(0, 160)));
await browser.close();
