"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { checklist, glossary, prework } from "@/data/learn";
import { site } from "@/data/site";
import Icon from "@/components/Icon";
import { Notice, PageHead, Section } from "@/components/ui";

export default function Learn() {
  const { t } = useLang();

  return (
    <>
      <PageHead
        eyebrow={{ th: "เตรียมตัว", en: "Prepare" }}
        title={{ th: "เตรียมตัวก่อนวันงาน", en: "Prepare for the day" }}
        lead={{
          th: "ใช้เวลารวมประมาณ 30 ถึง 45 นาที ทำล่วงหน้าได้ทุกเมื่อ ทำครบแล้ววันงานคุณจะได้ลงมือเขียนโค้ดตั้งแต่นาทีแรก แทนที่จะนั่งรอสมัครบัญชี",
          en: "Around 30 to 45 minutes, whenever suits you. Finish these and you will be writing code from the first minute of the workshop instead of waiting on account setup.",
        }}
      />

      {/* ---------- Why it matters ---------- */}
      <Section tight variant="lilac">
        <div className="prose">
          <p className="lead" style={{ margin: 0, color: "var(--indigo-800)" }}>
            {t({
              th: "ข้อผิดพลาดที่พบบ่อยที่สุดในเวิร์กชอปแบบลงมือทำ คือใช้ชั่วโมงแรกไปกับการตั้งค่าเครื่อง ไม่ใช่การเรียนรู้ เราจึงย้ายงานส่วนนั้นมาไว้ก่อนวันงานทั้งหมด",
              en: "The commonest failure in hands-on workshops is spending the first hour on setup rather than learning. So we have moved all of that work to before the day.",
            })}
          </p>
        </div>
      </Section>

      {/* ---------- Checklist ---------- */}
      <Section id="checklist">
        <p className="eyebrow">{t({ th: "เช็กลิสต์", en: "Checklist" })}</p>
        <h2 style={{ marginBottom: 32 }}>{t({ th: "หกอย่างที่ต้องทำ", en: "Six things to do" })}</h2>

        <ul className="checklist">
          {checklist.map((c, i) => (
            <li key={i}>
              <span className="checklist__box" aria-hidden="true" />
              <span className="checklist__txt">
                <strong>{t(c.title)}</strong>
                <span>{t(c.detail)}</span>
              </span>
              <span className="checklist__time">{c.time}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* ---------- qBraid ---------- */}
      <Section variant="dark" id="qbraid">
        <div className="grid grid--2" style={{ gap: 48, alignItems: "start" }}>
          <div>
            <p className="eyebrow">{t({ th: "แพลตฟอร์ม", en: "Platform" })}</p>
            <h2>{t({ th: "ทำไมเราถึงใช้ qBraid", en: "Why we use qBraid" })}</h2>
          </div>
          <div>
            <p className="lead">
              {t({
                th: "qBraid คือแพลตฟอร์มที่รัน Qiskit ให้เราบนคลาวด์ เปิดผ่านเบราว์เซอร์ได้เลย ไม่ต้องลง Python ไม่ต้องลงไลบรารี ไม่ต้องแก้ปัญหาว่าทำไมเครื่องเพื่อนรันได้แต่เครื่องเราไม่ได้ ทุกคนจึงเริ่มจากสภาพแวดล้อมเดียวกันเป๊ะ ๆ",
                en: "qBraid runs Qiskit for you in the cloud — open a browser and go. No Python install, no dependency wrangling, no wondering why it works on your friend's laptop but not yours. Everyone starts from an identical environment.",
              })}
            </p>
            <div className="btn-row" style={{ marginTop: 28 }}>
              <a
                className="btn btn--onDark"
                href={site.qbraid.url}
                target="_blank"
                rel="noreferrer noopener"
              >
                {t({ th: "ไปสมัคร qBraid", en: "Create a qBraid account" })}
                <Icon name="i-arrow" size={18} />
              </a>
            </div>
            <p className="small" style={{ marginTop: 20, opacity: 0.75 }}>
              {t({
                th: "ใช้อีเมลเดียวกับที่ใช้ลงทะเบียนงาน เพื่อให้เราจับคู่บัญชีกับรายชื่อผู้เข้าร่วมได้",
                en: "Use the same email you registered with, so we can match your account to your registration.",
              })}
            </p>
          </div>
        </div>
      </Section>

      {/* ---------- Pre-work ---------- */}
      <Section id="prework">
        <p className="eyebrow">{t({ th: "การบ้าน", en: "Pre-work" })}</p>
        <h2>{t({ th: "สามข้อ ทำบน qBraid ได้เลย", en: "Three exercises, all on qBraid" })}</h2>
        <p className="lead prose" style={{ marginTop: 14 }}>
          {t({
            th: "ทำได้เท่าที่ทำไหว ไม่ต้องทำครบก็มาได้ แต่ยิ่งลองมาก่อน คำถามที่คุณเอามาถามในวันงานจะยิ่งคมขึ้น",
            en: "Do as much as you can. You need not finish them all — but the more you try beforehand, the sharper the questions you bring on the day.",
          })}
        </p>

        <div className="grid grid--3" style={{ marginTop: 40 }}>
          {prework.map((p, i) => (
            <article className="card" key={i}>
              <span className="card__icon">
                <Icon name="i-code" size={22} />
              </span>
              <h3>
                {i + 1}. {t(p.title)}
              </h3>
              <p style={{ marginTop: 10 }}>{t(p.body)}</p>
              <p
                style={{
                  marginTop: 16,
                  paddingTop: 16,
                  borderTop: "1px solid rgba(43,20,90,.08)",
                  fontStyle: "italic",
                  fontSize: 15,
                }}
              >
                {t(p.question)}
              </p>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 40 }}>
          <Notice tone="warn" icon="i-alert">
            <p style={{ margin: 0 }}>
              <strong>{t({ th: "เรื่องฮาร์ดแวร์ที่ควรรู้: ", en: "About the hardware: " })}</strong>
              {t({
                th: "กิจกรรมนี้รันบน simulator เท่านั้น โปรแกรม Fall Fest ไม่ได้ให้เครดิตสำหรับรันบนเครื่องควอนตัมจริง แต่ทุกอย่างที่เราเขียนคือโค้ด Qiskit ตัวจริง ที่ยิงไปเครื่องจริงได้ทันทีเมื่อคุณมีสิทธิ์เข้าถึง",
                en: "Everything here runs on simulators. The Fall Fest programme does not include credits for real quantum hardware. But the code you write is genuine Qiskit — it will run on actual machines the moment you have access.",
              })}
            </p>
          </Notice>
        </div>
      </Section>

      {/* ---------- Glossary ---------- */}
      <Section variant="mist" id="glossary">
        <p className="eyebrow">{t({ th: "ศัพท์ควอนตัม", en: "Glossary" })}</p>
        <h2>{t({ th: "สิบคำที่จะได้ยินบ่อยที่สุดในวันงาน", en: "The ten words you will hear most" })}</h2>

        <div className="table-wrap" style={{ marginTop: 32 }}>
          <table className="t">
            <tbody>
              {glossary.map((g, i) => (
                <tr key={i}>
                  <th style={{ width: 230, verticalAlign: "top" }}>{t(g.term)}</th>
                  <td className="muted">{t(g.def)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="btn-row" style={{ marginTop: 40 }}>
          <Link className="btn btn--primary" href="/register">
            {t({ th: "ยังไม่ได้ลงทะเบียน กดที่นี่", en: "Not registered yet? Start here" })}
            <Icon name="i-arrow" size={18} />
          </Link>
          <Link className="btn btn--secondary" href="/faq">
            {t({ th: "คำถามที่พบบ่อย", en: "Read the FAQ" })}
          </Link>
        </div>
      </Section>
    </>
  );
}
