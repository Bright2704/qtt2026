import type { L } from "@/lib/i18n";
import { asset } from "@/lib/asset";

export type Person = {
  name: L;
  role: L;
  org: L;
  topic?: L;
  photo?: string;
  photoPosition?: string;
  photoScale?: number;
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
    photo: asset("/assets/photos/white-speakers/worawat.webp"),
    link: "https://www.linkedin.com/in/worawat-meevasana-7423a94b/",
    confirmed: true,
  },
  {
    name: { th: "ดร. Choong Pak Shen", en: "Dr. Choong Pak Shen" },
    role: { th: "Session 1 Online Lecture Speaker", en: "Session 1 Online Lecture Speaker" },
    org: { th: "Founder @ Quantum Wings", en: "Founder @ Quantum Wings" },
    topic: { th: "Qiskit Theory & Fundamentals", en: "Qiskit Theory & Fundamentals" },
    photo: asset("/assets/photos/choong-pak-shen.jpg"),
    confirmed: true,
  },
  {
    name: { th: "Tan Chun Loong", en: "Tan Chun Loong" },
    role: { th: "ที่ปรึกษาระดับภูมิภาค", en: "Regional Quantum Partner" },
    org: { th: "Monash University Malaysia", en: "Monash University Malaysia" },
    topic: { th: "Qiskit Theory Support", en: "Qiskit Theory Support" },
    photo: asset("/assets/photos/white-speakers/tan-chun-loong-sharp.png"),
    photoPosition: "center 12%",
    photoScale: 1.9,
    confirmed: true,
  },
  {
    name: { th: "Ricky Young", en: "Ricky Young" },
    role: { th: "Session 1 Lead Speaker & Platform Partner", en: "Session 1 Lead Speaker & Platform Partner" },
    org: { th: "qBraid", en: "qBraid" },
    topic: { th: "qBraid Platform & Optimization", en: "qBraid Platform & Optimization" },
    photo: asset("/assets/photos/white-speakers/ricky.webp"),
    confirmed: true,
  },
//   {
//     name: { th: "ผศ. ดร. สุกฤต สุจริตกุล", en: "Asst. Prof. Dr. Sukrit Sucharitakul" },
//     role: { th: "ผู้สอน", en: "Instructor" },
//     org: { th: "รอยืนยัน", en: "To be confirmed" },
//     topic: { th: "Qiskit Theory & Fundamentals", en: "Qiskit Theory & Fundamentals" },
//     photo: asset("/assets/photos/AJ nick.png"),
//     confirmed: false,
//   },
  // === Session 2: Workshop Track Leads ===
  //{
    //name: { th: "อ.นนท์ (ดร.นนท์)", en: "Aj. Non (Dr. Non)" },
    //role: { th: "Track Lead - Energy", en: "Track Lead - Energy" },
    //org: { th: "QTRiC", en: "QTRiC" },
    //topic: { th: "Energy & Smart Grid Optimization", en: "Energy & Smart Grid Optimization" },
    //photo: "/assets/photos/aj non.jpg",
    //confirmed: true,
  //},
//   {
//     name: { th: "อ.มนัสวี", en: "Aj. Manasvi" },
//     role: { th: "Track Lead - PQC", en: "Track Lead - PQC" },
//     org: { th: "รอยืนยัน", en: "To be confirmed" },
//     topic: { th: "Post-Quantum Cryptography & Security", en: "Post-Quantum Cryptography & Security" },
//     photo: asset("/assets/photos/speaker-6.svg"),
//     confirmed: false,
//   },
  // === Session 3: Networking Circle Leads ===
//   {
//     name: { th: "คุณจิราวุธ (จู๊ด) กนกอาชา", en: "Mr. Chirawut Kanogart" },
//     role: { th: "Circle 1 Lead - Senior Mentorship", en: "Circle 1 Lead - Senior Mentorship" },
//     org: { th: "QTRiC", en: "QTRiC" },
//     topic: { th: "Deep-tech career growth, startup scaling", en: "Deep-tech career growth, startup scaling" },
//     photo: asset("/assets/photos/speaker-1.svg"),
//     confirmed: true,
//   },
//   {
//     name: { th: "อ.แจน", en: "Aj. Jan" },
//     role: { th: "Circle 2 Lead - Academic & Faculty", en: "Circle 2 Lead - Academic & Faculty" },
//     org: { th: "รอยืนยัน", en: "To be confirmed" },
//     topic: { th: "Joint research, curriculum design, research grants", en: "Joint research, curriculum design, research grants" },
//     confirmed: false,
//   },
  // === Use Case Speakers (TBC) ===
  {
    name: { th: "ดร. จิรวัฒน์ ตั้งปณิธานนท์", en: "Dr. Jirawat Tangpanitanon" },
    role: { th: "วิทยากรรับเชิญ", en: "Invited speaker" },
    org: { th: "Co-Founder & CEO, Quantum Technology Foundation (Thailand) [QTFT]", en: "Co-Founder & CEO, Quantum Technology Foundation (Thailand) [QTFT]" },
    topic: { th: "Quantum Use Cases", en: "Quantum Use Cases" },
    photo: asset("/assets/photos/aj til.jpg"),
    confirmed: true,
  },
  {
    name: { th: "ผศ. ดร. ชาญวิทย์ แก้วกสิ", en: "Asst. Prof. Dr. Chanwit Kaewkasi" },
    role: { th: "วิทยากรรับเชิญ", en: "Invited speaker" },
    org: { th: "Chief Technology Officer Centillex", en: "Chief Technology Officer Centillex" },
    topic: { th: "Quantum AI", en: "Quantum AI" },
    photo: asset("/assets/photos/white-speakers/chanwit.webp"),
    confirmed: true,
  },
  {
    name: { th: "ผศ. ดร. สรวิศ แสงทวีสิน", en: "Asst. Prof. Dr. Sorawis Sangtawesin" },
    role: { th: "วิทยากรรับเชิญ", en: "Invited speaker" },
    org: { th: "School of Physics, Institute of Science, Suranaree University of Technology ", en: "School of Physics, Institute of Science, Suranaree University of Technology " },
    topic: { th: "Quantum Hardware", en: "Quantum Hardware" },
    photo: asset("/assets/photos/white-speakers/sorawis.webp"),
    confirmed: true,
  },
  // รูปชั่วคราวใช้ avatar ของ PersonCard; เพิ่ม photo: asset("/assets/photos/ชื่อไฟล์") เมื่อได้รูปจริง
  {
    name: { th: "ดร. ธนภัทร ดีสุวรรณ", en: "Dr. Tanapat Deesuwan" },
    role: { th: "วิทยากรรับเชิญ", en: "Invited speaker" },
    org: {
      th: "ภาควิชาฟิสิกส์ คณะวิทยาศาสตร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
      en: "Department of Physics, Faculty of Science, King Mongkut's University of Technology Thonburi",
    },
    topic: { th: "Quantum Fundamental (Basic)", en: "Quantum Fundamental (Basic)" },
    photo: asset("/assets/photos/white-speakers/tanapat.webp"),
    confirmed: true,
  },
  {
    name: { th: "ดร. ศุภณัฐ ธนศิลป์", en: "Dr. Supanut Thanasip" },
    role: { th: "วิทยากรรับเชิญ", en: "Invited speaker" },
    org: {
      th: "ภาควิชาฟิสิกส์ คณะวิทยาศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
      en: "Department of Physics, Faculty of Science, Chulalongkorn University",
    },
    topic: { th: "Quantum Machine Learning", en: "Quantum Machine Learning" },
    photo: asset("/assets/photos/white-speakers/supanut.webp"),
    photoPosition: "center top",
    confirmed: false,
  },
  {
    name: { th: "ผศ. ดร. ปรือ กลสุวรรณ", en: "Asst. Prof. Dr. Pruet Kalasuwan" },
    role: { th: "วิทยากรรับเชิญ", en: "Invited speaker" },
    org: { th: "มหาวิทยาลัยสงขลานครินทร์", en: "Prince of Songkla University" },
    topic: { th: "Quantum Communication", en: "Quantum Communication" },
    photo: asset("/assets/photos/white-speakers/pruet.webp"),
    confirmed: true,
  },
  {
    name: { th: "Harshit Gupta", en: "Harshit Gupta" },
    role: { th: "วิทยากรรับเชิญ", en: "Invited speaker" },
    org: { th: "Quantum Software Engineer @ qBraid", en: "Quantum Software Engineer @ qBraid" },
    topic: { th: "qBraid Platform / Qiskit on qBraid Platform", en: "qBraid Platform / Qiskit on qBraid Platform" },
    photo: asset("/assets/photos/white-speakers/harshit.webp"),
    confirmed: true,
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
        photo: asset("/assets/photos/white-speakers/worawat.webp"),
        confirmed: true,
      },
      {
        name: { th: "นิธิกร ชำนาญกุล (Pat)", en: "Nitikorn Chumnankul (Pat)" },
        role: { th: "Project Lead & Coordinator", en: "Project Lead & Coordinator" },
        org: { th: "มทส. · QTRiC", en: "SUT · QTRiC" },
        photo: asset("/assets/photos/committee-portraits/nitikorn.webp"),
        confirmed: true,
      },
      {
        name: { th: "ชัชวาล ใจสุข", en: "Chutchawan Jaisuk" },
        role: { th: "Co-organizer & Technical Support", en: "Co-organizer & Technical Support" },
        org: { th: "มทส. · QTRiC", en: "SUT · QTRiC" },
        photo: asset("/assets/photos/committee-portraits/chutchawan.webp"),
        confirmed: true,
      },
    ],
  },
  {
    title: { th: "ทีมดำเนินงานหลัก", en: "Core Operations Team" },
    note: { th: "นักศึกษาอาสาสมัคร มทส.", en: "SUT Student Volunteers" },
    people: [
      {
        name: { th: "ธนกฤต ทิพย์นางรอง", en: "Thanakrit Thipnangrong" },
        role: { th: "Lead Coordinator", en: "Lead Coordinator" },
        org: { th: "Student volunteer", en: "Student volunteer" },
        photo: asset("/assets/photos/committee-portraits/thanakrit.webp"),
        photoPosition: "center 6%",
        photoScale: 1.4,
        confirmed: true,
        
      },
      {
        name: { th: "อนุพงศ์ สินธุวงศานนท์", en: "Anupong Sintuwonsanon" },
        role: { th: "Core Team", en: "Core Team" },
        org: { th: "SUT Student volunteer", en: "SUT Student volunteer" },
        photo: asset("/assets/photos/committee-portraits/anupong.webp"),
        photoPosition: "center 6%",
        photoScale: 1.2,
        confirmed: true,
      },
      {
        name: { th: "พิชชาพร ดวงแก้ว ", en: "Pichaphon Duangkeow " },
        role: { th: "Core Team / QML", en: "Core Team / QML" },
        org: { th: "SUT Student volunteer", en: "SUT Student volunteer" },
        photo: asset("/assets/photos/committee-portraits/pichaphon.webp"),
        photoPosition: "center 6%",
        photoScale: 1.2,
        confirmed: true,
      },
      {
        name: { th: "กรกนก หอมกลิ่น", en: "Kronkanok Homglin" },
        role: { th: "Core Team", en: "Core Team" },
        org: { th: "SUT Student volunteer", en: "SUT Student volunteer" },
        photo: asset("/assets/photos/committee-portraits/kronkanok.webp"),
        photoPosition: "center 6%",
        photoScale: 1.6,
        confirmed: true,
      },
      {
        name: { th: "มาโนช คำธร", en: "Manot khamton" },
        role: { th: "Technical Lead", en: "Technical Lead" },
        org: { th: "SUT Student volunteer", en: "SUT Student volunteer" },
        photo: asset("/assets/photos/committee-portraits/manot.webp"),
        photoPosition: "center 6%",
        photoScale: 1.25,
        confirmed: true,
      },
    //
      //{
      //  name: { th: "มีเบียร์", en: "Beer" },
      //  role: { th: "TA & Platform Support", en: "TA & Platform Support" },
       // org: { th: "QTRiC", en: "QTRiC" },
       // confirmed: true,
    //  },
    ],
  },
  {
    title: { th: "ทีมดำเนินงานหลัก", en: "Core Operations Team" },
    note: { th: "นักศึกษาอาสาสมัคร จุฬาฯ", en: "CU Student Volunteers" },
    people: [
      {
        name: { th: "พอเพียง อินทจันทร์", en: "Popeang Intajan" },
        role: { th: "", en: "" },
        org: { th: "Student volunteer", en: "Student volunteer" },
        photo: asset("/assets/photos/committee-portraits/popeang.png"),
        photoPosition: "center 6%",
        photoScale: 1.5,
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
        photo: asset("/assets/photos/choong-pak-shen.jpg"),
        confirmed: true,
      },
      {
        name: { th: "Tan Chun Loong", en: "Tan Chun Loong" },
        role: { th: "ที่ปรึกษาระดับภูมิภาค", en: "Regional advisor" },
        org: { th: "Nanyang Technological University", en: "Nanyang Technological University" },
        photo: asset("/assets/photos/white-speakers/tan-chun-loong-sharp.png"),
        photoPosition: "center 12%",
        photoScale: 1.9,
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
        photo: asset("/assets/photos/white-speakers/ricky.webp"),
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
        photo: asset("/assets/photos/committee-portraits/sukrit-sharp.png"),
        photoPosition: "center 8%",
        photoScale: 1.15,
        confirmed: false,
      },
      {
        name: { th: "รศ. ดร. อนุชา วัชระภาสร", en: "Assoc. Prof. Dr. Anucha Watcharapasorn" },
        role: { th: "ผู้ประสานงานมหาวิทยาลัย", en: "University coordinator" },
        org: { th: "มหาวิทยาลัยเชียงใหม่", en: "Chiang Mai University" },
        photo: asset("/assets/photos/Dr.anucha.png"),
        confirmed: false,
      },
      {
        name: { th: "ผศ. ดร. ปรือ กลสุวรรณ", en: "Asst. Prof. Dr. Pruet Kalasuwan" },
        role: { th: "ผู้ประสานงานมหาวิทยาลัย", en: "University coordinator" },
        org: { th: "มหาวิทยาลัยสงขลานครินทร์", en: "Prince of Songkla University" },
        photo: asset("/assets/photos/white-speakers/pruet.webp"),
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
