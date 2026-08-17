"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { footerCols, site } from "@/data/site";
import Icon from "./Icon";

const socials = [
  { key: "discord", label: "Discord", icon: "i-chat" },
  { key: "linkedin", label: "LinkedIn", icon: "i-network" },
  { key: "youtube", label: "YouTube", icon: "i-globe" },
  { key: "facebook", label: "Facebook", icon: "i-users" },
] as const;

export default function Footer() {
  const { t } = useLang();
  const year = 2026;

  return (
    <>
      <img className="divider" src="/assets/divider-wave.svg" alt="" aria-hidden="true" />
      <footer className="footer">
        <div className="wrap">
          <div className="footer__grid">
            <div>
              <div className="footer__brand">
                <img src="/assets/logo-mark.svg" alt="" width={36} height={36} />
                <span>
                  <strong>Qiskit Fall Fest</strong>
                  <em>2026 · {t({ th: "ประเทศไทย", en: "Thailand" })}</em>
                </span>
              </div>
              <p style={{ fontSize: 15, opacity: 0.8, maxWidth: "34ch" }}>
                {t({
                  th: "จัดโดย QTRiC ร่วมกับมหาวิทยาลัยเทคโนโลยีสุรนารี ภายใต้โครงการ Qiskit Fall Fest ของ IBM Quantum",
                  en: "Organised by QTRiC with Suranaree University of Technology, as part of IBM Quantum's Qiskit Fall Fest.",
                })}
              </p>

              <div className="footer__social">
                {socials.map((s) => {
                  const href = site.contact[s.key as keyof typeof site.contact] as string;
                  return href ? (
                    <a key={s.key} href={href} target="_blank" rel="noreferrer noopener">
                      <Icon name={s.icon} size={16} />
                      {s.label}
                    </a>
                  ) : (
                    <span
                      key={s.key}
                      className="footer__social-soon"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 7,
                        padding: "7px 14px",
                        border: "1px dashed rgba(184,150,248,.4)",
                        borderRadius: 999,
                        fontSize: 13.5,
                        // 0.45 ให้ค่าคอนทราสต์ 3.67 ตกเกณฑ์ AA — 0.62 ได้ 5.4 ผ่าน
                        // แต่ยังจางกว่าลิงก์ที่ใช้ได้จริง จึงยังดูออกว่ายังไม่เปิด
                        opacity: 0.62,
                      }}
                    >
                      <Icon name={s.icon} size={16} />
                      {s.label}
                    </span>
                  );
                })}
              </div>
            </div>

            {footerCols.map((col) => (
              <div key={t(col.title)}>
                <h4>{t(col.title)}</h4>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href}>{t(l.label)}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer__bottom">
            {/* ข้อความบรรทัดนี้เป็นข้อกำหนดจาก IBM — ต้องอยู่มุมซ้ายล่างเสมอ */}
            <div className="footer__mark">Qiskit Fall Fest 2026</div>

            <div className="footer__legal">
              <p style={{ margin: 0 }}>
                © {year} QTRiC ·{" "}
                {t({
                  th: "มหาวิทยาลัยเทคโนโลยีสุรนารี",
                  en: "Suranaree University of Technology",
                })}{" "}
                · <Link href="/code-of-conduct">{t({ th: "ข้อปฏิบัติในงาน", en: "Code of Conduct" })}</Link>
              </p>
              <p style={{ margin: "6px 0 0" }}>
                Qiskit and IBM Quantum are trademarks of International Business Machines
                Corporation. Used with permission for Qiskit Fall Fest 2026.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
