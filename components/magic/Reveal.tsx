"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * ค่อย ๆ ปรากฏพร้อมเบลอจาง ๆ เมื่อเลื่อนมาถึง (แบบ Blur Fade ของ Magic UI)
 * ใช้ IntersectionObserver ไม่ต้องพึ่งไลบรารีอนิเมชัน
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  /** หน่วงเป็นมิลลิวินาที ใช้ไล่ให้การ์ดโผล่ทีละใบ */
  delay?: number;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // ถ้าเบราว์เซอร์ไม่รองรับ ให้แสดงเลย ดีกว่าหน้าว่าง
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as React.ElementType;

  return (
    <Comp
      ref={ref}
      className={`reveal ${className}`.trim()}
      data-shown={shown}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Comp>
  );
}
