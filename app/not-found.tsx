"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import Icon from "@/components/Icon";

export default function NotFound() {
  const { t } = useLang();

  return (
    <section className="pagehead" style={{ minHeight: "62vh", display: "flex", alignItems: "center" }}>
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1>{t({ th: "ไม่พบหน้าที่คุณกำลังหา", en: "We could not find that page" })}</h1>
        <p className="lead" style={{ maxWidth: "48ch" }}>
          {t({
            th: "ลิงก์อาจเปลี่ยนไปแล้ว หรือหน้านี้ยังไม่ถูกสร้างขึ้น ลองกลับไปหน้าแรกหรือดูงานทั้งหมดของเราดู",
            en: "The link may have changed, or the page may not exist yet. Try the home page, or browse our editions.",
          })}
        </p>
        <div className="btn-row" style={{ marginTop: 32 }}>
          <Link className="btn btn--primary" href="/">
            {t({ th: "กลับหน้าแรก", en: "Back to the home page" })}
            <Icon name="i-arrow" size={18} />
          </Link>
          <Link className="btn btn--ghostDark" href="/editions">
            {t({ th: "ดูงานทั้งหมด", en: "See all editions" })}
          </Link>
        </div>
      </div>
    </section>
  );
}
