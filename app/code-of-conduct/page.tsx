"use client";

import { useLang } from "@/lib/i18n";
import { site } from "@/data/site";
import { Notice, PageHead, Section } from "@/components/ui";

export default function CodeOfConduct() {
  const { t } = useLang();

  return (
    <>
      <PageHead
        eyebrow={{ th: "ข้อปฏิบัติในงาน", en: "Code of Conduct" }}
        title={{ th: "ข้อปฏิบัติในงาน", en: "Code of Conduct" }}
        lead={{
          th: "เราอยากให้ทุกคนที่เดินเข้ามารู้สึกว่าที่นี่เป็นที่ของเขา ไม่ว่าจะมาจากไหน เรียนอะไรมา หรือรู้เรื่องควอนตัมมากน้อยแค่ไหน",
          en: "We want everyone who walks in to feel this is a place for them — whatever their background, field, or level of quantum knowledge.",
        }}
      />

      <Section>
        <div className="prose stack">
          <div>
            <h2>{t({ th: "สิ่งที่เราคาดหวังจากทุกคน", en: "What we expect from everyone" })}</h2>
            <ul style={{ marginTop: 16 }}>
              <li>
                {t({
                  th: "ปฏิบัติต่อผู้อื่นด้วยความเคารพ ทั้งผู้เข้าร่วม วิทยากร ทีมงาน และเจ้าหน้าที่สถานที่",
                  en: "Treat everyone with respect — participants, speakers, organisers, and venue staff alike.",
                })}
              </li>
              <li>
                {t({
                  th: "ไม่มีคำถามไหนโง่เกินไป งานนี้ตั้งใจจัดให้คนที่เริ่มจากศูนย์ การหัวเราะเยาะคำถามของคนอื่นเป็นสิ่งที่รับไม่ได้",
                  en: "No question is too basic. This event exists for people starting from zero; mocking someone's question is not acceptable here.",
                })}
              </li>
              <li>
                {t({
                  th: "ช่วยเหลือกัน ถ้าคุณทำเสร็จก่อนและเห็นคนข้าง ๆ ติด ลองช่วยดู นั่นคือบรรยากาศที่เราอยากได้",
                  en: "Help each other. If you finish early and the person beside you is stuck, offer a hand. That is the room we want.",
                })}
              </li>
              <li>
                {t({
                  th: "เคารพความเป็นส่วนตัว ขออนุญาตก่อนถ่ายรูปหรือบันทึกเสียงผู้อื่น",
                  en: "Respect privacy. Ask before photographing or recording anyone.",
                })}
              </li>
            </ul>
          </div>

          <div>
            <h2>{t({ th: "สิ่งที่เรายอมรับไม่ได้", en: "What is not acceptable" })}</h2>
            <ul style={{ marginTop: 16 }}>
              <li>
                {t({
                  th: "การคุกคาม ข่มขู่ หรือเลือกปฏิบัติ ไม่ว่าด้วยเหตุผลทางเพศ อัตลักษณ์ทางเพศ เชื้อชาติ ศาสนา สัญชาติ อายุ ความพิการ หรือสถาบันที่สังกัด",
                  en: "Harassment, intimidation, or discrimination on any grounds — sex, gender identity, ethnicity, religion, nationality, age, disability, or institution.",
                })}
              </li>
              <li>
                {t({
                  th: "การใช้ถ้อยคำหรือภาพที่มีลักษณะทางเพศในพื้นที่ของงาน",
                  en: "Sexual language or imagery in event spaces.",
                })}
              </li>
              <li>
                {t({
                  th: "การรบกวนการบรรยายหรือกิจกรรมอื่น ๆ อย่างต่อเนื่อง",
                  en: "Sustained disruption of talks or other activities.",
                })}
              </li>
              <li>
                {t({
                  th: "การเผยแพร่ข้อมูลส่วนตัวของผู้อื่นโดยไม่ได้รับอนุญาต",
                  en: "Publishing anyone's private information without permission.",
                })}
              </li>
            </ul>
          </div>

          <div>
            <h2>{t({ th: "หากพบเหตุ", en: "If something happens" })}</h2>
            <p>
              {t({
                th: "แจ้งทีมงานได้ทันทีหน้างาน มองหาคนที่ใส่ป้ายชื่อของทีมจัดงาน หรือส่งอีเมลมาที่ที่อยู่ด้านล่าง เราจะรับฟังอย่างจริงจังและรักษาความลับของผู้แจ้ง",
                en: "Tell an organiser at the venue — look for anyone wearing an organiser badge — or email the address below. We take reports seriously and keep them confidential.",
              })}
            </p>
            <p className="mono" style={{ marginTop: 12 }}>
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </p>
          </div>

          <div>
            <h2>{t({ th: "ผลของการละเมิด", en: "Consequences" })}</h2>
            <p>
              {t({
                th: "ทีมงานอาจดำเนินการตามที่เห็นสมควร ตั้งแต่การตักเตือน ไปจนถึงการเชิญออกจากงานโดยไม่คืนสิทธิ์ใด ๆ ในกรณีร้ายแรง เราจะประสานกับทางมหาวิทยาลัยและเจ้าหน้าที่ที่เกี่ยวข้อง",
                en: "Organisers may take whatever action they judge appropriate, from a warning to removal from the event without recourse. In serious cases we will involve the university and relevant authorities.",
              })}
            </p>
          </div>
        </div>

        <div style={{ marginTop: 48, maxWidth: 900 }}>
          <Notice tone="warn" icon="i-alert">
            <p style={{ margin: 0 }}>
              {t({
                th: "ฉบับนี้เป็นร่างที่เขียนขึ้นตามแนวทางทั่วไปของงาน Qiskit และ IBM Quantum ก่อนเผยแพร่จริง กรุณาตรวจสอบกับแนวทางที่ IBM ส่งให้ทีมโฮสต์ และกับฝ่ายกฎหมายหรือฝ่ายกิจการนักศึกษาของมหาวิทยาลัย",
                en: "This is a draft written along the general lines of Qiskit and IBM Quantum events. Before publishing, please check it against the guidance IBM provides to hosts, and with your university's legal or student affairs office.",
              })}
            </p>
          </Notice>
        </div>
      </Section>
    </>
  );
}
