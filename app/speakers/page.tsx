"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { speakers } from "@/data/people";
import Icon from "@/components/Icon";
import PersonCard from "@/components/PersonCard";
import { Notice, PageHead, Section } from "@/components/ui";

export default function Speakers() {
  const { t } = useLang();
  const confirmed = speakers.filter((s) => s.confirmed).length;

  return (
    <>
      <PageHead
        eyebrow={{ th: "วิทยากรและพี่เลี้ยง", en: "Speakers and mentors" }}
        title={{ th: "ใครจะมาสอนคุณ", en: "Who will be teaching" }}
        lead={{
          th: "เรากำลังทยอยยืนยันรายชื่อและจะอัปเดตหน้านี้ทันทีที่ได้ข้อสรุป ผู้ที่ลงทะเบียนแล้วจะได้รับอีเมลแจ้งทุกครั้งที่มีการประกาศเพิ่ม",
          en: "We are confirming names in stages and update this page as soon as each is settled. Registered participants get an email with every announcement.",
        }}
      />

      <Section>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div>
            <p className="eyebrow">{t({ th: "รายชื่อ", en: "The lineup" })}</p>
            <h2>{t({ th: "วิทยากร", en: "Speakers" })}</h2>
          </div>
          <p className="small muted mono">
            {t({ th: "ยืนยันแล้ว ", en: "Confirmed " })}
            {confirmed}/{speakers.length}
          </p>
        </div>

        <div className="grid grid--4">
          {speakers.map((s, i) => (
            <PersonCard key={i} p={s} />
          ))}
        </div>
      </Section>

      {/* ---------- Become a TA ---------- */}
      <Section variant="dark">
        <div className="grid grid--2" style={{ gap: 48, alignItems: "center" }}>
          <div>
            <p className="eyebrow">{t({ th: "เปิดรับสมัคร", en: "Now recruiting" })}</p>
            <h2>{t({ th: "มาเป็น TA ช่วยงานกับเรา", en: "Become a teaching assistant" })}</h2>
            <p className="lead" style={{ marginTop: 20 }}>
              {t({
                th: "เราเปิดรับ TA ห้าคนขึ้นไป ถ้าคุณเคยเขียน Python และอยากช่วยเพื่อน ๆ ในเซสชันลงมือทำ เราอยากได้คุณ ไม่จำเป็นต้องเก่งควอนตัมมาก่อน เพราะมีเซสชันเตรียมความพร้อมให้ก่อนวันงาน",
                en: "We are recruiting five or more. If you have written Python and want to help others through the hands-on work, we want you. You need not already know quantum — there is a preparation session beforehand.",
              })}
            </p>
            <div className="btn-row" style={{ marginTop: 28 }}>
              <Link className="btn btn--onDark" href="/contact">
                {t({ th: "สมัครเป็น TA", en: "Apply to be a TA" })}
                <Icon name="i-arrow" size={18} />
              </Link>
            </div>
          </div>

          <div className="card card--dark">
            <h3>{t({ th: "สิ่งที่ TA จะได้รับ", en: "What TAs get" })}</h3>
            <ul style={{ marginTop: 16, marginBottom: 0 }}>
              <li>{t({ th: "ใบรับรองการเป็นทีมงาน", en: "A certificate for your contribution" })}</li>
              <li>
                {t({
                  th: "เซสชันเตรียมความพร้อมกับทีมวิทยากรก่อนวันงาน",
                  en: "A preparation session with the instructor team",
                })}
              </li>
              <li>
                {t({
                  th: "ประสบการณ์สอนที่ใส่ใน CV ได้จริง",
                  en: "Teaching experience that genuinely belongs on a CV",
                })}
              </li>
              <li>
                {t({
                  th: "เข้าถึงเครือข่ายควอนตัมของ QTRiC และงาน Deep Dive ที่จะจัดต่อ",
                  en: "Access to QTRiC's quantum network and our follow-on deep-dive events",
                })}
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section tight>
        <Notice icon="i-info">
          <p style={{ margin: 0 }}>
            {t({
              th: "หากคุณเป็นผู้เชี่ยวชาญด้านควอนตัมและสนใจมาบรรยาย หรืออยากเสนอหัวข้อ ติดต่อเรามาได้เลย เราเปิดรับข้อเสนอจนถึงช่วงกลางเดือนกันยายน",
              en: "If you work in quantum and would like to speak, or want to propose a topic, get in touch. We are open to proposals until mid-September.",
            })}
          </p>
        </Notice>
      </Section>
    </>
  );
}
