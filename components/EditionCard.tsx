"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { statusLabel, type Edition } from "@/data/editions";
import Icon from "./Icon";
import { CapacityMeter } from "./ui";

export default function EditionCard({ e }: { e: Edition }) {
  const { t } = useLang();
  const muted = e.status === "planned";

  return (
    <article className={`card card--hover edition${muted ? " edition--muted" : ""}`}>
      <img className="edition__img" src={e.image} alt="" aria-hidden="true" />

      <div className="edition__body">
        <span className={`status status--${e.status}`}>{t(statusLabel[e.status])}</span>

        <div>
          <h3>{t(e.name)}</h3>
        </div>

        <div className="edition__meta">
          <span>
            <Icon name="i-pin" size={17} />
            {t(e.city)}
          </span>
          <span>
            <Icon name="i-calendar" size={17} />
            {t(e.dateLabel)}
          </span>
          {e.start !== "—" && (
            <span>
              <Icon name="i-clock" size={17} />
              {e.start} – {e.end}
            </span>
          )}
        </div>

        {e.status !== "planned" && (
          <CapacityMeter registered={e.registered} capacity={e.capacity} />
        )}

        <p className="edition__who">
          <strong>{t({ th: "เหมาะกับ: ", en: "For: " })}</strong>
          {t(e.audience)}
        </p>

        <div className="edition__actions">
          <Link className="btn btn--secondary btn--sm" href={`/editions/${e.slug}`}>
            {t({ th: "ดูรายละเอียด", en: "Details" })}
          </Link>
          {e.status === "open" && (
            <Link className="btn btn--primary btn--sm" href="/register">
              {t({ th: "จองที่นั่ง", en: "Book a seat" })}
            </Link>
          )}
          {e.status === "planned" && (
            <Link className="btn btn--secondary btn--sm" href="/contact">
              {t({ th: "รับแจ้งเตือน", en: "Get notified" })}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
