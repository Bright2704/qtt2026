"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { faq } from "@/data/faq";
import Icon from "@/components/Icon";
import { PageHead, Section } from "@/components/ui";

export default function Faq() {
  const { t } = useLang();

  return (
    <>
      <PageHead
        eyebrow={{ th: "คำถามที่พบบ่อย", en: "FAQ" }}
        title={{ th: "คำถามที่พบบ่อย", en: "Frequently asked questions" }}
        lead={{
          th: "ถ้าไม่เจอคำตอบที่ต้องการ ถามเรามาได้เลย เราตอบทุกข้อความ",
          en: "If your question is not here, just ask us. We answer every message.",
        }}
      />

      <Section>
        <div className="acc" style={{ maxWidth: 900 }}>
          {faq.map((item, i) => (
            <details key={i}>
              <summary>{t(item.q)}</summary>
              <div className="acc__body">{t(item.a)}</div>
            </details>
          ))}
        </div>

        <div className="btn-row" style={{ marginTop: 48 }}>
          <Link className="btn btn--primary" href="/register">
            {t({ th: "พร้อมแล้ว ลงทะเบียนเลย", en: "Ready? Register now" })}
            <Icon name="i-arrow" size={18} />
          </Link>
          <Link className="btn btn--secondary" href="/contact">
            {t({ th: "ยังมีคำถามอื่น", en: "Still have a question" })}
          </Link>
        </div>
      </Section>
    </>
  );
}
