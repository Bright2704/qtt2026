"use client";

import { useEffect, useState } from "react";
import { useLang, type L } from "@/lib/i18n";

const units: { key: "d" | "h" | "m" | "s"; label: L }[] = [
  { key: "d", label: { th: "วัน", en: "days" } },
  { key: "h", label: { th: "ชั่วโมง", en: "hours" } },
  { key: "m", label: { th: "นาที", en: "minutes" } },
  { key: "s", label: { th: "วินาที", en: "seconds" } },
];

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    d: Math.floor(ms / 86_400_000),
    h: Math.floor(ms / 3_600_000) % 24,
    m: Math.floor(ms / 60_000) % 60,
    s: Math.floor(ms / 1000) % 60,
  };
}

export default function Countdown({
  /** ISO date เช่น "2026-10-25T08:30:00+07:00" */
  target,
  label,
  fallback,
}: {
  target: string | null;
  label: L;
  fallback: L;
}) {
  const { t } = useLang();
  const targetMs = target ? new Date(target).getTime() : null;

  // เริ่มที่ null เพื่อให้ HTML ที่ prerender ตรงกับที่ client render รอบแรก (กัน hydration mismatch)
  const [left, setLeft] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    if (!targetMs) return;
    setLeft(diff(targetMs));
    const id = setInterval(() => setLeft(diff(targetMs)), 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  if (!targetMs) {
    return (
      <div className="countdown">
        <p className="countdown__label">{t(label)}</p>
        <p className="lead" style={{ marginTop: 0 }}>
          {t(fallback)}
        </p>
      </div>
    );
  }

  return (
    <div className="countdown">
      <p className="countdown__label">{t(label)}</p>
      {/* aria-live ปิดไว้ ไม่งั้น screen reader จะอ่านทุกวินาที */}
      <div className="countdown__row" aria-live="off">
        {units.map((u) => (
          <div className="countdown__cell" key={u.key}>
            <span className="countdown__num">
              {left ? String(left[u.key]).padStart(2, "0") : "––"}
            </span>
            <span className="countdown__unit">{t(u.label)}</span>
          </div>
        ))}
      </div>
      <p className="sr-only">{t(fallback)}</p>
    </div>
  );
}
