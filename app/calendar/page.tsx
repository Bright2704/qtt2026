"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import Icon from "@/components/Icon";
import { PageHead, Section } from "@/components/ui";
import DayScheduleView from "@/components/DayScheduleView";

export default function CalendarPage() {
  const { t } = useLang();

  return (
    <>
      <PageHead
        eyebrow={{ th: "กำหนดการทั้งหมด", en: "Full Schedule" }}
        title={{
          th: "กำหนดการทั้งหมด Qiskit Fall Fest 2026",
          en: "Qiskit Fall Fest 2026 Full Schedule",
        }}
        lead={{
          th: "ลำดับเซสชันการบรรยายออนไลน์ระดับประเทศ และกำหนดการ On-site Workshops",
          en: "Schedule for national Online Lectures and On-site Workshops.",
        }}
      />

      <Section>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: 16,
              marginBottom: 24,
            }}
          >
            <div>
              <h2 style={{ fontSize: "clamp(20px, 2vw, 26px)", margin: 0 }}>
                {t({ th: "ลำดับกำหนดการและรายชื่อวิทยากร (เรียงตามวันและเวลา)", en: "Speaker Schedule by Date & Time" })}
              </h2>
              <p style={{ color: "var(--text-muted)", marginTop: 6, fontSize: 14.5 }}>
                {t({
                  th: "รายละเอียดวิทยากรแต่ละท่าน วันและเวลาที่บรรยาย พร้อมสังกัดและหัวข้อการบรรยาย",
                  en: "Speaker details, lecture dates, hours, affiliations, and presentation topics.",
                })}
              </p>
            </div>
            <div className="btn-row">
              <Link href="/editions/online" className="btn btn--secondary btn--sm">
                {t({ th: "ไปหน้า Online Lectures", en: "Go to Online Lectures" })}
                <Icon name="i-arrow" size={15} />
              </Link>
            <Link href="/speakers" className="btn btn--secondary btn--sm">
              <Icon name="i-users" size={15} />
              {t({ th: "ดูหน้าวิทยากรทั้งหมด", en: "Go to Speakers Page" })}
            </Link>
            </div>
          </div>

          <DayScheduleView />
        </div>
      </Section>
    </>
  );
}
