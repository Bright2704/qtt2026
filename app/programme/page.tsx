"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { agenda, syllabus, tracks } from "@/data/programme";
import Icon from "@/components/Icon";
import Timeline from "@/components/Timeline";
import { Notice, PageHead, Section } from "@/components/ui";

const trackTone: Record<string, { th: string; en: string }> = {
  current: { th: "งานนี้", en: "This event" },
  "current-bkk": { th: "เฉพาะที่กรุงเทพฯ", en: "Bangkok only" },
  future: { th: "งานต่อเนื่อง", en: "Follow-on event" },
};

export default function Programme() {
  const { t } = useLang();

  return (
    <>
      <PageHead
        eyebrow={{ th: "กำหนดการ", en: "Programme" }}
        title={{
          th: "หนึ่งวันเต็ม จากไม่รู้ว่าคิวบิตคืออะไร จนรันวงจรควอนตัมของตัวเองได้",
          en: "One full day: from not knowing what a qubit is, to running your own circuit",
        }}
        lead={{
          th: "ตารางนี้ใช้ทั้งงานที่มหาวิทยาลัยเทคโนโลยีสุรนารีและที่ True Digital Park เซสชันช่วงบ่ายของงานกรุงเทพฯ จะปรับเนื้อหาให้เข้ากับผู้เข้าร่วมสายทำงาน",
          en: "This schedule applies to both the SUT and True Digital Park editions. Afternoon sessions in Bangkok are adapted for a working-professional audience.",
        }}
      />

      {/* ---------- Pre-event ---------- */}
      <Section variant="lilac" tight>
        <div className="grid grid--2" style={{ gap: 40, alignItems: "center" }}>
          <div>
            <p className="eyebrow">{t({ th: "ก่อนวันงาน", en: "Before the day" })}</p>
            <h2>{t({ th: "ปฐมนิเทศออนไลน์ หนึ่งชั่วโมง", en: "Online orientation, one hour" })}</h2>
          </div>
          <div>
            <p>
              {t({
                th: "จัดสองรอบเพื่อให้ทุกคนมีโอกาสเข้าอย่างน้อยหนึ่งครั้ง อธิบายภาพรวมของกิจกรรม สิ่งที่ต้องเตรียม และปูพื้นควอนตัมแบบเบา ๆ ไม่บังคับ แต่คนที่เข้าจะตามทันในวันงานได้ง่ายกว่ามาก",
                en: "Run twice so nobody misses out. It covers the shape of the day, what to prepare, and a gentle introduction to the ideas. Optional — but attendees find the workshop much easier to follow.",
              })}
            </p>
            <div className="btn-row" style={{ marginTop: 20 }}>
              <Link className="btn btn--secondary btn--sm" href="/editions/online">
                {t({ th: "รายละเอียดปฐมนิเทศ", en: "Orientation details" })}
                <Icon name="i-arrow" size={17} />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* ---------- Timeline ---------- */}
      <Section id="agenda">
        <p className="eyebrow">{t({ th: "ตารางเวลา", en: "Schedule" })}</p>
        <h2 style={{ marginBottom: 40 }}>{t({ th: "วันงาน 08:30 – 16:15 น.", en: "The day: 08:30 – 16:15" })}</h2>
        <Timeline slots={agenda} />

        <div style={{ marginTop: 40 }}>
          <Notice icon="i-info">
            <p style={{ margin: 0 }}>
              {t({
                th: "ช่วงที่ยังไม่ระบุชื่อวิทยากรอยู่ระหว่างยืนยัน เราจะอัปเดตหน้านี้ทันทีที่ได้ข้อสรุป ผู้ที่ลงทะเบียนแล้วจะได้รับอีเมลแจ้งด้วย",
                en: "Sessions without a named speaker are still being confirmed. We update this page as soon as they are settled, and registered participants receive an email.",
              })}
            </p>
          </Notice>
        </div>
      </Section>

      {/* ---------- Syllabus ---------- */}
      <Section variant="mist" id="syllabus">
        <p className="eyebrow">{t({ th: "เนื้อหา", en: "Curriculum" })}</p>
        <h2>{t({ th: "สิ่งที่คุณจะได้เรียน", en: "What you will learn" })}</h2>

        <div className="grid grid--2" style={{ marginTop: 40 }}>
          {syllabus.map((block) => (
            <div className="card" key={t(block.title)}>
              <h3>{t(block.title)}</h3>
              <ul style={{ marginTop: 16, marginBottom: 0, color: "var(--slate-500)", fontSize: 16 }}>
                {block.items.map((i, idx) => (
                  <li key={idx}>{t(i)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- Tracks ---------- */}
      <Section id="tracks">
        <p className="eyebrow">{t({ th: "สายเนื้อหา", en: "Tracks" })}</p>
        <h2>{t({ th: "งานนี้อยู่ตรงไหนของเส้นทางการเรียนรู้", en: "Where this event sits on the path" })}</h2>

        <div className="grid grid--3" style={{ marginTop: 40 }}>
          {tracks.map((tr) => (
            <article className="card" key={t(tr.name)}>
              <span
                className="pill"
                style={
                  tr.status === "future"
                    ? { background: "var(--mist-050)", color: "var(--slate-500)" }
                    : undefined
                }
              >
                {t(trackTone[tr.status])}
              </span>
              <h3 style={{ marginTop: 16 }}>{t(tr.name)}</h3>
              <p className="small" style={{ color: "var(--indigo-600)", fontWeight: 500 }}>
                {t(tr.level)}
              </p>
              <p style={{ marginTop: 10 }}>{t(tr.detail)}</p>
            </article>
          ))}
        </div>

        <div className="btn-row" style={{ marginTop: 40 }}>
          <Link className="btn btn--primary" href="/register">
            {t({ th: "ลงทะเบียนเข้าร่วม", en: "Register to attend" })}
            <Icon name="i-arrow" size={18} />
          </Link>
          <Link className="btn btn--secondary" href="/learn">
            {t({ th: "เตรียมตัวก่อนวันงาน", en: "Prepare for the day" })}
          </Link>
        </div>
      </Section>
    </>
  );
}
