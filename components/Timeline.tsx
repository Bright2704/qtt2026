"use client";

import { useLang } from "@/lib/i18n";
import type { Slot } from "@/data/programme";

export default function Timeline({ slots }: { slots: Slot[] }) {
  const { t } = useLang();

  return (
    <ol className="tl">
      {slots.map((s) => (
        <li
          className="tl__item"
          key={s.time}
          data-kind={s.kind ?? "session"}
          data-tbc={s.tbc ? "true" : "false"}
        >
          <span className="tl__dot" aria-hidden="true" />
          <div className="tl__time">{s.time}</div>
          <div className="tl__card">
            <h3>{t(s.title)}</h3>
            <p>{t(s.detail)}</p>
            {s.speaker && (
              <span className="tl__tag">
                {t({ th: "โดย ", en: "with " })}
                {t(s.speaker)}
              </span>
            )}
            {s.tbc && !s.speaker && (
              <span className="tl__tag">
                {t({ th: "รอยืนยันวิทยากร", en: "Speaker to be confirmed" })}
              </span>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
