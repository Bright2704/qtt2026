"use client";

import { useLang } from "@/lib/i18n";
import { editions } from "@/data/editions";
import EditionCard from "@/components/EditionCard";
import { Notice, PageHead, Section } from "@/components/ui";

export default function Editions() {
  const { t } = useLang();
  const compare = editions.filter((e) => e.status !== "planned");

  return (
    <>
      <PageHead
        eyebrow={{ th: "งานทั้งหมด", en: "All editions" }}
        title={{
          th: "งานทั้งหมดของ Qiskit Fall Fest 2026 ในประเทศไทย",
          en: "Every Thailand edition of Qiskit Fall Fest 2026",
        }}
        lead={{
          th: "เราจัดหลายงานในหลายเมือง เพื่อให้คนจากภูมิภาคต่าง ๆ เข้าถึงได้โดยไม่ต้องเดินทางไกล ทุกงานใช้หลักสูตรแกนกลางเดียวกัน แต่เซสชันช่วงบ่ายจะปรับให้เข้ากับกลุ่มผู้เข้าร่วมของแต่ละเมือง",
          en: "We are running several editions in several cities so people across the country can attend without long journeys. Every edition shares the same core curriculum; afternoon sessions are tuned to each city's audience.",
        }}
      />

      <Section>
        <div className="grid grid--4">
          {editions.map((e) => (
            <EditionCard key={e.id} e={e} />
          ))}
        </div>
      </Section>

      <Section variant="mist">
        <p className="eyebrow">{t({ th: "เปรียบเทียบ", en: "Compare" })}</p>
        <h2>{t({ th: "งานไหนเหมาะกับคุณ", en: "Which edition suits you" })}</h2>

        <div className="table-wrap" style={{ marginTop: 32 }}>
          <table className="t">
            <thead>
              <tr>
                <th />
                {compare.map((e) => (
                  <th key={e.id}>{t(e.name)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{t({ th: "เมือง", en: "City" })}</th>
                {compare.map((e) => (
                  <td key={e.id}>{t(e.city)}</td>
                ))}
              </tr>
              <tr>
                <th>{t({ th: "วันที่", en: "Date" })}</th>
                {compare.map((e) => (
                  <td key={e.id} className={e.dateConfirmed ? "" : "muted"}>
                    {t(e.dateLabel)}
                  </td>
                ))}
              </tr>
              <tr>
                <th>{t({ th: "ที่นั่ง", en: "Seats" })}</th>
                {compare.map((e) => (
                  <td key={e.id}>
                    {e.capacity ?? t({ th: "ไม่จำกัด", en: "Unlimited" })}
                  </td>
                ))}
              </tr>
              <tr>
                <th>{t({ th: "เวลา", en: "Hours" })}</th>
                {compare.map((e) => (
                  <td key={e.id} className="mono muted">
                    {e.start === "—" ? t({ th: "1 ชั่วโมง", en: "1 hour" }) : `${e.start} – ${e.end}`}
                  </td>
                ))}
              </tr>
              <tr>
                <th>{t({ th: "เหมาะกับ", en: "Best for" })}</th>
                {compare.map((e) => (
                  <td key={e.id} className="muted">
                    {t(e.audience)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: 32 }}>
          <Notice>
            <p>
              {t({
                th: "ยังตัดสินใจไม่ได้ว่าจะไปงานไหน เลือกเป็น ยังไม่แน่ใจ ในฟอร์มลงทะเบียนได้ แล้วเราจะติดต่อกลับไปช่วยจับคู่ให้เอง",
                en: "Not sure which to choose? Select “undecided” on the registration form and we will follow up to help you pick.",
              })}
            </p>
          </Notice>
        </div>
      </Section>
    </>
  );
}
