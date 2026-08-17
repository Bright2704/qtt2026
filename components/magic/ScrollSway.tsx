"use client";

import { useEffect } from "react";

/* ============================================================
   ความเร็วการเลื่อน → ตัวแปร CSS --scrollv

   บนมือถือไม่มีเคอร์เซอร์ พารัลแลกซ์ตามเมาส์จึงใช้ไม่ได้
   ตัวนี้ทำหน้าที่แทน โดยวัดว่าผู้ใช้ปัดเร็วแค่ไหน แล้วเขียนค่า -1..1
   ลงบน :root ให้ CSS เอาไปเอียงหรือขยับอะไรก็ได้

   ปัดลงเร็ว = ค่าเป็นบวก · ปัดขึ้นเร็ว = ค่าเป็นลบ · หยุดนิ่ง = ค่อย ๆ กลับเข้า 0
   ทำงานทั้งบนมือถือและเดสก์ท็อป (เดสก์ท็อปมีล้อเมาส์เหมือนกัน)

   ใช้ตัวแปรตัวเดียวขับทุกอย่าง จึงเสียแค่ rAF ลูปเดียวทั้งหน้า
   ============================================================ */
export default function ScrollSway() {
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    let last = window.scrollY;
    let target = 0; // ค่าดิบจากความเร็วล่าสุด
    let cur = 0;    // ค่าที่ไล่ตามแบบนุ่ม เอาไปเขียนลง CSS
    let raf = 0;
    let idle = 0;

    const tick = () => {
      raf = 0;
      // ไล่เข้าหาเป้าหมายทีละ 25% ต่อเฟรม แล้วปล่อยให้เป้าหมายสลายกลับ 0
      // ค่านี้ทำให้สะบัดแล้วเข้าที่ในราวหนึ่งในสามวินาที — รู้สึกมีชีวิตแต่ไม่โยกค้าง
      cur += (target - cur) * 0.25;
      target *= 0.85;
      root.style.setProperty("--scrollv", cur.toFixed(4));

      // ถ้านิ่งพอแล้วก็หยุดวาด ไม่กินแบตเตอรี่ตอนผู้ใช้อ่านอยู่เฉย ๆ
      if (Math.abs(cur) < 0.002 && Math.abs(target) < 0.002) {
        if (++idle > 6) { root.style.setProperty("--scrollv", "0"); return; }
      } else {
        idle = 0;
      }
      raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      const y = window.scrollY;
      const dv = y - last;
      last = y;
      // 38px ต่อครั้งถือว่าปัดเต็มแรงแล้ว เกินจากนั้นตัดทิ้ง จะได้ไม่เหวี่ยงเกินงาม
      // (เบราว์เซอร์รวบเหตุการณ์ scroll หลายครั้งเป็นครั้งเดียว ค่าต่อครั้งจึงมักใหญ่)
      const norm = Math.max(-1, Math.min(1, dv / 38));
      // เก็บค่าที่แรงกว่าไว้ เพื่อให้การสะบัดครั้งเดียวยังรู้สึกได้
      if (Math.abs(norm) > Math.abs(target)) target = norm;
      idle = 0;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
      root.style.removeProperty("--scrollv");
    };
  }, []);

  return null;
}
