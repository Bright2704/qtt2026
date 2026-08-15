"use client";

import { useLang } from "@/lib/i18n";
import { posts, pressKit } from "@/data/news";
import Icon from "@/components/Icon";
import { Notice, PageHead, Section } from "@/components/ui";

export default function News() {
  const { t } = useLang();

  return (
    <>
      <PageHead
        eyebrow={{ th: "ข่าวสารและสื่อ", en: "News and media" }}
        title={{ th: "ข่าวสารและสื่อ", en: "News and media" }}
        lead={{
          th: "ความคืบหน้าของงาน ประกาศต่าง ๆ และสื่อสำหรับผู้สื่อข่าว",
          en: "Updates, announcements, and materials for the press.",
        }}
      />

      <Section>
        <div className="stack" style={{ maxWidth: 880 }}>
          {posts.map((p) => (
            <article className="card card--hover" key={p.slug}>
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "center",
                  flexWrap: "wrap",
                  marginBottom: 14,
                }}
              >
                <span className="pill" style={{ fontSize: 13, padding: "5px 12px" }}>
                  {t(p.category)}
                </span>
                <span className="small muted mono">{t(p.dateLabel)}</span>
                {p.draft && (
                  <span className="tbc-chip" style={{ marginLeft: 0 }}>
                    {t({ th: "ฉบับร่าง", en: "Draft" })}
                  </span>
                )}
              </div>

              <h2 style={{ fontSize: "clamp(21px, 2.2vw, 28px)" }}>{t(p.title)}</h2>
              <p style={{ marginTop: 12, fontSize: 17 }}>{t(p.excerpt)}</p>

              <details style={{ marginTop: 18 }}>
                <summary
                  style={{
                    cursor: "pointer",
                    fontWeight: 600,
                    color: "var(--indigo-600)",
                    fontSize: 15.5,
                  }}
                >
                  {t({ th: "อ่านฉบับเต็ม", en: "Read the full piece" })}
                </summary>
                <div style={{ marginTop: 16 }} className="prose">
                  {p.body.map((para, i) => (
                    <p key={i}>{t(para)}</p>
                  ))}
                </div>
              </details>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 40, maxWidth: 880 }}>
          <Notice icon="i-info">
            <p style={{ margin: 0 }}>
              {t({
                th: "บทความเหล่านี้เป็นฉบับร่างที่เขียนเตรียมไว้ พร้อมเผยแพร่เมื่อยืนยันวันที่และรายละเอียดครบแล้ว แก้ไขได้ที่ไฟล์ data/news.ts",
                en: "These are prepared drafts, ready to publish once dates and details are confirmed. Edit them in data/news.ts.",
              })}
            </p>
          </Notice>
        </div>
      </Section>

      {/* ---------- Press kit ---------- */}
      <Section variant="mist" id="press-kit">
        <p className="eyebrow">{t({ th: "สำหรับสื่อมวลชน", en: "For the press" })}</p>
        <h2>{t({ th: "สื่อและกราฟิกที่ดาวน์โหลดได้", en: "Downloadable materials" })}</h2>
        <p className="lead prose" style={{ marginTop: 14 }}>
          {t({
            th: "กราฟิกทั้งหมดนี้ออกแบบขึ้นใหม่สำหรับงานนี้โดยเฉพาะ ใช้ประกอบข่าวได้เลย สำหรับโลโก้ IBM Quantum และ Qiskit กรุณาติดต่อเราก่อน เพราะมีข้อกำหนดการใช้แบรนด์เฉพาะ",
            en: "These graphics were designed for this event and are free to use in coverage. For the IBM Quantum and Qiskit marks, please contact us first — their use is governed by specific brand rules.",
          })}
        </p>

        <div className="grid grid--2" style={{ marginTop: 32 }}>
          {pressKit.map((k) => (
            <a
              className="card card--hover"
              key={k.file}
              href={k.file}
              download
              style={{ textDecoration: "none", display: "flex", gap: 20, alignItems: "center" }}
            >
              <img
                src={k.file}
                alt=""
                style={{
                  width: 84,
                  height: 84,
                  objectFit: "contain",
                  background: "var(--indigo-050)",
                  borderRadius: 12,
                  padding: 8,
                  flex: "none",
                }}
              />
              <span style={{ flex: 1 }}>
                <strong style={{ display: "block", fontSize: 17 }}>{t(k.name)}</strong>
                <span className="small muted">{t(k.detail)}</span>
              </span>
              <Icon name="i-arrow" size={20} />
            </a>
          ))}
        </div>

        <h3 style={{ marginTop: 56 }}>{t({ th: "ข้อความมาตรฐานท้ายข่าว", en: "Standard boilerplate" })}</h3>
        <div
          className="card card--flat"
          style={{ marginTop: 16, maxWidth: "80ch", fontStyle: "italic" }}
        >
          <p style={{ margin: 0 }}>
            {t({
              th: "Qiskit Fall Fest 2026: ประเทศไทย เป็นส่วนหนึ่งของ Qiskit Fall Fest ซึ่งเป็นชุดกิจกรรมควอนตัมคอมพิวติงระดับโลกที่ขับเคลื่อนโดยชุมชนภายใต้การสนับสนุนของ IBM Quantum งานในประเทศไทยมีมหาวิทยาลัยเทคโนโลยีสุรนารีเป็นสถาบันเจ้าภาพ และจัดโดย QTRiC",
              en: "Qiskit Fall Fest 2026: Thailand is part of Qiskit Fall Fest, IBM Quantum's global series of community-led quantum computing events. The Thailand edition is hosted by Suranaree University of Technology and organised by QTRiC, the Quantum Technology Research Initiative Consortium (Thailand).",
            })}
          </p>
        </div>
      </Section>
    </>
  );
}
