"use client";

import { useLang } from "@/lib/i18n";
import { trackRecord } from "@/data/partners";
import { Notice, PageHead, Section } from "@/components/ui";

export default function Qtric() {
  const { t } = useLang();

  return (
    <>
      <PageHead
        eyebrow={{ th: "เกี่ยวกับ QTRiC", en: "About QTRiC" }}
        title={{
          th: "Quantum Technology Research Initiative Consortium",
          en: "Quantum Technology Research Initiative Consortium",
        }}
        lead={{
          th: "เครือข่ายความร่วมมือด้านเทคโนโลยีควอนตัมของประเทศไทย ทำงานเชื่อมภาควิชาการ ภาครัฐ และภาคอุตสาหกรรมเข้าด้วยกัน",
          en: "Thailand's quantum technology consortium, connecting academia, government, and industry.",
        }}
      />

      <Section>
        <div className="grid grid--2" style={{ gap: 56, alignItems: "start" }}>
          <div>
            <p className="eyebrow">{t({ th: "พันธกิจ", en: "Mission" })}</p>
            <h2>{t({ th: "QTRiC ทำอะไร", en: "What QTRiC does" })}</h2>
          </div>
          <div className="prose">
            <p>
              {t({
                th: "QTRiC ทำหน้าที่เป็นศูนย์กลางประสานงานด้านเทคโนโลยีควอนตัมของประเทศไทย เชื่อมโยงนักวิจัยจากมหาวิทยาลัยต่าง ๆ เข้ากับภาครัฐและภาคอุตสาหกรรม เพื่อให้งานวิจัยเดินทางจากห้องแล็บไปสู่การใช้งานจริง",
                en: "QTRiC acts as Thailand's coordinating hub for quantum technology, connecting researchers across universities with government and industry so that work travels from the laboratory into practice.",
              })}
            </p>
            <p>
              {t({
                th: "นอกจากงานวิจัยแล้ว QTRiC ยังผลักดันการสร้างกำลังคนด้านควอนตัม ผ่านการจัดประชุมวิชาการ เวิร์กชอป และกิจกรรมระดับภูมิภาค ร่วมกับเครือข่าย SEA Quantum Network ที่ก่อตั้งขึ้นในปี 2024",
                en: "Alongside research, QTRiC works on building quantum talent through conferences, workshops, and regional programmes, together with the SEA Quantum Network founded in 2024.",
              })}
            </p>
            <p>
              {t({
                th: "Qiskit Fall Fest 2026 เป็นก้าวถัดไปของงานด้านการสร้างกำลังคน โดยขยับจุดโฟกัสจากนักวิจัยระดับสูง มาสู่การสร้างฐานความรู้ควอนตัมให้กับคนทั่วไปในประเทศ",
                en: "Qiskit Fall Fest 2026 is the next step in that talent work, shifting focus from advanced researchers towards building a base of quantum literacy across the country.",
              })}
            </p>
          </div>
        </div>

        <div style={{ marginTop: 40 }}>
          <Notice icon="i-info">
            <p style={{ margin: 0 }}>
              {t({
                th: "ข้อความในหน้านี้เป็นฉบับร่าง รอข้อความทางการจาก QTRiC เพื่อนำมาแทนที่ แก้ไขได้ที่ไฟล์ app/qtric/page.tsx",
                en: "The text on this page is a draft, awaiting official copy from QTRiC. Edit it in app/qtric/page.tsx.",
              })}
            </p>
          </Notice>
        </div>
      </Section>

      <Section variant="mist">
        <p className="eyebrow">{t({ th: "ผลงานที่ผ่านมา", en: "Track record" })}</p>
        <h2>{t({ th: "กิจกรรมที่ QTRiC ขับเคลื่อนมา", en: "Initiatives QTRiC has led" })}</h2>

        <div className="table-wrap" style={{ marginTop: 32 }}>
          <table className="t">
            <tbody>
              {trackRecord.map((r) => (
                <tr key={r.year + t(r.name)}>
                  <td className="mono muted" style={{ width: 90 }}>
                    {r.year}
                  </td>
                  <td>
                    {r.url ? (
                      <a href={r.url} target="_blank" rel="noreferrer noopener">
                        {t(r.name)}
                      </a>
                    ) : (
                      t(r.name)
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="btn-row" style={{ marginTop: 32 }}>
          <a
            className="btn btn--secondary"
            href="https://qtric.sut.ac.th/"
            target="_blank"
            rel="noreferrer noopener"
          >
            {t({ th: "ไปเว็บไซต์หลักของ QTRiC", en: "Visit the main QTRiC site" })}
          </a>
        </div>
      </Section>
    </>
  );
}
