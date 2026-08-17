"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { editions } from "@/data/editions";
import { agenda } from "@/data/programme";
import { globalStats, site } from "@/data/site";
import { partnerTiers } from "@/data/partners";
import { scatterDark, scatterLight, stickers } from "@/data/stickers";
import Countdown from "@/components/Countdown";
import EditionCard from "@/components/EditionCard";
import Icon from "@/components/Icon";
import { Section } from "@/components/ui";
import OrbitingStickers from "@/components/magic/OrbitingStickers";
import StickerMarquee from "@/components/magic/StickerMarquee";
import Reveal from "@/components/magic/Reveal";
import NumberTicker from "@/components/magic/NumberTicker";
import Scatter from "@/components/magic/Scatter";
import Spotlight from "@/components/magic/Spotlight";
import StickerIcon from "@/components/magic/StickerIcon";
import Parallax from "@/components/magic/Parallax";
import PointerLayer from "@/components/magic/PointerLayer";

const benefits = [
  {
    sticker: stickers.circuit,
    tilt: -8,
    title: { th: "เขียนโค้ดควอนตัมจริงสี่ชั่วโมง", en: "Four hours of real quantum code" },
    body: {
      th: "ทฤษฎีสองชั่วโมง ลงมือทำอีกสองชั่วโมง ทั้งหมดรันบน qBraid ผ่านเบราว์เซอร์ ไม่ต้องติดตั้งอะไรในเครื่อง",
      en: "Two hours of theory, two hands-on, all running on qBraid in the browser. Nothing to install.",
    },
  },
  {
    sticker: stickers.badge,
    tilt: 6,
    title: { th: "ใบรับรองจาก IBM Quantum", en: "An IBM Quantum certificate" },
    body: {
      th: "ผู้เข้าร่วมได้รับ certificate of participation ที่ใส่ใน CV และโปรไฟล์ LinkedIn ได้",
      en: "Participants receive a certificate of participation for their CV and LinkedIn profile.",
    },
  },
  {
    sticker: stickers.hummingbirds,
    tilt: -5,
    title: { th: "ทีมพี่เลี้ยงประกบใกล้ชิด", en: "Mentors right beside you" },
    body: {
      th: "TA อย่างน้อยห้าคนเดินดูแลตลอดช่วงลงมือทำ ติดตรงไหนยกมือได้ทันที ไม่ต้องรอ",
      en: "At least five teaching assistants circulate throughout the hands-on work. Put your hand up any time.",
    },
  },
  {
    sticker: stickers.bluebird,
    tilt: 7,
    title: { th: "เห็นว่าควอนตัมใช้ทำอะไรได้จริง", en: "See what quantum actually does" },
    body: {
      th: "เซสชันกรณีใช้งานจากงานวิจัยและอุตสาหกรรมจริง ไม่ใช่ทฤษฎีลอย ๆ ที่จบในห้องเรียน",
      en: "Use-case sessions drawn from real research and industry, not theory that stops at the classroom door.",
    },
  },
  {
    sticker: stickers.fallFest,
    tilt: -10,
    title: { th: "เจอคนที่สนใจเรื่องเดียวกัน", en: "Meet your people" },
    body: {
      th: "ช่วงเครือข่ายกับนักวิจัย อาจารย์ และเพื่อนร่วมรุ่นจากมหาวิทยาลัยทั่วประเทศ",
      en: "Networking with researchers, faculty, and peers from universities across the country.",
    },
  },
  {
    sticker: stickers.eagle,
    tilt: 9,
    title: { th: "ประตูสู่งานเจาะลึก", en: "A path onward" },
    body: {
      th: "ผู้ที่สนใจต่อจะได้รับเชิญเข้างาน Deep Dive ที่เราวางแผนจัดต่อเนื่องหลังจากนี้",
      en: "Interested participants are invited to the deep-dive events we are planning next.",
    },
  },
];

export default function Home() {
  const { t } = useLang();
  const sut = editions[0];

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero">
        <img className="hero__bg" src="/assets/hero-light.svg" alt="" aria-hidden="true" />

        <div className="wrap hero__inner">
          <div>
            <p className="eyebrow">
              {t({
                th: "ตุลาคม – พฤศจิกายน 2026 · ไฮบริด · เข้าร่วมฟรี",
                en: "October – November 2026 · Hybrid · Free to join",
              })}
            </p>

            <h1 className="display">
              <span className="shine">Qiskit Fall Fest 2026</span>
              <em>{t({ th: "ประเทศไทย", en: "Thailand" })}</em>
            </h1>

            <p className="lead">
              {t({
                th: "เทศกาลควอนตัมคอมพิวติงระดับโลกของ IBM Quantum มาถึงประเทศไทยแล้ว หนึ่งวันเต็มกับการลงมือเขียนโปรแกรมควอนตัมจริง โดยไม่ต้องมีพื้นฐานมาก่อน ที่นครราชสีมาและกรุงเทพฯ",
                en: "IBM Quantum's global celebration of quantum computing comes to Thailand — a full day of hands-on quantum programming, no prior background required, in Nakhon Ratchasima and Bangkok.",
              })}
            </p>

            <div className="btn-row">
              <Link className="btn btn--primary btn--shimmer" href="/register">
                <span>{t({ th: "ลงทะเบียนฟรี", en: "Register free" })}</span>
                <Icon name="i-arrow" size={18} />
              </Link>
              <Link className="btn btn--secondary" href="/programme">
                {t({ th: "ดูกำหนดการ", en: "See the programme" })}
              </Link>
            </div>

            <p className="hero__trust">
              {t({
                th: "ฟรีทั้งหมด · ไม่ต้องมีพื้นฐานควอนตัม · รับใบรับรองจาก IBM Quantum",
                en: "Completely free · No quantum background needed · IBM Quantum certificate",
              })}
            </p>

            <Countdown
              target={sut.date ? `${sut.date}T08:30:00+07:00` : null}
              label={{ th: "นับถอยหลังสู่งานที่ มทส.", en: "Countdown to the SUT edition" }}
              fallback={{
                th: `งานที่ มทส. ${t(sut.dateLabel)}`,
                en: `SUT edition, ${t(sut.dateLabel)}`,
              }}
            />
          </div>

          {/* เหรียญตราพร้อมสติกเกอร์โคจรรอบ */}
          <div className="hero__orbit">
            <Parallax speed={0.05}>
              <PointerLayer depth={22}>
                <OrbitingStickers />
              </PointerLayer>
            </Parallax>
          </div>
        </div>
      </section>

      {/* ================= STICKER MARQUEE ================= */}
      <div className="sticker-band">
        <StickerMarquee speed="46s" size="clamp(74px, 8vw, 116px)" />
      </div>

      {/* ================= STATS ================= */}
      <Section tight variant="mist">
        <div className="grid grid--4">
          {globalStats.map((s, i) => (
            <Reveal key={s.num} delay={i * 90}>
              <div className="stat">
                <span className="stat__num">
                  <NumberTicker value={s.num} />
                </span>
                <span className="stat__label">{t(s.label)}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ================= EDITIONS ================= */}
      <Section id="editions">
        <Reveal>
          <p className="eyebrow">{t({ th: "เลือกงานของคุณ", en: "Pick your edition" })}</p>
          <h2>{t({ th: "เลือกงานที่ใกล้คุณที่สุด", en: "Pick the edition nearest you" })}</h2>
          <p className="lead prose" style={{ marginTop: 12, marginBottom: 40 }}>
            {t({
              th: "แต่ละเมืองใช้หลักสูตรแกนกลางเดียวกัน เลือกที่สะดวกที่สุดได้เลย หรือจะเริ่มจากปฐมนิเทศออนไลน์ก่อนก็ได้",
              en: "Every edition runs the same core curriculum. Choose whichever is easiest to reach — or start with the online orientation.",
            })}
          </p>
        </Reveal>

        <div className="grid grid--4">
          {editions.map((e, i) => (
            <Reveal key={e.id} delay={i * 100}>
              <Spotlight className="beam" style={{ borderRadius: "var(--r-lg)", height: "100%" }}>
                <EditionCard e={e} />
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ================= DECADE ================= */}
      <Section variant="dark">
        <Scatter items={scatterDark} />
        <Reveal>
          <div style={{ maxWidth: "62ch" }}>
            <p className="eyebrow">{t({ th: "ธีมระดับโลก ปี 2026", en: "Global theme 2026" })}</p>
            <h2>
              {t({
                th: "สิบปีที่ควอนตัมขึ้นไปอยู่บนคลาวด์ ปีนี้มันลงมาอยู่ในห้องเรียนของคุณ",
                en: "A decade of quantum on the cloud — this year it lands in your classroom",
              })}
            </h2>
            <div className="lead" style={{ marginTop: 24 }}>
              <p>
                {t({
                  th: "เมื่อสิบปีก่อน IBM เปิดให้คนทั่วโลกส่งวงจรควอนตัมไปรันบนเครื่องจริงผ่านอินเทอร์เน็ตเป็นครั้งแรก จากที่เคยเป็นเครื่องมือของห้องแล็บไม่กี่แห่ง ควอนตัมคอมพิวเตอร์กลายเป็นสิ่งที่นักเรียนคนหนึ่งเปิดโน้ตบุ๊กแล้วเริ่มทดลองได้ทันที",
                  en: "A decade ago, IBM made it possible for anyone in the world to send a quantum circuit to real hardware over the internet. What had been the preserve of a handful of laboratories became something a student could open a laptop and start experimenting with.",
                })}
              </p>
              <p>
                {t({
                  th: "Qiskit Fall Fest 2026 ฉลองสิบปีนั้น และสำหรับประเทศไทย เราอยากให้ปีนี้เป็นจุดเริ่มต้นของอีกสิบปีข้างหน้า สิบปีที่คนไทยไม่ได้แค่ใช้เทคโนโลยีควอนตัม แต่สร้างมันได้ด้วย",
                  en: "Qiskit Fall Fest 2026 marks that anniversary. For Thailand, we want this year to be the start of the next decade — one in which Thai people do not only use quantum technology, but build it.",
                })}
              </p>
            </div>
            <div className="btn-row" style={{ marginTop: 32 }}>
              <Link className="btn btn--onDark" href="/about">
                {t({ th: "อ่านที่มาของงาน", en: "Read the full story" })}
                <Icon name="i-arrow" size={18} />
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ================= BENEFITS ================= */}
      <Section>
        <Reveal>
          <p className="eyebrow">{t({ th: "คุณจะได้อะไร", en: "What you get" })}</p>
          <h2>{t({ th: "หนึ่งวัน กับหกสิ่งที่ติดตัวคุณกลับไป", en: "One day, six things you take away" })}</h2>
        </Reveal>

        <div className="grid grid--3" style={{ marginTop: 40 }}>
          {benefits.map((b, i) => (
            <Reveal key={b.sticker.id} delay={i * 80}>
              <Spotlight className="beam" style={{ borderRadius: "var(--r-lg)", height: "100%" }}>
                <article className="card card--hover" style={{ height: "100%" }}>
                  <StickerIcon sticker={b.sticker} tilt={b.tilt} size={92} />
                  <h3>{t(b.title)}</h3>
                  <p>{t(b.body)}</p>
                </article>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ================= EXPLAINER ================= */}
      <Section variant="lilac">
        <Scatter items={scatterLight} />
        <div className="grid grid--2" style={{ gap: 48, alignItems: "start" }}>
          <Reveal>
            <p className="eyebrow">{t({ th: "เริ่มจากศูนย์", en: "Starting from zero" })}</p>
            <h2>
              {t({
                th: "ควอนตัมคอมพิวติงคืออะไร ทำไมถึงต่างจากคอมพิวเตอร์ที่เราใช้อยู่",
                en: "What is quantum computing, and why is it different?",
              })}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="prose">
              <p>
                {t({
                  th: "คอมพิวเตอร์ที่เราใช้ทุกวันคิดด้วยบิต ซึ่งเป็นได้แค่ 0 หรือ 1 ทีละอย่าง ส่วนคอมพิวเตอร์ควอนตัมใช้คิวบิต ที่อยู่ในสถานะผสมของ 0 และ 1 ได้พร้อมกัน และคิวบิตหลายตัวยังพัวพันกันได้ ทำให้สำรวจความเป็นไปได้จำนวนมหาศาลไปพร้อมกัน",
                  en: "The computers we use every day think in bits, each either 0 or 1. A quantum computer uses qubits, which can hold a blend of 0 and 1 at once, and which can become entangled with one another — letting the machine explore an enormous space of possibilities together.",
                })}
              </p>
              <p>
                {t({
                  th: "ผลคือปัญหาบางประเภท เช่น การจำลองโมเลกุลเพื่อออกแบบยา การหาค่าที่เหมาะที่สุดในระบบซับซ้อน และการเข้ารหัส อาจแก้ได้ในแบบที่คอมพิวเตอร์ทั่วไปทำไม่ไหว",
                  en: "For certain problems — simulating molecules for drug design, optimising complex systems, cryptography — that opens routes classical machines cannot take.",
                })}
              </p>
              <p>
                <strong>
                  {t({
                    th: "ไม่ต้องกังวลถ้ายังไม่เข้าใจ นั่นคือสิ่งที่เราจะสอนกันในงาน และเราเริ่มจากศูนย์จริง ๆ",
                    en: "If none of that is clear yet, good. That is exactly what the day is for, and we start from zero.",
                  })}
                </strong>
              </p>
              <div className="btn-row" style={{ marginTop: 24 }}>
                <Link className="btn btn--secondary" href="/learn">
                  {t({ th: "อ่านคู่มือเตรียมตัวฉบับเต็ม", en: "Read the full preparation guide" })}
                  <Icon name="i-arrow" size={18} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ================= AGENDA PREVIEW ================= */}
      <Section>
        <Reveal>
          <p className="eyebrow">{t({ th: "หนึ่งวันของคุณ", en: "Your day" })}</p>
          <h2>{t({ th: "หน้าตากำหนดการเป็นอย่างไร", en: "What the day looks like" })}</h2>

          <div className="table-wrap" style={{ marginTop: 32 }}>
            <table className="t">
              <thead>
                <tr>
                  <th style={{ width: 170 }}>{t({ th: "เวลา", en: "Time" })}</th>
                  <th>{t({ th: "หัวข้อ", en: "Session" })}</th>
                </tr>
              </thead>
              <tbody>
                {agenda.slice(0, 5).map((s) => (
                  <tr key={s.time}>
                    <td className="mono muted">{s.time}</td>
                    <td>{t(s.title)}</td>
                  </tr>
                ))}
                <tr>
                  <td className="mono muted">…</td>
                  <td className="muted">
                    {t({ th: "และอีกสี่ช่วงจนถึง 16:15 น.", en: "and four more sessions until 16:15" })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="btn-row" style={{ marginTop: 28 }}>
            <Link className="btn btn--secondary" href="/programme">
              {t({ th: "ดูกำหนดการเต็ม", en: "See the full programme" })}
              <Icon name="i-arrow" size={18} />
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* ================= PARTNERS ================= */}
      <Section variant="mist" tight>
        <Reveal>
          <p className="eyebrow">{t({ th: "ร่วมกับ", en: "In collaboration with" })}</p>
          <h2 style={{ marginBottom: 32 }}>
            {t({ th: "พันธมิตรที่ทำให้งานนี้เกิดขึ้น", en: "The partners who make this possible" })}
          </h2>

          <div className="logo-grid">
            {partnerTiers
              .flatMap((tier) => tier.partners)
              .filter((p) => p.confirmed)
              .map((p) => (
                <div className="logo-box beam" key={t(p.name)}>
                  <div>
                    <div className="logo-box__name">{t(p.name)}</div>
                    {p.sub && <div className="logo-box__sub">{t(p.sub)}</div>}
                  </div>
                </div>
              ))}
          </div>

          <div className="btn-row" style={{ marginTop: 32 }}>
            <Link className="btn btn--secondary" href="/partners">
              {t({ th: "ดูพันธมิตรทั้งหมด", en: "All partners" })}
              <Icon name="i-arrow" size={18} />
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* ================= CTA ================= */}
      <section className="cta-band">
        <div className="wrap">
          <Reveal>
            <h2>{t({ th: "ที่นั่งมีจำกัด และเราไม่คิดค่าใช้จ่ายสักบาท", en: "Seats are limited. Admission is free." })}</h2>
            <p>
              {t({
                th: "ถ้าคุณเคยสงสัยว่าควอนตัมคอมพิวติงมันคืออะไรกันแน่ นี่คือวันที่คุณจะได้คำตอบด้วยมือตัวเอง",
                en: "If you have ever wondered what quantum computing actually is, this is the day you find out with your own hands.",
              })}
            </p>
            <div className="btn-row">
              <Link
                className="btn btn--shimmer"
                href="/register"
                style={{ background: "var(--indigo-900)", color: "var(--white)" }}
              >
                <span>{t({ th: "ลงทะเบียนเลย", en: "Register now" })}</span>
                <Icon name="i-arrow" size={18} />
              </Link>
              <Link
                className="btn"
                href="/learn"
                style={{ borderColor: "var(--indigo-900)", color: "var(--indigo-900)" }}
              >
                {t({ th: "ดูวิธีเตรียมตัว", en: "How to prepare" })}
              </Link>
            </div>
            <p className="small" style={{ marginTop: 20, opacity: 0.75 }}>
              {t(site.qbraid.note)}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
