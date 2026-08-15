import type { L } from "@/lib/i18n";

export type Person = {
  name: L;
  role: L;
  org: L;
  topic?: L;
  photo?: string;
  link?: string;
  confirmed: boolean;
};

/* ------------------------------------------------------------
   วิทยากร — รูปยังไม่มี ใช้ placeholder ไปก่อน
   เมื่อได้รูปจริง วางไฟล์ที่ public/assets/photos/ แล้วใส่ path ที่ photo
   ------------------------------------------------------------ */

export const speakers: Person[] = [
  {
    name: { th: "รศ. ดร. วรวัฒน์ มีวาสนา", en: "Assoc. Prof. Dr. Worawat Meevasana" },
    role: { th: "หัวหน้าผู้จัดงาน", en: "Lead organiser" },
    org: { th: "มหาวิทยาลัยเทคโนโลยีสุรนารี", en: "Suranaree University of Technology" },
    topic: {
      th: "ควอนตัมใช้ทำอะไรได้ และเส้นทางอาชีพสายควอนตัม",
      en: "Quantum use cases and career paths",
    },
    link: "https://www.linkedin.com/in/worawat-meevasana-7423a94b/",
    confirmed: true,
  },
  {
    name: { th: "รอประกาศ", en: "To be announced" },
    role: { th: "ผู้สอน", en: "Instructor" },
    org: { th: "รอยืนยัน", en: "To be confirmed" },
    topic: {
      th: "Intro to Qiskit บน qBraid — ทฤษฎี (ก)",
      en: "Intro to Qiskit on qBraid — theory (a)",
    },
    confirmed: false,
  },
  {
    name: { th: "รอประกาศ", en: "To be announced" },
    role: { th: "ผู้สอน", en: "Instructor" },
    org: { th: "รอยืนยัน", en: "To be confirmed" },
    topic: {
      th: "Intro to Qiskit บน qBraid — ทฤษฎี (ข)",
      en: "Intro to Qiskit on qBraid — theory (b)",
    },
    confirmed: false,
  },
  {
    name: { th: "รอประกาศ", en: "To be announced" },
    role: { th: "ผู้สอนภาคปฏิบัติ", en: "Hands-on instructor" },
    org: { th: "รอยืนยัน", en: "To be confirmed" },
    topic: { th: "ลงมือทำ ภาค 1 และ 2", en: "Hands-on parts 1 and 2" },
    confirmed: false,
  },
  {
    name: { th: "ดร. Choong Pak Shen", en: "Dr. Choong Pak Shen" },
    role: { th: "ที่ปรึกษาระดับภูมิภาค", en: "Regional advisor" },
    org: { th: "Monash University Malaysia", en: "Monash University Malaysia" },
    topic: { th: "รอยืนยันหัวข้อ", en: "Topic to be confirmed" },
    confirmed: false,
  },
  {
    name: { th: "รอประกาศ", en: "To be announced" },
    role: { th: "วิทยากรรับเชิญ", en: "Invited speaker" },
    org: { th: "รอยืนยัน", en: "To be confirmed" },
    topic: { th: "รอยืนยันหัวข้อ", en: "Topic to be confirmed" },
    confirmed: false,
  },
];

/* ------------------------------------------------------------
   คณะกรรมการจัดงาน
   ------------------------------------------------------------ */

export type CommitteeGroup = { title: L; note?: L; people: Person[] };

export const committee: CommitteeGroup[] = [
  {
    title: { th: "เจ้าภาพและทีมหลัก", en: "Host and core team" },
    note: { th: "มหาวิทยาลัยเทคโนโลยีสุรนารี", en: "Suranaree University of Technology" },
    people: [
      {
        name: { th: "รศ. ดร. วรวัฒน์ มีวาสนา", en: "Assoc. Prof. Dr. Worawat Meevasana" },
        role: { th: "หัวหน้าผู้จัดงาน", en: "Lead organiser and main host" },
        org: { th: "มทส. · QTRiC", en: "SUT · QTRiC" },
        link: "https://www.linkedin.com/in/worawat-meevasana-7423a94b/",
        confirmed: true,
      },
      {
        name: { th: "นิติกร ชุมนันกุล", en: "Nitikorn Chumnankul" },
        role: { th: "ดูแลโปรแกรมและงานประสานงาน", en: "Programme and logistics" },
        org: { th: "มทส. · QTRiC", en: "SUT · QTRiC" },
        confirmed: true,
      },
      {
        name: { th: "ชัชวาล ใจสุข", en: "Chutchawan Jaisuk" },
        role: { th: "ดูแลโปรแกรมและงานประสานงาน", en: "Programme and logistics" },
        org: { th: "มทส. · QTRiC", en: "SUT · QTRiC" },
        confirmed: true,
      },
    ],
  },
  {
    title: { th: "ที่ปรึกษาระดับภูมิภาค", en: "Regional advisors" },
    note: { th: "Monash University Malaysia", en: "Monash University Malaysia" },
    people: [
      {
        name: { th: "ดร. Choong Pak Shen", en: "Dr. Choong Pak Shen" },
        role: { th: "ที่ปรึกษาระดับภูมิภาค", en: "Regional advisor" },
        org: { th: "Monash University Malaysia", en: "Monash University Malaysia" },
        confirmed: true,
      },
      {
        name: { th: "Tan Chun Loong", en: "Tan Chun Loong" },
        role: { th: "ที่ปรึกษาระดับภูมิภาค", en: "Regional advisor" },
        org: { th: "Monash University Malaysia", en: "Monash University Malaysia" },
        confirmed: true,
      },
    ],
  },
  {
    title: { th: "พันธมิตรด้านแพลตฟอร์มและอุตสาหกรรม", en: "Platform and industry" },
    people: [
      {
        name: { th: "Ricky Young", en: "Ricky Young" },
        role: { th: "ผู้ประสานงานแพลตฟอร์ม", en: "Platform liaison" },
        org: { th: "qBraid", en: "qBraid" },
        confirmed: true,
      },
      {
        name: { th: "ณัฐพล ก.", en: "Natthaphol K." },
        role: { th: "ผู้ประสานงาน", en: "Coordination" },
        org: { th: "IBM ประเทศไทย", en: "IBM Thailand" },
        confirmed: true,
      },
      {
        name: { th: "Julian Tan", en: "Julian Tan" },
        role: { th: "ผู้มีส่วนได้ส่วนเสียระดับภูมิภาค", en: "Regional stakeholder" },
        org: { th: "IBM สิงคโปร์", en: "IBM Singapore" },
        confirmed: false,
      },
      {
        name: { th: "Ruchi Pendse", en: "Ruchi Pendse" },
        role: { th: "ผู้มีส่วนได้ส่วนเสียระดับภูมิภาค", en: "Regional stakeholder" },
        org: { th: "IBM ชิคาโก", en: "IBM Chicago" },
        confirmed: false,
      },
    ],
  },
  {
    title: { th: "เครือข่ายมหาวิทยาลัยร่วม", en: "Participating university network" },
    note: {
      th: "อยู่ระหว่างยืนยันการเข้าร่วมอย่างเป็นทางการ",
      en: "Formal participation currently being confirmed",
    },
    people: [
      {
        name: { th: "ผศ. ดร. สุกฤต สุจริตกุล", en: "Asst. Prof. Dr. Sukrit Sucharitakul" },
        role: { th: "ผู้ประสานงานมหาวิทยาลัย", en: "University coordinator" },
        org: { th: "มหาวิทยาลัยเชียงใหม่", en: "Chiang Mai University" },
        confirmed: false,
      },
      {
        name: { th: "รศ. ดร. อนุชา วัชระภาสร", en: "Assoc. Prof. Dr. Anucha Watcharapasorn" },
        role: { th: "ผู้ประสานงานมหาวิทยาลัย", en: "University coordinator" },
        org: { th: "มหาวิทยาลัยเชียงใหม่", en: "Chiang Mai University" },
        confirmed: false,
      },
      {
        name: { th: "ผศ. ดร. ปรือ กลัสุวรรณ", en: "Asst. Prof. Dr. Pruet Kalasuwan" },
        role: { th: "ผู้ประสานงานมหาวิทยาลัย", en: "University coordinator" },
        org: { th: "มหาวิทยาลัยสงขลานครินทร์", en: "Prince of Songkla University" },
        confirmed: false,
      },
      {
        name: { th: "รศ. ดร. อารียา จันทร์ศรี", en: "Assoc. Prof. Dr. Areeya Chantasri" },
        role: { th: "ผู้ประสานงานมหาวิทยาลัย", en: "University coordinator" },
        org: { th: "มหาวิทยาลัยมหิดล", en: "Mahidol University" },
        confirmed: false,
      },
      {
        name: { th: "ผศ. ดร. ศลินพร กิตติวัฒนกุล", en: "Asst. Prof. Dr. Salinporn Kittiwatanakul" },
        role: { th: "ผู้ประสานงานมหาวิทยาลัย", en: "University coordinator" },
        org: { th: "จุฬาลงกรณ์มหาวิทยาลัย", en: "Chulalongkorn University" },
        confirmed: false,
      },
    ],
  },
];
