"use client";

import { useEffect, useRef } from "react";
import type { ScatterItem } from "@/data/stickers";
import Sticker from "./Sticker";

/**
 * สติกเกอร์ตกแต่งกระจายอยู่ในพื้นหลังของ section
 *
 * พารัลแลกซ์ทำ "รายตัว" ไม่ใช่ครอบทั้งกลุ่ม
 * แต่ละตัวมี speed ของตัวเอง เวลาเลื่อนหน้าจึงค่อย ๆ แยกออกจากกัน
 * เกิดเป็นความลึกแบบหลายชั้น ไม่ใช่ภาพกองเดียวเลื่อนขึ้นลงพร้อมกัน
 *
 * โครงสองชั้นต่อสติกเกอร์หนึ่งตัว
 *   .scatter__slot  รับ transform ของพารัลแลกซ์อย่างเดียว
 *   .scatter__item  รับการเอียงกับการลอยขึ้นลง
 * แยกกันเพราะถ้าใส่ทั้งสองอย่างบน element เดียว transform จะทับกันแล้วกระตุก
 */
export default function Scatter({ items }: { items: ScatterItem[] }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const slots = Array.from(
      el.querySelectorAll<HTMLElement>(".scatter__slot"),
    );
    let raf = 0;
    let visible = false;

    // ตำแหน่งเมาส์ -1..1 เทียบกึ่งกลางจอ (มีเฉพาะเครื่องที่มีเคอร์เซอร์จริง)
    const finePointer =
      window.matchMedia?.("(hover: hover) and (pointer: fine)").matches ?? false;
    let mtx = 0, mty = 0;  // เป้าหมายจากเมาส์
    let mcx = 0, mcy = 0;  // ค่าที่ไล่ตามแบบนุ่ม

    /* จอมือถือสูงน้อยกว่าจอคอม ระยะที่สติกเกอร์วิ่งผ่านสายตาจึงสั้นกว่ามาก
       ถ้าใช้ speed เท่ากันจะรู้สึกเหมือนไม่ขยับเลย เลยคูณเพิ่มตามความแคบของจอ */
    const speedBoost = () => (window.innerWidth <= 760 ? 1.75 : 1);

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const boost = speedBoost();
      // ไล่ค่าเมาส์เข้าหาเป้าหมายทีละนิด ให้ลื่นไม่กระตุก
      mcx += (mtx - mcx) * 0.08;
      mcy += (mty - mcy) * 0.08;

      for (const s of slots) {
        const speed = parseFloat(s.dataset.speed || "0.1") * boost;
        const drift = parseFloat(s.dataset.drift || "0") * boost;
        const r = s.getBoundingClientRect();
        const fromCenter = r.top + r.height / 2 - vh / 2;
        // ตัวที่พารัลแลกซ์เร็วกว่า ให้ตอบสนองเมาส์แรงกว่าด้วย จะได้รู้สึกเป็นชั้นเดียวกัน
        const mDepth = 10 + speed * 60;
        const y = -fromCenter * speed + mcy * mDepth;
        const x = -fromCenter * drift + mcx * mDepth;
        s.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      }

      // ถ้าเมาส์ยังไล่ไม่ถึงเป้า ให้วาดต่อเฟรมถัดไป
      if (visible && (Math.abs(mtx - mcx) > 0.002 || Math.abs(mty - mcy) > 0.002)) {
        raf = requestAnimationFrame(update);
      }
    };

    const onScroll = () => {
      if (!visible || raf) return;
      raf = requestAnimationFrame(update);
    };

    const onPointer = (e: PointerEvent) => {
      if (!finePointer || !visible) return;
      mtx = (e.clientX / window.innerWidth - 0.5) * 2;
      mty = (e.clientY / window.innerHeight - 0.5) * 2;
      if (!raf) raf = requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
        if (visible) update();
      },
      { rootMargin: "200px 0px" },
    );
    io.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pointermove", onPointer);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [items]);

  return (
    <div className="scatter" aria-hidden="true" ref={root}>
      {items.map((s, i) => (
        <span
          key={s.sticker.id + i}
          className={`scatter__slot${s.keepOnMobile ? " scatter__slot--keep" : ""}`}
          data-speed={s.speed ?? 0.12}
          data-drift={s.drift ?? 0}
          style={
            {
              "--top": s.top,
              "--left": s.left,
              "--size": s.size,
              "--op": s.opacity,
            } as React.CSSProperties
          }
        >
          <Sticker
            sticker={s.sticker}
            className="scatter__item"
            style={
              {
                "--tilt": `${s.tilt}deg`,
                "--bob": s.bob,
                "--delay": s.delay,
              } as React.CSSProperties
            }
          />
        </span>
      ))}
    </div>
  );
}
