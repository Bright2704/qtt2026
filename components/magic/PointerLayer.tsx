"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * พารัลแลกซ์ตามเมาส์
 *
 * ขยับตามตำแหน่งเคอร์เซอร์เทียบกับกึ่งกลางหน้าจอ ยิ่ง depth มาก ยิ่งขยับเยอะ
 * ทำให้ของหลายชิ้นที่ depth ต่างกันดูมีระยะลึกตื้นต่างกัน
 *
 * ใช้ rAF และไล่เข้าหาค่าเป้าหมายแบบนุ่ม (lerp) ไม่กระตุกตามเมาส์ตรง ๆ
 * บนอุปกรณ์สัมผัสจะไม่ทำงาน เพราะไม่มีเคอร์เซอร์ให้ตาม
 */
export default function PointerLayer({
  children,
  depth = 16,
  className = "",
}: {
  children: ReactNode;
  /** ระยะขยับสูงสุดเป็นพิกเซล */
  depth?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    // เมาส์จริงเท่านั้น บนมือถือไม่มีเคอร์เซอร์ให้ตาม
    if (!window.matchMedia?.("(hover: hover) and (pointer: fine)").matches) return;

    let tx = 0, ty = 0;   // เป้าหมาย
    let cx = 0, cy = 0;   // ค่าปัจจุบัน
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      // -1 ถึง 1 เทียบกับกึ่งกลางจอ
      tx = (e.clientX / window.innerWidth - 0.5) * 2 * depth;
      ty = (e.clientY / window.innerHeight - 0.5) * 2 * depth;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const tick = () => {
      // ไล่เข้าหาเป้าหมายทีละ 8% ต่อเฟรม ได้ความหน่วงแบบนุ่ม ๆ
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      el.style.transform = `translate3d(${cx.toFixed(2)}px, ${cy.toFixed(2)}px, 0)`;
      raf = Math.abs(tx - cx) > 0.1 || Math.abs(ty - cy) > 0.1
        ? requestAnimationFrame(tick)
        : 0;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
      el.style.transform = "";
    };
  }, [depth]);

  return (
    <div ref={ref} className={`pointer-layer ${className}`.trim()}>
      {children}
    </div>
  );
}
