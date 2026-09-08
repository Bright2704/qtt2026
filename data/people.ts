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
  // === Session 1: Online Lectures ===
  {
    name: { th: "รศ. ดร. วรวัฒน์ มีวาสนา", en: "Assoc. Prof. Dr. Worawat Meevasana" },
    role: { th: "ที่ปรึกษาและหัวหน้าโครงการ", en: "Advisor & Project Lead" },
    org: { th: "มหาวิทยาลัยเทคโนโลยีสุรนารี", en: "Suranaree University of Technology" },
    topic: {
      th: "ควอนตัมใช้ทำอะไรได้ และเส้นทางอาชีพสายควอนตัม",
      en: "Quantum use cases and career paths",
    },
    photo: "/assets/photos/worawat-meevasana.jpg",
    link: "https://www.linkedin.com/in/worawat-meevasana-7423a94b/",
    confirmed: true,
  },
  {
    name: { th: "ดร. Choong Pak Shen", en: "Dr. Choong Pak Shen" },
    role: { th: "Session 1 Online Lecture Speaker", en: "Session 1 Online Lecture Speaker" },
    org: { th: "Monash University Malaysia", en: "Monash University Malaysia" },
    topic: { th: "Qiskit Theory & Fundamentals", en: "Qiskit Theory & Fundamentals" },
    photo: "/assets/photos/choong-pak-shen.jpg",
    confirmed: true,
  },
  {
    name: { th: "Tan Chun Loong", en: "Tan Chun Loong" },
    role: { th: "ที่ปรึกษาระดับภูมิภาค", en: "Regional Quantum Partner" },
    org: { th: "Monash University Malaysia", en: "Monash University Malaysia" },
    topic: { th: "Qiskit Theory Support", en: "Qiskit Theory Support" },
    photo: "/assets/photos/Tan Chun.jpg",
    confirmed: true,
  },
  {
    name: { th: "Ricky Young", en: "Ricky Young" },
    role: { th: "Session 1 Lead Speaker & Platform Partner", en: "Session 1 Lead Speaker & Platform Partner" },
    org: { th: "qBraid", en: "qBraid" },
    topic: { th: "qBraid Platform & Optimization", en: "qBraid Platform & Optimization" },
    photo: "/assets/photos/Ricky.jpg",
    confirmed: true,
  },
  {
    name: { th: "อ.นิค", en: "Aj. Nick" },
    role: { th: "ผู้สอน", en: "Instructor" },
    org: { th: "รอยืนยัน", en: "To be confirmed" },
    topic: { th: "Qiskit Theory & Fundamentals", en: "Qiskit Theory & Fundamentals" },
    confirmed: false,
  },
  // === Session 2: Workshop Track Leads ===
  {
    name: { th: "อ.นนท์ (ดร.นนท์)", en: "Aj. Non (Dr. Non)" },
    role: { th: "Track Lead - Energy", en: "Track Lead - Energy" },
    org: { th: "QTRiC", en: "QTRiC" },
    topic: { th: "Energy & Smart Grid Optimization", en: "Energy & Smart Grid Optimization" },
    photo: "/assets/photos/aj non.jpg",
    confirmed: true,
  },
  {
    name: { th: "อ.มนัสวี", en: "Aj. Manasvi" },
    role: { th: "Track Lead - PQC", en: "Track Lead - PQC" },
    org: { th: "รอยืนยัน", en: "To be confirmed" },
    topic: { th: "Post-Quantum Cryptography & Security", en: "Post-Quantum Cryptography & Security" },
    photo: "/assets/photos/speaker-6.svg",
    confirmed: false,
  },
  // === Session 3: Networking Circle Leads ===
  {
    name: { th: "พี่จู๊ด (P'Jude)", en: "P'Jude" },
    role: { th: "Circle 1 Lead - Senior Mentorship", en: "Circle 1 Lead - Senior Mentorship" },
    org: { th: "QTRiC", en: "QTRiC" },
    topic: { th: "Deep-tech career growth, startup scaling", en: "Deep-tech career growth, startup scaling" },
    photo: "/assets/photos/speaker-1.svg",
    confirmed: true,
  },
  {
    name: { th: "อ.แจน", en: "Aj. Jan" },
    role: { th: "Circle 2 Lead - Academic & Faculty", en: "Circle 2 Lead - Academic & Faculty" },
    org: { th: "รอยืนยัน", en: "To be confirmed" },
    topic: { th: "Joint research, curriculum design, research grants", en: "Joint research, curriculum design, research grants" },
    confirmed: false,
  },
  // === Use Case Speakers (TBC) ===
  {
    name: { th: "อ.ทิว", en: "Aj. Tiew" },
    role: { th: "วิทยากรรับเชิญ", en: "วิทยากรรับเชิญ" },
    org: { th: "Co-Founder & CEO, Quantum Technology Foundation (Thailand) [QTFT]", en: "Co-Founder & CEO, Quantum Technology Foundation (Thailand) [QTFT]" },
    topic: { th: "Quantum Use Cases", en: "Quantum Use Cases" },
    photo: "/assets/photos/aj til.jpg",
    confirmed: true,
  },
  {
    name: { th: "อ.ชาญวิทย์", en: "Aj. Chanwit" },
    role: { th: "วิทยากรรับเชิญ", en: "Invited speaker" },
    org: { th: "รอยืนยัน", en: "To be confirmed" },
    topic: { th: "Quantum AI", en: "Quantum AI" },
    photo: "/assets/photos/aieat_chanwit.jpg",
    confirmed: true,
  },
  {
    name: { th: "อ.พีช", en: "Aj. Peach" },
    role: { th: "วิทยากรรับเชิญ", en: "Invited speaker" },
    org: { th: "รอยืนยัน", en: "To be confirmed" },
    topic: { th: "Quantum Hardware", en: "Quantum Hardware" },
    photo: "/assets/photos/อ. พีช.jpg",
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
        role: { th: "ที่ปรึกษาและหัวหน้า SUT Node", en: "Advisor & SUT Node Lead" },
        org: { th: "มทส. · QTRiC", en: "SUT · QTRiC" },
        link: "https://www.linkedin.com/in/worawat-meevasana-7423a94b/",
        confirmed: true,
      },
      {
        name: { th: "นิติกร ชุมนันกุล (Pat)", en: "Nitikorn Chumnankul (Pat)" },
        role: { th: "Project Lead & Coordinator", en: "Project Lead & Coordinator" },
        org: { th: "มทส. · QTRiC", en: "SUT · QTRiC" },
        confirmed: true,
      },
      {
        name: { th: "ชัชวาล ใจสุข", en: "Chutchawan Jaisuk" },
        role: { th: "Co-organizer & Technical Support", en: "Co-organizer & Technical Support" },
        org: { th: "มทส. · QTRiC", en: "SUT · QTRiC" },
        confirmed: true,
      },
    ],
  },
  {
    title: { th: "ทีมดำเนินงานหลัก", en: "Core Operations Team" },
    note: { th: "ได้รับการจัดสรรงบประมาณสนับสนุน", en: "Budget-allocated team members" },
    people: [
      {
        name: { th: "P. Peer", en: "P. Peer" },
        role: { th: "Lead Coordinator", en: "Lead Coordinator" },
        org: { th: "QTRiC", en: "QTRiC" },
        confirmed: true,
      },
      {
        name: { th: "N. Han", en: "N. Han" },
        role: { th: "Core Team", en: "Core Team" },
        org: { th: "QTRiC", en: "QTRiC" },
        confirmed: true,
      },
      {
        name: { th: "N. Fiya", en: "N. Fiya" },
        role: { th: "Core Team / QML", en: "Core Team / QML" },
        org: { th: "QTRiC", en: "QTRiC" },
        confirmed: true,
      },
      {
        name: { th: "N. Subun", en: "N. Subun" },
        role: { th: "Core Team", en: "Core Team" },
        org: { th: "QTRiC", en: "QTRiC" },
        confirmed: true,
      },
      {
        name: { th: "Macky", en: "Macky" },
        role: { th: "Technical Lead", en: "Technical Lead" },
        org: { th: "QTRiC", en: "QTRiC" },
        confirmed: true,
      },
      {
        name: { th: "หลิว", en: "Liu" },
        role: { th: "Core Team / Backend", en: "Core Team / Backend" },
        org: { th: "SQV", en: "SQV" },
        confirmed: true,
      },
      {
        name: { th: "มีเบียร์", en: "Beer" },
        role: { th: "TA & Platform Support", en: "TA & Platform Support" },
        org: { th: "QTRiC", en: "QTRiC" },
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
      // {
      //   name: { th: "ณัฐพล ก.", en: "Natthaphol K." },
      //   role: { th: "ผู้ประสานงาน", en: "Coordination" },
      //   org: { th: "IBM ประเทศไทย", en: "IBM Thailand" },
      //   confirmed: true,
      // },
      // {
      //   name: { th: "Julian Tan", en: "Julian Tan" },
      //   role: { th: "ผู้มีส่วนได้ส่วนเสียระดับภูมิภาค", en: "Regional stakeholder" },
      //   org: { th: "IBM สิงคโปร์", en: "IBM Singapore" },
      //   confirmed: false,
      // },
      // {
      //   name: { th: "Ruchi Pendse", en: "Ruchi Pendse" },
      //   role: { th: "ผู้มีส่วนได้ส่วนเสียระดับภูมิภาค", en: "Regional stakeholder" },
      //   org: { th: "IBM ชิคาโก", en: "IBM Chicago" },
      //   confirmed: false,
      // },
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
      // {
      //   name: { th: "รศ. ดร. อารียา จันทร์ศรี", en: "Assoc. Prof. Dr. Areeya Chantasri" },
      //   role: { th: "ผู้ประสานงานมหาวิทยาลัย", en: "University coordinator" },
      //   org: { th: "มหาวิทยาลัยมหิดล", en: "Mahidol University" },
      //   confirmed: false,
      // },
      // {
      //   name: { th: "ผศ. ดร. ศลินพร กิตติวัฒนกุล", en: "Asst. Prof. Dr. Salinporn Kittiwatanakul" },
      //   role: { th: "ผู้ประสานงานมหาวิทยาลัย", en: "University coordinator" },
      //   org: { th: "จุฬาลงกรณ์มหาวิทยาลัย", en: "Chulalongkorn University" },
      //   confirmed: false,
      // },
    ],
  },
];
