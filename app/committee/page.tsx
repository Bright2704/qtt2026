"use client";

import { useLang } from "@/lib/i18n";
import { committee } from "@/data/people";
import PersonCard from "@/components/PersonCard";
import { Notice, PageHead, Section } from "@/components/ui";

export default function Committee() {
  const { t } = useLang();

  return (
    <>
      <PageHead
        eyebrow={{ th: "คณะกรรมการจัดงาน", en: "Organising committee" }}
        title={{ th: "คนที่อยู่เบื้องหลังงานนี้", en: "The people behind the event" }}
        lead={{
          th: "งานนี้จัดโดยทีมจากมหาวิทยาลัยเทคโนโลยีสุรนารีและ QTRiC ร่วมกับที่ปรึกษาระดับภูมิภาคและเครือข่ายมหาวิทยาลัยทั่วประเทศ",
          en: "Run by a team from Suranaree University of Technology and QTRiC, with regional advisors and a network of universities across Thailand.",
        }}
      />

      {committee.map((group, gi) => (
        <Section key={gi} variant={gi % 2 === 1 ? "mist" : undefined}>
          <p className="eyebrow">{t(group.title)}</p>
          {group.note && (
            <h2 style={{ fontSize: "clamp(21px, 2vw, 27px)" }}>{t(group.note)}</h2>
          )}
          <div className="grid grid--4" style={{ marginTop: 32 }}>
            {group.people.map((p, i) => (
              <PersonCard key={i} p={p} showTopic={false} />
            ))}
          </div>
        </Section>
      ))}

      <Section tight variant="lilac">
        <Notice icon="i-users">
          <p style={{ margin: 0 }}>
            {t({
              th: "ทีมอาสาสมัครและ TA อยู่ระหว่างเปิดรับสมัคร รายชื่อจะประกาศเพิ่มเมื่อทีมครบ ถ้าคุณอยากร่วมทีม ติดต่อเรามาได้เลย",
              en: "Our volunteer and teaching assistant team is still being recruited; names appear here once the team is complete. If you would like to join, get in touch.",
            })}
          </p>
        </Notice>
      </Section>
    </>
  );
}
