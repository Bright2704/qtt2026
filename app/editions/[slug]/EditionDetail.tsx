"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { useLang } from "@/lib/i18n";
import { getEdition, statusLabel } from "@/data/editions";
import { agenda } from "@/data/programme";
import Icon from "@/components/Icon";
import Timeline from "@/components/Timeline";
import { CapacityMeter, Notice, Section } from "@/components/ui";

export default function EditionDetail({ slug }: { slug: string }) {
  const { t } = useLang();
  const e = getEdition(slug);
  if (!e) notFound();

  const isOnline = e.id === "online";
  const isPlanned = e.status === "planned";

  return (
    <>
      <header className="pagehead">
        <div className="wrap">
          <p className="crumbs">
            <Link href="/editions">{t({ th: "งานทั้งหมด", en: "Editions" })}</Link> /{" "}
            {t(e.city)}
          </p>
          <span className={`status status--${e.status}`}>{t(statusLabel[e.status])}</span>
          <h1 style={{ marginTop: 12 }}>{t(e.name)}</h1>
          <p className="lead">{t(e.summary)}</p>

          <div
            style={{
              display: "flex",
              gap: 28,
              flexWrap: "wrap",
              marginTop: 32,
              fontSize: 15.5,
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <Icon name="i-pin" size={19} /> {t(e.city)}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <Icon name="i-calendar" size={19} /> {t(e.dateLabel)}
            </span>
            {e.start !== "—" && (
              <span style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <Icon name="i-clock" size={19} /> {e.start} – {e.end}
              </span>
            )}
            {e.capacity && (
              <span style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <Icon name="i-users" size={19} />{" "}
                {e.capacity} {t({ th: "ที่นั่ง", en: "seats" })}
              </span>
            )}
          </div>

          {e.status === "open" && (
            <div className="btn-row" style={{ marginTop: 32 }}>
              <Link className="btn btn--primary" href="/register">
                {t({ th: "จองที่นั่งงานนี้", en: "Book a seat here" })}
                <Icon name="i-arrow" size={18} />
              </Link>
              <Link className="btn btn--ghostDark" href="/learn">
                {t({ th: "ดูวิธีเตรียมตัว", en: "How to prepare" })}
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* ---------- Seats + venue ---------- */}
      <Section>
        <div className="grid grid--2" style={{ gap: 48, alignItems: "start" }}>
          <div className="stack">
            <div>
              <p className="eyebrow">{t({ th: "สถานที่", en: "Venue" })}</p>
              <h2>{isOnline ? t({ th: "เข้าร่วมออนไลน์", en: "Joining online" }) : t({ th: "การเดินทาง", en: "Getting there" })}</h2>
            </div>

            <p className="prose">{t(e.address)}</p>

            {e.travel.length > 0 && (
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {e.travel.map((tr, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: 14,
                      alignItems: "flex-start",
                      padding: "14px 0",
                      borderBottom: "1px solid rgba(43,20,90,.08)",
                    }}
                  >
                    <span style={{ color: "var(--indigo-600)", flex: "none", marginTop: 3 }}>
                      <Icon name={tr.icon} size={20} />
                    </span>
                    <span style={{ fontSize: 15.5 }}>{t(tr.text)}</span>
                  </li>
                ))}
              </ul>
            )}

            {!isOnline && !isPlanned && e.mapQuery && (
              <div className="embed-placeholder" style={{ minHeight: 260 }}>
                <Icon name="i-pin" size={34} />
                <div>
                  <strong>{t({ th: "แผนที่", en: "Map" })}</strong>
                  <p className="small muted" style={{ marginTop: 6, maxWidth: "42ch" }}>
                    {t({
                      th: "ใส่ Google Maps embed ตรงนี้ได้เลย — ดูวิธีในไฟล์ README ของโปรเจกต์",
                      en: "Drop a Google Maps embed here — see the project README for how.",
                    })}
                  </p>
                  <p className="small mono muted" style={{ marginTop: 8 }}>
                    {e.mapQuery}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="stack">
            <div className="card">
              <h3>{t({ th: "ที่นั่งเหลือเท่าไหร่", en: "Seats remaining" })}</h3>
              <div style={{ marginTop: 18 }}>
                <CapacityMeter registered={e.registered} capacity={e.capacity} />
              </div>
              <p style={{ marginTop: 18 }}>{t(e.audience)}</p>
              {e.status === "open" && (
                <Link className="btn btn--primary btn--block" href="/register" style={{ marginTop: 20 }}>
                  {t({ th: "ลงทะเบียน", en: "Register" })}
                </Link>
              )}
              {isPlanned && (
                <Link className="btn btn--secondary btn--block" href="/contact" style={{ marginTop: 20 }}>
                  {t({ th: "แจ้งความสนใจ", en: "Register your interest" })}
                </Link>
              )}
            </div>

            {!isOnline && !isPlanned && (
              <Notice tone="warn" icon="i-laptop">
                <p style={{ margin: 0 }}>
                  <strong>{t({ th: "อย่าลืมโน้ตบุ๊ก ", en: "Do not forget your laptop. " })}</strong>
                  {t({
                    th: "ทุกคนต้องนำเครื่องมาเอง เราไม่มีเครื่องสำรองให้ ชาร์จไฟมาให้เต็มและพกสายชาร์จมาด้วย",
                    en: "Everyone must bring their own. We have no spares — arrive charged and bring your cable.",
                  })}
                </p>
              </Notice>
            )}
          </div>
        </div>
      </Section>

      {/* ---------- Agenda ---------- */}
      {!isOnline && !isPlanned && (
        <Section variant="mist">
          <p className="eyebrow">{t({ th: "กำหนดการ", en: "Programme" })}</p>
          <h2>{t({ th: "หนึ่งวันของคุณที่นี่", en: "Your day here" })}</h2>
          <div style={{ marginTop: 40 }}>
            <Timeline slots={agenda} />
          </div>
          <div className="btn-row" style={{ marginTop: 24 }}>
            <Link className="btn btn--secondary" href="/programme">
              {t({ th: "ดูรายละเอียดหลักสูตร", en: "See the full curriculum" })}
              <Icon name="i-arrow" size={18} />
            </Link>
          </div>
        </Section>
      )}

      {isOnline && (
        <Section variant="mist">
          <p className="eyebrow">{t({ th: "รูปแบบ", en: "Format" })}</p>
          <h2>{t({ th: "หนึ่งชั่วโมง สองรอบ", en: "One hour, run twice" })}</h2>
          <div className="prose lead" style={{ marginTop: 24 }}>
            <p>
              {t({
                th: "เราจัดสองรอบเพื่อให้ทุกคนมีโอกาสเข้าอย่างน้อยหนึ่งครั้ง เนื้อหาเหมือนกันทั้งสองรอบ ครอบคลุมภาพรวมของกิจกรรมทั้งหมด สิ่งที่ต้องเตรียม และปูพื้นควอนตัมแบบเบา ๆ",
                en: "We run it twice so nobody misses out. Both sessions cover the same ground: the shape of the day, what to prepare, and a gentle introduction to the quantum ideas involved.",
              })}
            </p>
            <p>
              {t({
                th: "ไม่บังคับ แต่แนะนำอย่างยิ่ง คนที่เข้าปฐมนิเทศจะตามทันในวันงานได้ง่ายกว่ามาก และมีบันทึกย้อนหลังให้ดูภายหลัง",
                en: "Optional, but strongly recommended — those who attend find the workshop day much easier to follow. A recording is published afterwards.",
              })}
            </p>
          </div>
        </Section>
      )}
    </>
  );
}
