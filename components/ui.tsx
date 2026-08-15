"use client";

import type { ReactNode } from "react";
import { useLang, type L } from "@/lib/i18n";
import Icon from "./Icon";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function Section({
  children,
  variant,
  tight,
  id,
}: {
  children: ReactNode;
  variant?: "mist" | "dark" | "lilac";
  tight?: boolean;
  id?: string;
}) {
  const cls = [
    "section",
    tight ? "section--tight" : "",
    variant ? `section--${variant}` : "",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <section className={cls} id={id}>
      <div className="wrap">{children}</div>
    </section>
  );
}

export function PageHead({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: L;
  title: L;
  lead?: L;
}) {
  const { t } = useLang();
  return (
    <header className="pagehead">
      <div className="wrap">
        {eyebrow && <p className="eyebrow">{t(eyebrow)}</p>}
        <h1>{t(title)}</h1>
        {lead && <p className="lead">{t(lead)}</p>}
      </div>
    </header>
  );
}

export function Notice({
  children,
  tone = "info",
  icon = "i-info",
}: {
  children: ReactNode;
  tone?: "info" | "warn" | "pink";
  icon?: string;
}) {
  return (
    <div className={`notice${tone === "info" ? "" : ` notice--${tone}`}`}>
      <Icon name={icon} size={22} />
      <div>{children}</div>
    </div>
  );
}

export function TbcChip({ label }: { label?: L }) {
  const { t } = useLang();
  return (
    <span className="tbc-chip">
      {t(label ?? { th: "รอยืนยัน", en: "To be confirmed" })}
    </span>
  );
}

export function Stat({ num, label }: { num: string; label: L }) {
  const { t } = useLang();
  return (
    <div className="stat">
      <span className="stat__num">{num}</span>
      <span className="stat__label">{t(label)}</span>
    </div>
  );
}

export function CapacityMeter({
  registered,
  capacity,
  compact,
}: {
  registered: number;
  capacity: number | null;
  compact?: boolean;
}) {
  const { t } = useLang();
  if (capacity === null) {
    return (
      <p className="meter__label">
        {t({ th: "ไม่จำกัดจำนวนผู้เข้าร่วม", en: "No attendance limit" })}
      </p>
    );
  }
  const pct = Math.min(100, Math.round((registered / capacity) * 100));
  return (
    <div className="meter">
      <div
        className="meter__track"
        role="progressbar"
        aria-valuenow={registered}
        aria-valuemin={0}
        aria-valuemax={capacity}
        aria-label={t({ th: "จำนวนที่นั่งที่ลงทะเบียนแล้ว", en: "Seats taken" })}
      >
        <div className="meter__fill" style={{ width: `${pct}%` }} />
      </div>
      {!compact && (
        <p className="meter__label">
          {registered} / {capacity}{" "}
          {t({ th: "ที่นั่ง", en: "seats" })}
        </p>
      )}
    </div>
  );
}
