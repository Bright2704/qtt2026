"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useLang, type L } from "@/lib/i18n";
import { editions } from "@/data/editions";
import { site } from "@/data/site";
import {
  clearRegistrations,
  downloadCsv,
  listRegistrations,
  makeRef,
  saveRegistration,
  type StoredRegistration,
} from "@/lib/registrations";
import Icon from "./Icon";

/* ============================================================
   ฟอร์มลงทะเบียนที่ใช้งานได้จริง

   ทำงานสองโหมด สลับอัตโนมัติจาก site.contact.formEndpoint

   1. โหมดจริง  — มี endpoint แล้ว ยิง POST JSON ออกไป
                  (ใช้ได้กับ Formspree, Basin, Web3Forms หรือ API ของทีมเอง)

   2. โหมดจำลอง — ยังไม่ได้ตั้ง endpoint ฟอร์มยังเดินครบทุกขั้น
                  ตรวจข้อมูล → หน่วงเหมือนกำลังส่ง → ออกรหัสอ้างอิง
                  → หน้ายืนยันพร้อมสรุปคำตอบ → กดส่งอีเมลจริงต่อได้
                  ข้อมูลเก็บในเครื่องผู้ใช้เท่านั้น ใช้ทดสอบและสาธิตได้เต็มรูปแบบ

   พอได้ endpoint จริงมาแล้ว แก้ที่ data/site.ts ที่เดียว ไม่ต้องแตะไฟล์นี้
   ============================================================ */

type Values = {
  name: string;
  email: string;
  edition: string;
  status: string;
  org: string;
  province: string;
  codeLevel: string;
  quantumLevel: string;
  laptop: string;
  needs: string;
  source: string;
  coc: boolean;
  photo: boolean;
};

const EMPTY: Values = {
  name: "", email: "", edition: "", status: "", org: "", province: "",
  codeLevel: "3", quantumLevel: "1", laptop: "", needs: "", source: "",
  coc: false, photo: false,
};

const STATUS_OPTS: { v: string; l: L }[] = [
  { v: "highschool", l: { th: "นักเรียนมัธยมปลาย", en: "High school student" } },
  { v: "undergrad", l: { th: "นักศึกษาปริญญาตรี", en: "Undergraduate" } },
  { v: "postgrad", l: { th: "นักศึกษาบัณฑิตศึกษา", en: "Postgraduate" } },
  { v: "faculty", l: { th: "อาจารย์หรือนักวิจัย", en: "Faculty or researcher" } },
  { v: "professional", l: { th: "คนทำงาน", en: "Working professional" } },
  { v: "other", l: { th: "อื่น ๆ", en: "Other" } },
];

const SOURCE_OPTS: { v: string; l: L }[] = [
  { v: "facebook", l: { th: "Facebook", en: "Facebook" } },
  { v: "instagram", l: { th: "Instagram", en: "Instagram" } },
  { v: "university", l: { th: "ประกาศของมหาวิทยาลัย", en: "University announcement" } },
  { v: "friend", l: { th: "เพื่อนหรืออาจารย์แนะนำ", en: "A friend or lecturer" } },
  { v: "ibm", l: { th: "ช่องทางของ IBM Quantum", en: "IBM Quantum channels" } },
  { v: "other", l: { th: "อื่น ๆ", en: "Other" } },
];

/** ข้อมูลตัวอย่างสำหรับกดทดสอบฟอร์มรวดเดียว ไม่ต้องพิมพ์เอง */
const SAMPLE: Values = {
  name: "ณิชา วัฒนศิริ",
  email: "nicha.w@example.ac.th",
  edition: "sut",
  status: "undergrad",
  org: "มหาวิทยาลัยเทคโนโลยีสุรนารี",
  province: "นครราชสีมา",
  codeLevel: "3",
  quantumLevel: "1",
  laptop: "yes",
  needs: "มังสวิรัติ",
  source: "university",
  coc: true,
  photo: true,
};

const DEMO = !site.contact.formEndpoint;

export default function RegisterForm() {
  const { t, lang } = useLang();
  const [v, setV] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, L>>>({});
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [receipt, setReceipt] = useState<{ ref: string; lines: string[]; at: string } | null>(null);
  const [saved, setSaved] = useState<StoredRegistration[]>([]);
  const [copied, setCopied] = useState(false);

  // localStorage อ่านได้หลัง hydrate เท่านั้น ไม่งั้น HTML ฝั่ง server จะไม่ตรงกับ client
  useEffect(() => { if (DEMO) setSaved(listRegistrations()); }, []);

  const open = editions.filter((e) => e.status === "open" || e.status === "soon");
  const set = <K extends keyof Values>(k: K, val: Values[K]) => {
    setV((p) => ({ ...p, [k]: val }));
    setErrors((p) => ({ ...p, [k]: undefined }));
  };

  function validate(): boolean {
    const e: Partial<Record<keyof Values, L>> = {};
    if (!v.name.trim()) e.name = { th: "กรุณากรอกชื่อ-นามสกุล", en: "Please enter your name" };
    if (!v.email.trim()) {
      e.email = { th: "กรุณากรอกอีเมล", en: "Please enter your email" };
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) {
      e.email = { th: "รูปแบบอีเมลไม่ถูกต้อง", en: "That email address looks incorrect" };
    }
    if (!v.edition) e.edition = { th: "กรุณาเลือกงานที่จะเข้าร่วม", en: "Please choose an edition" };
    if (!v.status) e.status = { th: "กรุณาเลือกสถานะของคุณ", en: "Please select your status" };
    if (!v.org.trim()) e.org = { th: "กรุณากรอกสถาบันหรือองค์กร", en: "Please enter your institution" };
    if (!v.laptop) e.laptop = { th: "กรุณาระบุว่านำโน้ตบุ๊กมาได้หรือไม่", en: "Please tell us about your laptop" };
    if (!v.coc) e.coc = { th: "ต้องยอมรับข้อปฏิบัติในงานก่อนจึงจะลงทะเบียนได้", en: "You must accept the Code of Conduct" };
    setErrors(e);
    if (Object.keys(e).length) {
      // ต้องรอให้ React วาด aria-invalid ลง DOM ก่อน ไม่งั้นจะหาไม่เจอ
      // (setErrors ยังไม่ได้ re-render ตอนบรรทัดนี้ทำงาน)
      requestAnimationFrame(() => {
        const first = document.querySelector<HTMLElement>(
          '.rform [aria-invalid="true"]',
        );
        first?.scrollIntoView({ block: "center", behavior: "smooth" });
        first?.focus({ preventScroll: true });
      });
      return false;
    }
    return true;
  }

  /** คำตอบทั้งหมดในรูปแบบอ่านง่าย ใช้ทั้งบนหน้ายืนยัน ในอีเมล และตอนคัดลอก */
  function summaryLines(): string[] {
    const ed = editions.find((x) => x.id === v.edition);
    const st = STATUS_OPTS.find((x) => x.v === v.status);
    const sr = SOURCE_OPTS.find((x) => x.v === v.source);
    const laptopL: Record<string, L> = {
      yes: { th: "นำมาเองได้", en: "Yes" },
      no: { th: "นำมาเองไม่ได้", en: "No" },
      online: { th: "เข้าร่วมออนไลน์", en: "Joining online" },
    };
    const yn = (b: boolean) => t(b ? { th: "ยินยอม", en: "Yes" } : { th: "ไม่ยินยอม", en: "No" });
    return [
      `${t({ th: "ชื่อ", en: "Name" })}\t${v.name}`,
      `${t({ th: "อีเมล", en: "Email" })}\t${v.email}`,
      `${t({ th: "งานที่เลือก", en: "Edition" })}\t${ed ? t(ed.name) : t({ th: "ยังไม่แน่ใจ", en: "Not sure yet" })}`,
      `${t({ th: "สถานะ", en: "Status" })}\t${st ? t(st.l) : v.status}`,
      `${t({ th: "สถาบัน", en: "Institution" })}\t${v.org}`,
      `${t({ th: "จังหวัด", en: "Province" })}\t${v.province || "—"}`,
      `${t({ th: "ประสบการณ์เขียนโปรแกรม", en: "Programming experience" })}\t${v.codeLevel} / 5`,
      `${t({ th: "ประสบการณ์ควอนตัม", en: "Quantum experience" })}\t${v.quantumLevel} / 5`,
      `${t({ th: "โน้ตบุ๊ก", en: "Laptop" })}\t${laptopL[v.laptop] ? t(laptopL[v.laptop]) : "—"}`,
      `${t({ th: "ข้อจำกัดด้านอาหารหรือการเข้าถึง", en: "Dietary or access needs" })}\t${v.needs || "—"}`,
      `${t({ th: "รู้จักงานจาก", en: "Heard about us via" })}\t${sr ? t(sr.l) : "—"}`,
      `${t({ th: "ยอมรับข้อปฏิบัติในงาน", en: "Code of Conduct" })}\t${yn(v.coc)}`,
      `${t({ th: "ยินยอมให้ถ่ายภาพ", en: "Photo consent" })}\t${yn(v.photo)}`,
    ];
  }

  function finish(ref: string, lines: string[]) {
    const at = new Date().toLocaleString(lang === "th" ? "th-TH" : "en-GB", {
      dateStyle: "medium",
      timeStyle: "short",
    });
    setReceipt({ ref, lines, at });
    setState("done");
    window.scrollTo({ top: Math.max(0, window.scrollY - 120), behavior: "smooth" });
  }

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!validate()) return;

    const lines = summaryLines();
    setState("sending");

    /* ---------- โหมดจำลอง ---------- */
    if (DEMO) {
      const ref = makeRef(v.edition);
      // หน่วงไว้ให้เห็นสถานะ "กำลังส่ง" เหมือนตอนยิงเซิร์ฟเวอร์จริง
      await new Promise((r) => setTimeout(r, 900));
      setSaved(
        saveRegistration({
          ref,
          submittedAt: new Date().toISOString(),
          lang,
          demo: true,
          values: { ...v },
        }),
      );
      finish(ref, lines);
      return;
    }

    /* ---------- โหมดจริง ---------- */
    try {
      const res = await fetch(site.contact.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...v, lang, submittedFrom: "qff2026-website" }),
      });
      if (!res.ok) { setState("error"); return; }
      finish(makeRef(v.edition), lines);
    } catch {
      setState("error");
    }
  }

  /* ---------- หน้าจอหลังส่งสำเร็จ ---------- */
  if (state === "done" && receipt) {
    const plain = receipt.lines.map((l) => l.replace("\t", ": ")).join("\n");
    const mailHref =
      `mailto:${site.contact.email}` +
      `?subject=${encodeURIComponent(`[${receipt.ref}] ${t({ th: "ลงทะเบียน Qiskit Fall Fest 2026", en: "Qiskit Fall Fest 2026 registration" })}`)}` +
      `&body=${encodeURIComponent(plain)}`;

    return (
      <div className="card form-done" role="status" aria-live="polite">
        <span className="form-done__tick">
          <Icon name="i-check" size={30} strokeWidth={2.4} />
        </span>
        <h3>
          {DEMO
            ? t({ th: "ส่งฟอร์มสำเร็จ (โหมดทดลอง)", en: "Submitted successfully (test mode)" })
            : t({ th: "ลงทะเบียนเรียบร้อยแล้ว", en: "You are registered" })}
        </h3>

        <p className="form-done__ref">
          <span>{t({ th: "รหัสอ้างอิง", en: "Reference" })}</span>
          <code>{receipt.ref}</code>
        </p>

        <p>
          {DEMO
            ? t({
                th: "ฟอร์มทำงานครบทุกขั้นตอนแล้ว ตั้งแต่ตรวจข้อมูลจนถึงออกรหัสอ้างอิง ตอนนี้ยังไม่ได้ต่อระบบหลังบ้าน ข้อมูลจึงถูกเก็บไว้ในเบราว์เซอร์เครื่องนี้เท่านั้น หากต้องการส่งถึงทีมงานจริง กดปุ่มส่งอีเมลด้านล่างได้เลย",
                en: "Every step ran for real — validation, submission, reference code. The backend is not connected yet, so your answers stayed in this browser. To reach the team right now, use the email button below.",
              })
            : t({
                th: "เราได้รับข้อมูลของคุณแล้ว อีเมลยืนยันพร้อมขั้นตอนถัดไปจะส่งไปที่กล่องจดหมายของคุณ ถ้าไม่เจอลองดูในโฟลเดอร์สแปม",
                en: "We have your details. A confirmation email with your next steps is on its way — check your spam folder if it does not appear.",
              })}
        </p>

        <dl className="receipt">
          {receipt.lines.map((line) => {
            const [k, val] = line.split("\t");
            return (
              <div className="receipt__row" key={k}>
                <dt>{k}</dt>
                <dd>{val}</dd>
              </div>
            );
          })}
          <div className="receipt__row">
            <dt>{t({ th: "เวลาที่ส่ง", en: "Submitted at" })}</dt>
            <dd>{receipt.at}</dd>
          </div>
        </dl>

        <div className="btn-row" style={{ marginTop: 24 }}>
          <a className="btn btn--primary" href={mailHref}>
            <Icon name="i-mail" size={18} />
            {t({ th: "ส่งข้อมูลนี้ทางอีเมล", en: "Email these details" })}
          </a>
          <button
            type="button"
            className="btn btn--secondary"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(`${receipt.ref}\n${plain}`);
                setCopied(true);
                setTimeout(() => setCopied(false), 2200);
              } catch { /* บางเบราว์เซอร์ไม่ให้สิทธิ์คลิปบอร์ด */ }
            }}
          >
            <Icon name={copied ? "i-check" : "i-copy"} size={18} />
            {copied
              ? t({ th: "คัดลอกแล้ว", en: "Copied" })
              : t({ th: "คัดลอกข้อมูล", en: "Copy details" })}
          </button>
        </div>

        <div className="btn-row" style={{ marginTop: 12 }}>
          <a className="btn btn--sm btn--secondary" href="/learn">
            {t({ th: "ไปดูวิธีเตรียมตัว", en: "See how to prepare" })}
            <Icon name="i-arrow" size={16} />
          </a>
          <button
            type="button"
            className="btn btn--sm btn--secondary"
            onClick={() => { setV(EMPTY); setReceipt(null); setState("idle"); }}
          >
            {t({ th: "ลงทะเบียนอีกคน", en: "Register someone else" })}
          </button>
        </div>

        {DEMO && saved.length > 0 && <DemoLog rows={saved} onClear={() => { clearRegistrations(); setSaved([]); }} t={t} />}
      </div>
    );
  }

  const err = (k: keyof Values) =>
    errors[k] ? (
      <span className="field__err" role="alert">
        <Icon name="i-alert" size={15} /> {t(errors[k]!)}
      </span>
    ) : null;

  return (
    <form className="rform" onSubmit={onSubmit} noValidate>
      {DEMO && (
        <div className="notice notice--demo">
          <Icon name="i-info" size={22} />
          <div>
            <p style={{ margin: 0 }}>
              <b>{t({ th: "โหมดทดลองใช้งาน", en: "Test mode" })}</b>{" "}
              {t({
                th: "ฟอร์มนี้ทำงานได้ครบทุกขั้นตอน ลองกรอกและกดส่งได้เลย ข้อมูลจะถูกเก็บไว้ในเบราว์เซอร์เครื่องนี้เท่านั้น ยังไม่ส่งออกไปที่ใด เมื่อใส่ปลายทางรับข้อมูลใน data/site.ts แล้ว ฟอร์มจะสลับไปส่งจริงอัตโนมัติ",
                en: "This form is fully working — fill it in and submit. Your answers stay in this browser and are not sent anywhere yet. Once a form endpoint is set in data/site.ts, it switches to live submissions automatically.",
              })}
            </p>
            <div className="btn-row" style={{ marginTop: 12 }}>
              <button
                type="button"
                className="btn btn--sm btn--secondary"
                onClick={() => { setV(SAMPLE); setErrors({}); }}
              >
                <Icon name="i-spark" size={16} />
                {t({ th: "กรอกข้อมูลตัวอย่างให้", en: "Fill with sample data" })}
              </button>
              {saved.length > 0 && (
                <button
                  type="button"
                  className="btn btn--sm btn--secondary"
                  onClick={() => downloadCsv(saved)}
                >
                  <Icon name="i-download" size={16} />
                  {t({ th: `ดาวน์โหลดที่กรอกไว้ (${saved.length})`, en: `Download saved entries (${saved.length})` })}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {state === "error" && (
        <div className="notice notice--warn" role="alert" style={{ marginBottom: 24 }}>
          <Icon name="i-alert" size={22} />
          <p style={{ margin: 0 }}>
            {t({
              th: "ส่งข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง หรือส่งอีเมลมาหาเราโดยตรงก็ได้",
              en: "We could not submit your details. Please try again, or email us directly.",
            })}{" "}
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
          </p>
        </div>
      )}

      <div className="rform__grid">
        <div className="field">
          <label htmlFor="f-name">
            {t({ th: "ชื่อ-นามสกุล", en: "Full name" })} <b>*</b>
          </label>
          <input
            id="f-name" name="name" autoComplete="name" value={v.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={!!errors.name} aria-describedby={errors.name ? "e-name" : undefined}
          />
          <span id="e-name">{err("name")}</span>
        </div>

        <div className="field">
          <label htmlFor="f-email">
            {t({ th: "อีเมล", en: "Email" })} <b>*</b>
          </label>
          <input
            id="f-email" name="email" type="email" inputMode="email" autoComplete="email"
            value={v.email} onChange={(e) => set("email", e.target.value)}
            aria-invalid={!!errors.email} aria-describedby={errors.email ? "e-email" : "h-email"}
          />
          <span className="field__hint" id="h-email">
            {t({
              th: "ใช้อีเมลเดียวกับที่จะสมัคร qBraid",
              en: "Use the same address you will use for qBraid",
            })}
          </span>
          <span id="e-email">{err("email")}</span>
        </div>

        <div className="field field--full">
          <label htmlFor="f-edition">
            {t({ th: "งานที่จะเข้าร่วม", en: "Which edition" })} <b>*</b>
          </label>
          <select
            id="f-edition" name="edition" value={v.edition}
            onChange={(e) => set("edition", e.target.value)}
            aria-invalid={!!errors.edition}
          >
            <option value="">{t({ th: "— เลือกงาน —", en: "— Choose —" })}</option>
            {open.map((e) => (
              <option key={e.id} value={e.id}>
                {t(e.name)} · {t(e.city)} · {t(e.dateLabel)}
              </option>
            ))}
            <option value="undecided">{t({ th: "ยังไม่แน่ใจ", en: "Not sure yet" })}</option>
          </select>
          {err("edition")}
        </div>

        <div className="field">
          <label htmlFor="f-status">
            {t({ th: "สถานะปัจจุบัน", en: "Your status" })} <b>*</b>
          </label>
          <select
            id="f-status" name="status" value={v.status}
            onChange={(e) => set("status", e.target.value)}
            aria-invalid={!!errors.status}
          >
            <option value="">{t({ th: "— เลือก —", en: "— Choose —" })}</option>
            {STATUS_OPTS.map((o) => (
              <option key={o.v} value={o.v}>{t(o.l)}</option>
            ))}
          </select>
          {err("status")}
        </div>

        <div className="field">
          <label htmlFor="f-org">
            {t({ th: "สถาบันหรือองค์กร", en: "Institution or organisation" })} <b>*</b>
          </label>
          <input
            id="f-org" name="org" value={v.org}
            onChange={(e) => set("org", e.target.value)}
            aria-invalid={!!errors.org}
          />
          {err("org")}
        </div>

        <div className="field">
          <label htmlFor="f-province">{t({ th: "จังหวัด", en: "Province" })}</label>
          <input
            id="f-province" name="province" value={v.province}
            onChange={(e) => set("province", e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="f-source">{t({ th: "รู้จักงานนี้จากไหน", en: "How did you hear about us?" })}</label>
          <select id="f-source" name="source" value={v.source} onChange={(e) => set("source", e.target.value)}>
            <option value="">{t({ th: "— เลือก —", en: "— Choose —" })}</option>
            {SOURCE_OPTS.map((o) => (
              <option key={o.v} value={o.v}>{t(o.l)}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="f-code">
            {t({ th: "ประสบการณ์เขียนโปรแกรม", en: "Programming experience" })}
            <span className="field__val">{v.codeLevel} / 5</span>
          </label>
          <input
            id="f-code" name="codeLevel" type="range" min="1" max="5" step="1"
            value={v.codeLevel} onChange={(e) => set("codeLevel", e.target.value)}
          />
          <span className="field__hint">
            {t({ th: "1 = ไม่เคยเขียนเลย · 5 = เขียนคล่อง", en: "1 = never coded · 5 = very comfortable" })}
          </span>
        </div>

        <div className="field">
          <label htmlFor="f-quantum">
            {t({ th: "ประสบการณ์ควอนตัม", en: "Quantum experience" })}
            <span className="field__val">{v.quantumLevel} / 5</span>
          </label>
          <input
            id="f-quantum" name="quantumLevel" type="range" min="1" max="5" step="1"
            value={v.quantumLevel} onChange={(e) => set("quantumLevel", e.target.value)}
          />
          <span className="field__hint">
            {t({
              th: "ตอบ 1 ได้เต็มที่ งานนี้ออกแบบมาเพื่อคนเริ่มจากศูนย์",
              en: "Answering 1 is perfectly fine — the day is built for beginners",
            })}
          </span>
        </div>

        <fieldset className="field field--full" aria-invalid={!!errors.laptop}>
          <legend>
            {t({ th: "นำโน้ตบุ๊กมาเองได้หรือไม่", en: "Can you bring your own laptop?" })} <b>*</b>
          </legend>
          <div className="radio-row">
            {[
              { v: "yes", l: { th: "ได้", en: "Yes" } },
              { v: "no", l: { th: "ไม่ได้", en: "No" } },
              { v: "online", l: { th: "เข้าร่วมออนไลน์", en: "Joining online" } },
            ].map((o) => (
              <label key={o.v} className="radio">
                <input
                  type="radio" name="laptop" value={o.v}
                  checked={v.laptop === o.v}
                  onChange={() => set("laptop", o.v)}
                />
                <span>{t(o.l as L)}</span>
              </label>
            ))}
          </div>
          {v.laptop === "no" && (
            <span className="field__hint field__hint--warn">
              <Icon name="i-alert" size={15} />{" "}
              {t({
                th: "งานที่มาที่สถานที่จริงจำเป็นต้องมีโน้ตบุ๊ก กรุณาติดต่อทีมงานก่อนลงทะเบียน เราจะหาทางช่วย",
                en: "On-site editions require a laptop. Please contact us before registering and we will try to help.",
              })}
            </span>
          )}
          {err("laptop")}
        </fieldset>

        <div className="field field--full">
          <label htmlFor="f-needs">
            {t({ th: "ข้อจำกัดด้านอาหารหรือการเข้าถึง", en: "Dietary or accessibility needs" })}
          </label>
          <textarea
            id="f-needs" name="needs" rows={3} value={v.needs}
            onChange={(e) => set("needs", e.target.value)}
            placeholder={t({
              th: "เช่น อาหารเจ แพ้อาหารทะเล ต้องใช้ทางลาดสำหรับรถเข็น",
              en: "For example: vegetarian, shellfish allergy, step-free access",
            })}
          />
        </div>

        <div className="field field--full check-group">
          <label className="check" data-invalid={!!errors.coc}>
            <input
              type="checkbox" name="coc" checked={v.coc}
              onChange={(e) => set("coc", e.target.checked)}
              aria-invalid={!!errors.coc}
            />
            <span>
              {t({ th: "ฉันยอมรับ", en: "I accept the" })}{" "}
              <a href="/code-of-conduct" target="_blank">
                {t({ th: "ข้อปฏิบัติในงาน", en: "Code of Conduct" })}
              </a>{" "}
              {t({
                th: "และยินยอมให้เก็บข้อมูลนี้เพื่อใช้จัดงานตาม PDPA",
                en: "and consent to my details being used to run this event under Thailand's PDPA",
              })}{" "}
              <b>*</b>
            </span>
          </label>
          {err("coc")}

          <label className="check">
            <input
              type="checkbox" name="photo" checked={v.photo}
              onChange={(e) => set("photo", e.target.checked)}
            />
            <span>
              {t({
                th: "ยินยอมให้ถ่ายภาพและวิดีโอในงานเพื่อใช้ประชาสัมพันธ์ (ไม่บังคับ)",
                en: "I consent to photos and video from the event being used for promotion (optional)",
              })}
            </span>
          </label>
        </div>
      </div>

      <div className="rform__foot">
        <button className="btn btn--primary btn--shimmer" type="submit" disabled={state === "sending"}>
          <span>
            {state === "sending"
              ? t({ th: "กำลังส่ง...", en: "Sending…" })
              : t({ th: "ยืนยันการลงทะเบียน", en: "Complete registration" })}
          </span>
          {state === "sending" ? <span className="spin" aria-hidden="true" /> : <Icon name="i-arrow" size={18} />}
        </button>
        <p className="small muted" style={{ margin: 0 }}>
          {t({ th: "ช่องที่มี * ต้องกรอก", en: "Fields marked * are required" })}
        </p>
      </div>
    </form>
  );
}

/** รายการที่กรอกไว้ในโหมดทดลอง ช่วยยืนยันว่าฟอร์มเก็บข้อมูลได้ครบจริง */
function DemoLog({
  rows, onClear, t,
}: {
  rows: StoredRegistration[];
  onClear: () => void;
  t: (l: L) => string;
}) {
  return (
    <div className="demo-log">
      <p className="small muted" style={{ margin: 0 }}>
        {t({
          th: `เก็บไว้ในเบราว์เซอร์นี้แล้ว ${rows.length} รายการ`,
          en: `${rows.length} entries saved in this browser`,
        })}
      </p>
      <div className="btn-row" style={{ marginTop: 10 }}>
        <button type="button" className="btn btn--sm btn--secondary" onClick={() => downloadCsv(rows)}>
          <Icon name="i-download" size={16} />
          {t({ th: "ดาวน์โหลด CSV", en: "Download CSV" })}
        </button>
        <button type="button" className="btn btn--sm btn--secondary" onClick={onClear}>
          {t({ th: "ล้างข้อมูลทดลอง", en: "Clear test data" })}
        </button>
      </div>
    </div>
  );
}
