"use client";

import { useCallback, type ReactNode } from "react";

/**
 * ไฟสปอตไลต์นุ่ม ๆ วิ่งตามเมาส์บนการ์ด (แบบ Magic Card ของ Magic UI)
 * ใช้ CSS custom property เพื่อไม่ต้อง re-render React ทุกครั้งที่เมาส์ขยับ
 */
export default function Spotlight({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, []);

  return (
    <div className={`spotlight ${className}`.trim()} style={style} onMouseMove={onMove}>
      {children}
    </div>
  );
}
