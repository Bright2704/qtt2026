"use client";

import { useEffect, useRef, useState } from "react";

/**
 * ตัวเลขนับขึ้นเมื่อเลื่อนมาถึง
 * รับค่าที่มีเครื่องหมายปนได้ เช่น "32,000+" หรือ "100%"
 * จะแยกส่วนตัวเลขไปนับ แล้วประกอบ prefix/suffix กลับตามเดิม
 */
export default function NumberTicker({
  value,
  duration = 1500,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // แยก "32,000+" -> prefix "" digits "32000" suffix "+"
    const match = value.match(/^(\D*)([\d,.]+)(\D*)$/);
    if (!match) return;

    const [, prefix, rawNum, suffix] = match;
    const hasComma = rawNum.includes(",");
    const target = Number(rawNum.replace(/,/g, ""));
    if (!Number.isFinite(target)) return;

    const fmt = (n: number) => {
      const rounded = Math.round(n);
      return prefix + (hasComma ? rounded.toLocaleString("en-US") : String(rounded)) + suffix;
    };

    setDisplay(fmt(0));

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setDisplay(value);
      return;
    }

    const run = () => {
      if (done.current) return;
      done.current = true;
      const start = performance.now();

      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        // ease-out cubic ให้ชะลอตอนใกล้เลขจริง
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(fmt(target * eased));
        if (p < 1) requestAnimationFrame(tick);
        else setDisplay(value);
      };
      requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === "undefined") {
      run();
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className="ticker">
      {display}
    </span>
  );
}
