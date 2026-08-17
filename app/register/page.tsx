"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { editions, statusLabel } from "@/data/editions";
import { site } from "@/data/site";
import Icon from "@/components/Icon";
import { CapacityMeter, Notice, PageHead, Section } from "@/components/ui";
import RegisterForm from "@/components/RegisterForm";

const steps = [
  {
    title: { th: "เลือกงาน", en: "Pick an edition" },
    body: { th: "มทส. · กรุงเทพฯ · ออนไลน์", en: "SUT · Bangkok · Online" },
  },
  {
    title: { th: "กรอกฟอร์ม", en: "Fill the form" },
    body: { th: "ประมาณ 3 นาที", en: "About three minutes" },
  },
  {
    title: { th: "สมัคร qBraid", en: "Create a qBraid account" },
    body: { th: "ฟรี ใช้อีเมลเดียวกัน", en: "Free, using the same email" },
  },
  {
    title: { th: "ทำการบ้านก่อนงาน", en: "Do the pre-work" },
    body: { th: "ประมาณ 30 นาที ก่อนวันงาน", en: "About 30 minutes, any time before" },
  },
];

const eligibility = {
  yes: [
    {
      th: "เปิดรับทุกคน ทั้งนักเรียน นักศึกษา อาจารย์ คนทำงาน และผู้สนใจทั่วไป",
      en: "Open to everyone — students, faculty, professionals, and the generally curious",
    },
    { th: "ไม่ต้องมีพื้นฐานควอนตัมมาก่อน", en: "No prior quantum background required" },
    { th: "ไม่มีค่าลงทะเบียน", en: "No registration fee" },
  ],
  warn: [
    {
      th: "ต้องนำโน้ตบุ๊กของตัวเองมา ทุกคน ไม่มีข้อยกเว้น",
      en: "You must bring your own laptop — everyone, without exception",
    },
    {
      th: "ที่นั่งจำกัด จัดสรรตามลำดับการลงทะเบียนและความหลากหลายของผู้เข้าร่วม",
      en: "Seats are limited; places are allocated by registration order and participant mix",
    },
    {
      th: "ค่าเดินทาง ที่พัก และอาหารนอกเหนือจากที่จัดให้ ผู้เข้าร่วมรับผิดชอบเอง",
      en: "Travel, accommodation, and meals beyond those provided are at your own expense",
    },
  ],
};

const formFields: { field: { th: string; en: string }; note: { th: string; en: string } }[] = [
  {
    field: { th: "ชื่อ–นามสกุล", en: "Full name" },
    note: { th: "ใช้ออกใบรับรอง", en: "Used on your certificate" },
  },
  {
    field: { th: "อีเมล", en: "Email" },
    note: {
      th: "ต้องเป็นอีเมลเดียวกับที่ใช้สมัคร qBraid",
      en: "Must match the email on your qBraid account",
    },
  },
  {
    field: { th: "เลือกงานที่จะเข้าร่วม", en: "Which edition" },
    note: { th: "มทส. · กรุงเทพฯ · ออนไลน์ · ยังไม่แน่ใจ", en: "SUT · Bangkok · Online · Undecided" },
  },
  {
    field: { th: "สถานะปัจจุบัน", en: "Your current status" },
    note: {
      th: "นักเรียน ม.ปลาย · นักศึกษา · อาจารย์ · คนทำงาน · อื่น ๆ",
      en: "High school · University · Faculty · Professional · Other",
    },
  },
  {
    field: { th: "สถาบันหรือองค์กร", en: "Institution or organisation" },
    note: { th: "", en: "" },
  },
  {
    field: { th: "ประสบการณ์เขียนโปรแกรมและควอนตัม", en: "Programming and quantum experience" },
    note: {
      th: "ให้คะแนน 1 ถึง 5 เราใช้จัดกลุ่มและวางตัว TA",
      en: "Rated 1 to 5 — we use this to group participants and place TAs",
    },
  },
  {
    field: { th: "นำโน้ตบุ๊กมาเองได้หรือไม่", en: "Can you bring a laptop?" },
    note: { th: "จำเป็นสำหรับงานที่มาที่สถานที่จริง", en: "Required for on-site editions" },
  },
  {
    field: { th: "ข้อจำกัดด้านอาหารหรือการเข้าถึง", en: "Dietary or accessibility needs" },
    note: { th: "บอกเราได้เลย เราจะจัดให้", en: "Tell us and we will arrange it" },
  },
  {
    field: { th: "ยอมรับข้อปฏิบัติในงานและการเก็บข้อมูล", en: "Code of Conduct and data consent" },
    note: { th: "ตามข้อกำหนด PDPA", en: "As required under Thailand's PDPA" },
  },
];

export default function Register() {
  const { t } = useLang();
  const open = editions.filter((e) => e.status === "open");
  const hasForm = Boolean(site.contact.registerForm);

  return (
    <>
      <PageHead
        eyebrow={{ th: "ลงทะเบียน", en: "Register" }}
        title={{ th: "ลงทะเบียนเข้าร่วม", en: "Register to attend" }}
        lead={{
          th: "ใช้เวลาประมาณสามนาที ไม่มีค่าใช้จ่าย และคุณจะได้อีเมลยืนยันพร้อมขั้นตอนถัดไปทันที",
          en: "About three minutes. No fee. You receive a confirmation email with your next steps straight away.",
        }}
      />

      {/* ---------- Steps ---------- */}
      <Section tight>
        <p className="eyebrow">{t({ th: "สี่ขั้นตอน", en: "Four steps" })}</p>
        <h2 style={{ marginBottom: 32 }}>
          {t({ th: "จากสนใจ ถึงพร้อมเข้างาน", en: "From interested to ready" })}
        </h2>
        <ol className="steps">
          {steps.map((s) => (
            <li key={t(s.title)}>
              <h3>{t(s.title)}</h3>
              <p>{t(s.body)}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* ---------- Choose edition ---------- */}
      <Section variant="mist" id="choose">
        <p className="eyebrow">{t({ th: "ขั้นที่หนึ่ง", en: "Step one" })}</p>
        <h2>{t({ th: "เลือกงานที่จะเข้าร่วม", en: "Choose your edition" })}</h2>

        <div className="grid grid--2" style={{ marginTop: 32 }}>
          {open.map((e) => (
            <div className="card" key={e.id}>
              <span className={`status status--${e.status}`}>{t(statusLabel[e.status])}</span>
              <h3 style={{ marginTop: 10 }}>{t(e.name)}</h3>
              <p className="small muted" style={{ marginTop: 4 }}>
                {t(e.city)} · {t(e.dateLabel)}
              </p>
              <div style={{ marginTop: 18 }}>
                <CapacityMeter registered={e.registered} capacity={e.capacity} />
              </div>
              <p style={{ marginTop: 16, fontSize: 15 }}>{t(e.audience)}</p>
              <Link className="btn btn--secondary btn--sm" href={`/editions/${e.slug}`} style={{ marginTop: 16 }}>
                {t({ th: "ดูรายละเอียดงานนี้", en: "About this edition" })}
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- Eligibility ---------- */}
      <Section id="eligibility">
        <p className="eyebrow">{t({ th: "เงื่อนไข", en: "Before you register" })}</p>
        <h2>{t({ th: "สิ่งที่ควรรู้ก่อนกรอกฟอร์ม", en: "What to know first" })}</h2>

        <div className="grid grid--2" style={{ marginTop: 32 }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }} className="stack-sm">
            {eligibility.yes.map((y, i) => (
              <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: "var(--success)", flex: "none", marginTop: 3 }}>
                  <Icon name="i-check" size={20} strokeWidth={2.2} />
                </span>
                <span>{t(y)}</span>
              </li>
            ))}
          </ul>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }} className="stack-sm">
            {eligibility.warn.map((w, i) => (
              <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: "var(--warning)", flex: "none", marginTop: 3 }}>
                  <Icon name="i-alert" size={20} />
                </span>
                <span>{t(w)}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ---------- Form ---------- */}
      <Section variant="lilac" id="form">
        <p className="eyebrow">{t({ th: "ขั้นที่สอง", en: "Step two" })}</p>
        <h2>{t({ th: "กรอกฟอร์มลงทะเบียน", en: "Complete the registration form" })}</h2>

        {hasForm ? (
          <iframe
            className="embed-frame"
            style={{ marginTop: 32 }}
            src={site.contact.registerForm}
            title={t({ th: "ฟอร์มลงทะเบียน", en: "Registration form" })}
            loading="lazy"
          />
        ) : (
          <div style={{ marginTop: 36 }}>
            <RegisterForm />
          </div>
        )}
      </Section>

      {/* ---------- After ---------- */}
      <Section>
        <div className="grid grid--2" style={{ gap: 48, alignItems: "start" }}>
          <div>
            <p className="eyebrow">{t({ th: "หลังลงทะเบียน", en: "After you register" })}</p>
            <h2>{t({ th: "สิ่งที่จะเกิดขึ้นต่อไป", en: "What happens next" })}</h2>
            <p style={{ marginTop: 20 }}>
              {t({
                th: "คุณจะได้อีเมลยืนยันทันที พร้อมลิงก์สมัคร qBraid การบ้านสามข้อ และลิงก์เข้า Discord ของงาน ใช้เวลาทำทั้งหมดไม่เกิน 30 นาที",
                en: "You receive a confirmation email immediately with your qBraid signup link, three pre-work exercises, and the event Discord invite. All of it takes under 30 minutes.",
              })}
            </p>
            <div className="btn-row" style={{ marginTop: 24 }}>
              <Link className="btn btn--primary" href="/learn">
                {t({ th: "ดูคู่มือเตรียมตัว", en: "Open the preparation guide" })}
                <Icon name="i-arrow" size={18} />
              </Link>
            </div>
          </div>

          <div className="stack">
            <Notice tone="pink" icon="i-users">
              <p style={{ margin: 0 }}>
                <strong>{t({ th: "ที่นั่งเต็มแล้วใช่ไหม ", en: "Edition full? " })}</strong>
                {t({
                  th: "ลงชื่อในรายชื่อสำรองได้ ทุกปีมีคนสละสิทธิ์เสมอ และเราติดต่อกลับตามลำดับ",
                  en: "Join the waitlist. Places open up every year, and we contact people in order.",
                })}
              </p>
            </Notice>

            <Notice icon="i-info">
              <p style={{ margin: 0 }}>
                <strong>{t({ th: "มาเป็นกลุ่ม ", en: "Coming as a group? " })}</strong>
                {t({
                  th: "โรงเรียนหรือมหาวิทยาลัยที่อยากพานักเรียนมาเป็นหมู่คณะ กรุณาติดต่อทีมงานล่วงหน้าเพื่อจัดสรรที่นั่ง",
                  en: "Schools and universities bringing several students should contact us in advance so we can plan seating.",
                })}
              </p>
            </Notice>

            <Notice tone="warn" icon="i-alert">
              <p style={{ margin: 0 }}>
                <strong>{t({ th: "มาไม่ได้แล้ว ", en: "Cannot make it? " })}</strong>
                {t({
                  th: "แจ้งเราให้เร็วที่สุด จะได้ปล่อยที่นั่งให้คนในรายชื่อสำรอง ทุกที่นั่งมีค่าจริง ๆ",
                  en: "Tell us as soon as you can so we can release your seat. Every seat genuinely counts.",
                })}
              </p>
            </Notice>
          </div>
        </div>
      </Section>
    </>
  );
}
