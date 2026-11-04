"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { globalStats, site } from "@/data/site";
import { ibmProvides, trackRecord } from "@/data/partners";
import Icon from "@/components/Icon";
import { Notice, PageHead, Section, Stat } from "@/components/ui";

export default function About() {
  const { t } = useLang();

  return (
    <>
      <PageHead
        eyebrow={{ th: "เกี่ยวกับงาน", en: "About the fest" }}
        title={{
          th: "Qiskit Fall Fest 2026: ประเทศไทย",
          en: "Qiskit Fall Fest 2026: Thailand",
        }}
        lead={{
          th: "เทศกาลควอนตัมคอมพิวติงที่ขับเคลื่อนโดยชุมชน จัดขึ้นพร้อมกันทั่วโลกภายใต้การสนับสนุนของ IBM Quantum และปีนี้ประเทศไทยได้เป็นหนึ่งในเจ้าภาพ",
          en: "A community-led celebration of quantum computing, running worldwide with IBM Quantum's support — and this year, Thailand is one of the hosts.",
        }}
      />

      {/* ---------- What is Fall Fest ---------- */}
      <Section id="what-is">
        <div className="grid grid--2" style={{ gap: 56, alignItems: "start" }}>
          <div>
            <p className="eyebrow">{t({ th: "งานนี้คืออะไร", en: "What this is" })}</p>
            <h2>{t({ th: "Qiskit Fall Fest คืออะไร", en: "What is Qiskit Fall Fest?" })}</h2>
          </div>
          <div className="prose">
            <p>
              {t({
                th: "Qiskit Fall Fest คือชุดกิจกรรมควอนตัมคอมพิวติงระดับโลกที่จัดโดยชุมชน ภายใต้การสนับสนุนของ IBM Quantum ทุกปีจะมีนักศึกษา อาจารย์ และนักวิจัยจากทั่วโลกอาสาเป็นเจ้าภาพจัดงานในมหาวิทยาลัยและชุมชนของตัวเอง",
                en: "Qiskit Fall Fest is a global lineup of community-led quantum computing events supported by IBM Quantum. Each year, students, educators, and researchers around the world volunteer to host events on their own campuses and in their own communities.",
              })}
            </p>
            <p>
              {t({
                th: "รูปแบบกิจกรรมมีตั้งแต่เวิร์กชอปลงมือทำ การแข่งขันเขียนโค้ดและแฮกกาธอน การบรรยายและเสวนางานวิจัย ไปจนถึงกิจกรรมสร้างเครือข่าย แต่ละเจ้าภาพเลือกรูปแบบที่เหมาะกับชุมชนของตัวเอง",
                en: "Formats range from hands-on workshops and coding challenges to research talks, panels, and social gatherings. Each host chooses what suits their own community.",
              })}
            </p>
            <p>
              {t({
                th: "ในปี 2026 ประเทศไทยได้เข้าร่วมเป็นเจ้าภาพ โดยมีมหาวิทยาลัยเทคโนโลยีสุรนารีเป็นสถาบันหลัก ทำงานร่วมกับ QTRiC และเครือข่ายมหาวิทยาลัยทั่วประเทศ",
                en: "For 2026, Thailand joins the roster, hosted by Suranaree University of Technology working with QTRiC and a network of universities nationwide.",
              })}
            </p>
          </div>
        </div>

        <div className="grid grid--4" style={{ marginTop: 56 }}>
          {globalStats.slice(0, 2).map((s) => (
            <Stat key={s.num} num={s.num} label={s.label} />
          ))}
          <Stat
            num="2016"
            label={{
              th: "ปีที่ IBM เปิดควอนตัมบนคลาวด์ให้คนทั่วโลกเป็นครั้งแรก",
              en: "the year IBM first opened quantum on the cloud to everyone",
            }}
          />
          <Stat
            num="10"
            label={{
              th: "ปีที่เราฉลองกันในธีมของปีนี้",
              en: "years celebrated in this year's theme",
            }}
          />
        </div>
      </Section>

      {/* ---------- Theme ---------- */}
      <Section variant="dark" id="theme">
        <p className="eyebrow">{t({ th: "ธีมของงานในประเทศไทย", en: "The Thailand theme" })}</p>
        <blockquote
          style={{
            margin: 0,
            fontSize: "clamp(21px, 2.6vw, 32px)",
            lineHeight: 1.45,
            fontWeight: 300,
            maxWidth: "24ch",
            color: "var(--white)",
            borderLeft: "3px solid var(--pink-400)",
            paddingLeft: 28,
          }}
        >
          {t(site.localTheme)}
        </blockquote>

        <div className="prose lead" style={{ marginTop: 48 }}>
          <p>
            {t({
              th: "ตั้งแต่ก่อตั้ง SEA Quantum Network ในปี 2024 ทีมของเราได้ขับเคลื่อนกิจกรรมระดับภูมิภาคมาต่อเนื่อง ทั้ง SEA Quantathon 2025 ที่เจาะลึกเชิงเทคนิค การประชุม QTRi 2025 ที่เชื่อมภาครัฐ ภาคเอกชน และภาควิชาการเข้าด้วยกัน และล่าสุด SEA Quantum Leaders Summit 2026",
              en: "Since founding the SEA Quantum Network in 2024, our team has led a series of regional initiatives: the technical deep dives of SEA Quantathon 2025, the Triple Helix engagement between government, industry, and academia at the QTRi 2025 Conference, and most recently the SEA Quantum Leaders Summit 2026.",
            })}
          </p>
          <p>
            {t({
              th: "งานเหล่านั้นสำเร็จดี แต่ก็ทำให้เราเห็นช่องว่างที่ชัดขึ้นเรื่อย ๆ องค์ความรู้ระดับสูงยังกระจุกอยู่กับนักวิจัยและผู้เชี่ยวชาญกลุ่มเล็ก ๆ ยังไม่ได้แปลงลงมาเป็นฐานความรู้ที่หยั่งรากในสังคมไทยจริง ๆ",
              en: "Those milestones also made a gap increasingly clear. Advanced expertise remained concentrated among a small group of researchers and specialists; it had not yet been translated into a knowledge base rooted in Thai society itself.",
            })}
          </p>
          <p>
            {t({
              th: "Qiskit Fall Fest 2026: ประเทศไทย จึงเป็นการหันหัวเรือกลับมาที่ฐานราก เราอยากสร้างพื้นที่เริ่มต้นที่ทุกคนเข้าถึงได้ ตั้งแต่นักเรียนมัธยม นักศึกษา นักวิจัย ไปจนถึงคนทำงานและประชาชนทั่วไปที่สนใจ เพื่อให้ความรู้ควอนตัมที่เคยอยู่แต่ในเวทีนานาชาติ ลงมาอยู่ในมือของคนไทยได้จริง",
              en: "Qiskit Fall Fest 2026: Thailand turns towards that foundation. We want to create an accessible starting point for everyone — high school students, university students, researchers, professionals, and members of the public — so that quantum knowledge previously confined to international stages reaches Thai hands directly.",
            })}
          </p>
        </div>
      </Section>

      {/* ---------- Track record ---------- */}
      <Section variant="mist">
        <p className="eyebrow">{t({ th: "ผลงานที่ผ่านมา", en: "Track record" })}</p>
        <h2>{t({ th: "ทีมนี้เคยจัดอะไรมาแล้วบ้าง", en: "What this team has run before" })}</h2>

        <div className="table-wrap" style={{ marginTop: 32 }}>
          <table className="t">
            <tbody>
              {trackRecord.map((r) => (
                <tr key={r.year + t(r.name)}>
                  <td className="mono muted" style={{ width: 90 }}>
                    {r.year}
                  </td>
                  <td>
                    {r.url ? (
                      <a href={r.url} target="_blank" rel="noreferrer noopener">
                        {t(r.name)}
                      </a>
                    ) : (
                      t(r.name)
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ---------- Who can join ---------- */}
      <Section id="who">
        <p className="eyebrow">{t({ th: "ใครเข้าร่วมได้", en: "Who can join" })}</p>
        <h2>{t({ th: "ทุกคน และเราหมายความอย่างนั้นจริง ๆ", en: "Everyone — and we mean it" })}</h2>

        <div className="table-wrap" style={{ marginTop: 32 }}>
          <table className="t">
            <thead>
              <tr>
                <th>{t({ th: "กลุ่ม", en: "Who" })}</th>
                <th>{t({ th: "สิ่งที่ควรมี", en: "What helps" })}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t({ th: "นักเรียนมัธยมปลาย", en: "High school students" })}</td>
                <td className="muted">
                  {t({
                    th: "ความอยากรู้ และคณิตศาสตร์ระดับมัธยมปลาย",
                    en: "Curiosity and high school mathematics",
                  })}
                </td>
              </tr>
              <tr>
                <td>{t({ th: "นักศึกษาทุกชั้นปี ทุกคณะ", en: "University students, any year or faculty" })}</td>
                <td className="muted">
                  {t({
                    th: "ไม่ต้องมีพื้นฐานควอนตัม ถ้าเขียนโปรแกรมได้บ้างจะสนุกขึ้น",
                    en: "No quantum background needed; some programming makes it more fun",
                  })}
                </td>
              </tr>
              <tr>
                <td>{t({ th: "อาจารย์และนักวิจัย", en: "Faculty and researchers" })}</td>
                <td className="muted">
                  {t({
                    th: "ยินดีต้อนรับ และมีเซสชันเชิงลึกรออยู่ในงานต่อเนื่อง",
                    en: "Very welcome, with deeper sessions planned in our follow-on events",
                  })}
                </td>
              </tr>
              <tr>
                <td>{t({ th: "คนทำงานสายเทคและผู้สนใจทั่วไป", en: "Professionals and the generally curious" })}</td>
                <td className="muted">
                  {t({ th: "เปิดรับเต็มที่ ไม่มีเงื่อนไข", en: "Fully open, no conditions" })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: 32 }}>
          <Notice tone="warn" icon="i-alert">
            <p>
              <strong>{t({ th: "สิ่งที่ต้องเตรียมมา: ", en: "What to bring: " })}</strong>
              {t({
                th: "โน้ตบุ๊กของตัวเอง ทุกคนต้องนำมาเอง ไม่มีข้อยกเว้น พร้อมบัญชี qBraid ที่สมัครไว้ล่วงหน้าและทำการบ้านก่อนงานมาแล้ว",
                en: "Your own laptop — everyone, without exception — plus a qBraid account created beforehand and the pre-work completed.",
              })}
            </p>
          </Notice>
        </div>
      </Section>

      {/* ---------- What IBM provides ---------- */}
      <Section variant="lilac">
        <p className="eyebrow">{t({ th: "ความโปร่งใส", en: "Being straight with you" })}</p>
        <h2>{t({ th: "IBM สนับสนุนอะไร และไม่สนับสนุนอะไร", en: "What IBM provides — and what it does not" })}</h2>

        <div className="grid grid--2" style={{ marginTop: 40 }}>
          <div className="card">
            <span className="card__icon">
              <Icon name="i-check" size={22} />
            </span>
            <h3>{t({ th: "สิ่งที่ IBM สนับสนุน", en: "What IBM provides" })}</h3>
            <ul style={{ marginTop: 16, color: "var(--slate-500)", fontSize: 16 }}>
              {ibmProvides.give.map((g, i) => (
                <li key={i}>{t(g)}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <span className="card__icon" style={{ background: "#fdf0f6", color: "#c8431f" }}>
              <Icon name="i-alert" size={22} />
            </span>
            <h3>{t({ th: "สิ่งที่ IBM ไม่ได้ให้", en: "What IBM does not provide" })}</h3>
            <ul style={{ marginTop: 16, color: "var(--slate-500)", fontSize: 16 }}>
              {ibmProvides.notGive.map((g, i) => (
                <li key={i}>{t(g)}</li>
              ))}
            </ul>
            <p style={{ marginTop: 16, fontSize: 15 }}>
              {t({
                th: "เราเขียนข้อนี้ไว้ชัด ๆ เพราะไม่อยากให้ใครมาถึงงานแล้วผิดหวัง โค้ดที่คุณเขียนคือ Qiskit ตัวจริง และยิงไปเครื่องจริงได้ทันทีเมื่อคุณมีสิทธิ์เข้าถึง",
                en: "We spell this out because nobody should arrive expecting otherwise. The code you write is real Qiskit and will run on actual hardware the moment you have access.",
              })}
            </p>
          </div>
        </div>

        <div className="btn-row" style={{ marginTop: 40 }}>
          <Link className="btn btn--primary" href="/register">
            {t({ th: "ลงทะเบียนเข้าร่วม", en: "Register to attend" })}
            <Icon name="i-arrow" size={18} />
          </Link>
          <Link className="btn btn--secondary" href="/programme">
            {t({ th: "ดูกำหนดการ", en: "See the programme" })}
          </Link>
        </div>
      </Section>
    </>
  );
}
