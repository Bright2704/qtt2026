"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { partnerTiers } from "@/data/partners";
import Icon from "@/components/Icon";
import { Notice, PageHead, Section, TbcChip } from "@/components/ui";

const supportWays = [
  {
    icon: "i-pin",
    title: { th: "สถานที่", en: "A venue" },
    body: {
      th: "ห้องประชุมที่รองรับ 40 ถึง 50 คน มี Wi-Fi และปลั๊กไฟเพียงพอ",
      en: "A room for 40 to 50 people with Wi-Fi and enough power outlets.",
    },
  },
  {
    icon: "i-users",
    title: { th: "อาหารและเครื่องดื่ม", en: "Food and drink" },
    body: {
      th: "อาหารกลางวันและของว่างสำหรับผู้เข้าร่วม ช่วยให้เราจัดงานได้โดยไม่ต้องเก็บค่าลงทะเบียน",
      en: "Lunch and refreshments for participants, so we can keep admission free.",
    },
  },
  {
    icon: "i-certificate",
    title: { th: "ทุนเดินทาง", en: "Travel bursaries" },
    body: {
      th: "ทุนสำหรับนักเรียนนักศึกษาจากต่างจังหวัดที่อยากมาแต่ค่าเดินทางเป็นอุปสรรค",
      en: "Support for students from other provinces for whom travel cost is the barrier.",
    },
  },
  {
    icon: "i-chat",
    title: { th: "วิทยากรและพี่เลี้ยง", en: "Speakers and mentors" },
    body: {
      th: "คนในองค์กรที่ทำงานด้านควอนตัมหรือเทคโนโลยีเชิงลึก มาแบ่งปันประสบการณ์",
      en: "People in your organisation working in quantum or deep tech, sharing what they know.",
    },
  },
];

export default function Partners() {
  const { t } = useLang();

  return (
    <>
      <PageHead
        eyebrow={{ th: "พันธมิตรและผู้สนับสนุน", en: "Partners and sponsors" }}
        title={{ th: "คนที่ทำให้งานนี้เกิดขึ้นได้", en: "The people making this possible" }}
        lead={{
          th: "งานนี้ไม่เก็บค่าลงทะเบียน และจัดขึ้นได้ด้วยความร่วมมือของสถาบันและองค์กรที่เชื่อว่าความรู้ควอนตัมควรเข้าถึงได้สำหรับทุกคน",
          en: "Admission is free, made possible by institutions and organisations who believe quantum knowledge should be within everyone's reach.",
        }}
      />

      {partnerTiers.map((tier, ti) => (
        <Section key={ti} variant={ti % 2 === 1 ? "mist" : undefined} tight>
          <p className="eyebrow">{t(tier.title)}</p>
          {tier.note && (
            <p className="muted" style={{ maxWidth: "56ch", marginBottom: 24 }}>
              {t(tier.note)}
            </p>
          )}
          <div className="logo-grid" style={{ marginTop: tier.note ? 0 : 24 }}>
            {tier.partners.map((p, i) => (
              <div className="logo-box" key={i}>
                <div>
                  <div className="logo-box__name">
                    {p.url ? (
                      <a href={p.url} target="_blank" rel="noreferrer noopener" style={{ textDecoration: "none" }}>
                        {t(p.name)}
                      </a>
                    ) : (
                      t(p.name)
                    )}
                  </div>
                  {p.sub && <div className="logo-box__sub">{t(p.sub)}</div>}
                  {!p.confirmed && <TbcChip />}
                </div>
              </div>
            ))}
          </div>
        </Section>
      ))}

      {/* ---------- Become a partner ---------- */}
      <Section variant="dark" id="become">
        <p className="eyebrow">{t({ th: "ร่วมสนับสนุน", en: "Support the fest" })}</p>
        <h2 style={{ maxWidth: "22ch" }}>
          {t({
            th: "อยากให้ควอนตัมเข้าถึงคนไทยมากขึ้นเหมือนกันใช่ไหม",
            en: "Want quantum within more Thai people's reach too?",
          })}
        </h2>
        <p className="lead prose" style={{ marginTop: 20 }}>
          {t({
            th: "หากองค์กรของคุณอยากร่วมสนับสนุน ไม่ว่าจะเป็นสถานที่ อาหาร ทุนเดินทางสำหรับผู้เข้าร่วมจากต่างจังหวัด หรือส่งคนมาเป็นวิทยากร เราอยากคุยด้วย และเราเปิดกว้างกับรูปแบบความร่วมมือที่ไม่ใช่ตัวเงินด้วย",
            en: "If your organisation would like to help — a venue, meals, travel bursaries for participants from other provinces, or a speaker from your team — we would like to talk. Non-financial contributions are just as welcome.",
          })}
        </p>

        <div className="grid grid--4" style={{ marginTop: 44 }}>
          {supportWays.map((w) => (
            <article className="card card--dark" key={w.icon}>
              <span className="card__icon">
                <Icon name={w.icon} size={22} />
              </span>
              <h3>{t(w.title)}</h3>
              <p>{t(w.body)}</p>
            </article>
          ))}
        </div>

        <div className="btn-row" style={{ marginTop: 44 }}>
          <Link className="btn btn--onDark" href="/contact">
            {t({ th: "คุยกับทีมงาน", en: "Talk to the team" })}
            <Icon name="i-arrow" size={18} />
          </Link>
        </div>
      </Section>

      <Section tight>
        <Notice icon="i-info">
          <p style={{ margin: 0 }}>
            {t({
              th: "โลโก้ของพันธมิตรจะแสดงที่นี่เมื่อเราได้รับไฟล์ต้นฉบับจากแต่ละองค์กร หากคุณเป็นพันธมิตรและยังไม่ได้ส่งโลโก้ กรุณาส่งไฟล์ SVG หรือ PNG พื้นโปร่งมาให้เรา",
              en: "Partner logos appear here once we receive the original files. If you are a partner and have not sent yours, an SVG or transparent PNG is ideal.",
            })}
          </p>
        </Notice>
      </Section>
    </>
  );
}
