"use client";

import { useState, type FormEvent } from "react";
import { useLang, type L } from "@/lib/i18n";
import { editions } from "@/data/editions";
import { site } from "@/data/site";
import Icon from "./Icon";

/* ============================================================
   ฟอร์มลงทะเบียนที่ใช้งานได้จริง

   ส่งข้อมูลไปที่ site.contact.formEndpoint (รองรับ Formspree,
   Basin, Web3Forms หรือ API ของทีมเอง — อะไรก็ได้ที่รับ POST JSON)

   ถ้ายังไม่ได้ตั้งค่า endpoint ฟอร์มจะไม่พัง แต่จะสรุปคำตอบทั้งหมด
   เป็นอีเมลให้ผู้ใช้กดส่งแทน เว็บจึงเปิดรับสมัครได้ตั้งแต่วันแรก
   โดยไม่ต้องรอ backend
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

export default function RegisterForm() {
  const { t, lang } = useLang();
  const [v, setV] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, L>>>({});
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

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

  function buildSummary() {
    const ed = editions.find((x) => x.id === v.edition);
    const st = STATUS_OPTS.find((x) => x.v === v.status);
    const sr = SOURCE_OPTS.find((x) => x.v === v.source);
    return [
      `${t({ th: "ชื่อ", en: "Name" })}: ${v.name}`,
      `${t({ th: "อีเมล", en: "Email" })}: ${v.email}`,
      `${t({ th: "งานที่เลือก", en: "Edition" })}: ${ed ? t(ed.name) : v.edition}`,
      `${t({ th: "สถานะ", en: "Status" })}: ${st ? t(st.l) : v.status}`,
      `${t({ th: "สถาบัน", en: "Institution" })}: ${v.org}`,
      `${t({ th: "จังหวัด", en: "Province" })}: ${v.province || "-"}`,
      `${t({ th: "ประสบการณ์เขียนโปรแกรม", en: "Programming experience" })}: ${v.codeLevel}/5`,
      `${t({ th: "ประสบการณ์ควอนตัม", en: "Quantum experience" })}: ${v.quantumLevel}/5`,
      `${t({ th: "นำโน้ตบุ๊กมาเองได้", en: "Brings a laptop" })}: ${v.laptop}`,
      `${t({ th: "ข้อจำกัดด้านอาหารหรือการเข้าถึง", en: "Dietary or accessibility needs" })}: ${v.needs || "-"}`,
      `${t({ th: "รู้จักงานจาก", en: "Heard about us via" })}: ${sr ? t(sr.l) : v.source || "-"}`,
      `${t({ th: "ยอมรับข้อปฏิบัติในงาน", en: "Accepted Code of Conduct" })}: ${v.coc ? "yes" : "no"}`,
      `${t({ th: "ยินยอมให้ถ่ายภาพ", en: "Photo consent" })}: ${v.photo ? "yes" : "no"}`,
    ].join("\n");
  }

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!validate()) return;

    const endpoint = site.contact.formEndpoint;

    if (!endpoint) {
      // ยังไม่มี backend — เปิดโปรแกรมอีเมลพร้อมข้อมูลครบให้กดส่ง
      const subject = encodeURIComponent(
        `[QFF2026TH] ${t({ th: "ลงทะเบียน", en: "Registration" })} — ${v.name}`,
      );
      const body = encodeURIComponent(buildSummary());
      window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
      setState("done");
      return;
    }

    setState("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...v, lang, submittedFrom: "qff2026-website" }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  /* ---------- หน้าจอหลังส่งสำเร็จ ---------- */
  if (state === "done") {
    return (
      <div className="card form-done" role="status">
        <span className="form-done__tick">
          <Icon name="i-check" size={30} strokeWidth={2.4} />
        </span>
        <h3>{t({ th: "ลงทะเบียนเรียบร้อยแล้ว", en: "You are registered" })}</h3>
        <p>
          {site.contact.formEndpoint
            ? t({
                th: "เราได้รับข้อมูลของคุณแล้ว อีเมลยืนยันพร้อมขั้นตอนถัดไปจะส่งไปที่กล่องจดหมายของคุณ ถ้าไม่เจอลองดูในโฟลเดอร์สแปม",
                en: "We have your details. A confirmation email with your next steps is on its way — check your spam folder if it does not appear.",
              })
            : t({
                th: "เราเปิดโปรแกรมอีเมลพร้อมข้อมูลของคุณให้แล้ว กรุณากดส่งอีเมลนั้นเพื่อยืนยันการลงทะเบียน",
                en: "We have opened your email app with all your details filled in. Please send that email to complete your registration.",
              })}
        </p>
        <div className="btn-row" style={{ marginTop: 20 }}>
          <a className="btn btn--primary" href="/learn">
            {t({ th: "ไปดูวิธีเตรียมตัว", en: "See how to prepare" })}
            <Icon name="i-arrow" size={18} />
          </a>
          <button
            type="button"
            className="btn btn--secondary"
            onClick={() => { setV(EMPTY); setState("idle"); }}
          >
            {t({ th: "ลงทะเบียนอีกคน", en: "Register someone else" })}
          </button>
        </div>
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
          {state !== "sending" && <Icon name="i-arrow" size={18} />}
        </button>
        <p className="small muted" style={{ margin: 0 }}>
          {t({ th: "ช่องที่มี * ต้องกรอก", en: "Fields marked * are required" })}
        </p>
      </div>
    </form>
  );
}
