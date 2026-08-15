"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { site } from "@/data/site";
import Icon from "@/components/Icon";
import { Notice, PageHead, Section } from "@/components/ui";

const reasons = [
  {
    icon: "i-users",
    title: { th: "อยากมาเป็นกลุ่ม", en: "Bringing a group" },
    body: {
      th: "โรงเรียนหรือมหาวิทยาลัยที่อยากพานักเรียนมาหลายคน ติดต่อล่วงหน้าเพื่อจัดสรรที่นั่ง",
      en: "Schools and universities bringing several students — contact us so we can plan seating.",
    },
  },
  {
    icon: "i-chat",
    title: { th: "อยากเป็น TA หรือวิทยากร", en: "Volunteering or speaking" },
    body: {
      th: "เปิดรับ TA ห้าคนขึ้นไป และเปิดรับข้อเสนอหัวข้อบรรยายจนถึงกลางเดือนกันยายน",
      en: "We are recruiting five or more TAs, and accept talk proposals until mid-September.",
    },
  },
  {
    icon: "i-network",
    title: { th: "อยากร่วมสนับสนุน", en: "Supporting the event" },
    body: {
      th: "สถานที่ อาหาร ทุนเดินทาง หรือส่งคนมาเป็นวิทยากร เราเปิดกว้างทุกรูปแบบ",
      en: "A venue, meals, travel bursaries, or a speaker from your team — all welcome.",
    },
  },
  {
    icon: "i-pin",
    title: { th: "อยากให้ไปจัดที่จังหวัดของคุณ", en: "Hosting in your province" },
    body: {
      th: "เรากำลังพิจารณาเชียงใหม่และสงขลา ถ้าที่ของคุณสนใจ บอกเรามาได้เลย",
      en: "We are exploring Chiang Mai and Songkhla. If your institution is interested, tell us.",
    },
  },
];

export default function Contact() {
  const { t } = useLang();
  const email = site.contact.email;

  return (
    <>
      <PageHead
        eyebrow={{ th: "ติดต่อเรา", en: "Contact" }}
        title={{ th: "คุยกับทีมงาน", en: "Talk to the team" }}
        lead={{
          th: "เราอ่านและตอบทุกข้อความ ปกติภายในสองถึงสามวันทำการ",
          en: "We read and answer every message, usually within two to three working days.",
        }}
      />

      <Section>
        <div className="grid grid--2" style={{ gap: 56, alignItems: "start" }}>
          <div className="stack">
            <div>
              <p className="eyebrow">{t({ th: "ช่องทาง", en: "Get in touch" })}</p>
              <h2>{t({ th: "ติดต่อได้ที่นี่", en: "How to reach us" })}</h2>
            </div>

            <div className="card">
              <span className="card__icon">
                <Icon name="i-mail" size={22} />
              </span>
              <h3>{t({ th: "อีเมล", en: "Email" })}</h3>
              <p style={{ marginTop: 8 }}>
                <a href={`mailto:${email}`} className="mono" style={{ fontSize: 16 }}>
                  {email}
                </a>
              </p>
              {!site.contact.emailConfirmed && (
                <p className="small muted" style={{ marginTop: 10 }}>
                  {t({
                    th: "ที่อยู่นี้เป็นค่าตั้งต้น รอทีมยืนยันอีเมลทางการ แก้ได้ที่ data/site.ts",
                    en: "This address is a placeholder pending the team's official one. Change it in data/site.ts.",
                  })}
                </p>
              )}
            </div>

            <div className="card">
              <span className="card__icon">
                <Icon name="i-chat" size={22} />
              </span>
              <h3>{t({ th: "Discord ของงาน", en: "Event Discord" })}</h3>
              <p style={{ marginTop: 8 }}>
                {site.contact.discord ? (
                  <a href={site.contact.discord} target="_blank" rel="noreferrer noopener">
                    {t({ th: "เข้าร่วมเซิร์ฟเวอร์", en: "Join the server" })}
                  </a>
                ) : (
                  <span className="muted">
                    {t({
                      th: "ลิงก์เชิญจะประกาศเร็ว ๆ นี้ ผู้ที่ลงทะเบียนแล้วจะได้รับทางอีเมล",
                      en: "The invite link is coming soon; registered participants receive it by email.",
                    })}
                  </span>
                )}
              </p>
            </div>

            <div className="card">
              <span className="card__icon">
                <Icon name="i-pin" size={22} />
              </span>
              <h3>{t({ th: "ที่อยู่", en: "Address" })}</h3>
              <p style={{ marginTop: 8 }}>
                {t({
                  th: "QTRiC มหาวิทยาลัยเทคโนโลยีสุรนารี 111 ถ.มหาวิทยาลัย ต.สุรนารี อ.เมือง จ.นครราชสีมา 30000",
                  en: "QTRiC, Suranaree University of Technology, 111 University Avenue, Suranaree, Mueang, Nakhon Ratchasima 30000, Thailand",
                })}
              </p>
            </div>
          </div>

          <div className="stack">
            <div>
              <p className="eyebrow">{t({ th: "เรื่องที่ติดต่อได้", en: "What people write to us about" })}</p>
              <h2>{t({ th: "ไม่ต้องเกรงใจ", en: "Do not hesitate" })}</h2>
            </div>

            {reasons.map((r) => (
              <div
                key={r.icon}
                style={{
                  display: "flex",
                  gap: 18,
                  alignItems: "flex-start",
                  padding: "18px 0",
                  borderBottom: "1px solid rgba(43,20,90,.08)",
                }}
              >
                <span style={{ color: "var(--indigo-600)", flex: "none", marginTop: 3 }}>
                  <Icon name={r.icon} size={22} />
                </span>
                <div>
                  <strong style={{ display: "block", fontSize: 17 }}>{t(r.title)}</strong>
                  <span className="small muted">{t(r.body)}</span>
                </div>
              </div>
            ))}

            <Notice icon="i-info">
              <p style={{ margin: 0 }}>
                {t({
                  th: "ถ้าเป็นคำถามทั่วไปเรื่องการเข้าร่วมงาน ลองดูหน้าคำถามที่พบบ่อยก่อน อาจมีคำตอบอยู่แล้ว",
                  en: "For general questions about attending, the FAQ may already have your answer.",
                })}
              </p>
            </Notice>

            <div className="btn-row">
              <Link className="btn btn--secondary" href="/faq">
                {t({ th: "ไปหน้าคำถามที่พบบ่อย", en: "Go to the FAQ" })}
                <Icon name="i-arrow" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
