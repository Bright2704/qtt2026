"use client";

import { useLang } from "@/lib/i18n";
import type { Person } from "@/data/people";
import { TbcChip } from "./ui";

export default function PersonCard({ p, showTopic = true }: { p: Person; showTopic?: boolean }) {
  const { t } = useLang();

  return (
    <article className="person">
      <div className="person__wrap">
        <img
          className="person__img"
          src={p.photo ?? "/assets/speaker-placeholder.svg"}
          alt={p.photo ? t(p.name) : ""}
          aria-hidden={p.photo ? undefined : true}
        />
      </div>
      <h3>
        {p.link ? (
          <a href={p.link} target="_blank" rel="noreferrer noopener" style={{ textDecoration: "none" }}>
            {t(p.name)}
          </a>
        ) : (
          t(p.name)
        )}
        {!p.confirmed && <TbcChip />}
      </h3>
      <p className="person__role" style={{ margin: 0 }}>
        {t(p.role)}
      </p>
      <p className="person__org" style={{ margin: 0 }}>
        {t(p.org)}
      </p>
      {showTopic && p.topic && <p className="person__topic">{t(p.topic)}</p>}
    </article>
  );
}
