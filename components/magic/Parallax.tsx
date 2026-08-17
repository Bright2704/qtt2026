"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * พารัลแลกซ์ตอนเลื่อนหน้า
 *
 * ใช้ rAF + IntersectionObserver ไม่พึ่งไลบรารีอนิเมชัน
 * และคำนวณจากตำแหน่งกึ่งกลางของ element เทียบกับกึ่งกลางจอ
 * จึงไม่กระตุกเวลาโหลดหน้ากลางทาง
 *
 * สำคัญ: อย่าใส่ทับ element ที่มี animation บน transform อยู่แล้ว
 * (เช่นสติกเกอร์ที่ลอยขึ้นลง) ให้ครอบตัวแม่แทน ไม่งั้นจะตีกัน
 */
export default function Parallax({
  children,
  speed = 0.12,
  axis = "y",
  className = "",
}: {
  children: ReactNode;
  /** บวก = เลื่อนช้ากว่าหน้า (ลอยตาม), ลบ = เลื่อนสวนขึ้น */
  speed?: number;
  axis?: "y" | "x";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    let visible = false;

    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      // ระยะจากกึ่งกลางจอ หน่วยเป็นพิกเซล
      const fromCenter = r.top + r.height / 2 - window.innerHeight / 2;
      const shift = -fromCenter * speed;
      el.style.transform =
        axis === "y" ? `translate3d(0, ${shift.toFixed(1)}px, 0)`
                     : `translate3d(${shift.toFixed(1)}px, 0, 0)`;
    };

    const onScroll = () => {
      if (!visible || raf) return;
      raf = requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
        if (visible) update();
      },
      { rootMargin: "120px 0px" },
    );
    io.observe(el);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      el.style.transform = "";
    };
  }, [speed, axis]);

  return (
    <div ref={ref} className={`parallax ${className}`.trim()}>
      {children}
    </div>
  );
}
