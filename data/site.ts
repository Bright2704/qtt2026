import type { L } from "@/lib/i18n";

/* ============================================================
   ข้อมูลหลักของงาน — SINGLE SOURCE OF TRUTH
   แก้ตรงนี้ที่เดียว ทั้งเว็บจะเปลี่ยนตาม
   ทุกจุดที่เขียน TBC คือรอทีมยืนยัน
   ============================================================ */

export const TBC = "[รอยืนยัน]";

export const site = {
  name: {
    th: "Qiskit Fall Fest 2026: ประเทศไทย",
    en: "Qiskit Fall Fest 2026: Thailand",
  } as L,
  shortName: "QFF2026TH",
  host: {
    th: "มหาวิทยาลัยเทคโนโลยีสุรนารี",
    en: "Suranaree University of Technology",
  } as L,
  organiser: "QTRiC",
  organiserFull: {
    th: "QTRiC — Quantum Technology Research Initiative Consortium (ประเทศไทย)",
    en: "QTRiC — Quantum Technology Research Initiative Consortium (Thailand)",
  } as L,
  url: "https://qtric.sut.ac.th/qff2026/",
  hashtags: ["#QiskitFallFest", "#QFF2026Thailand", "#QuantumThailand"],

  /** ธีมระดับโลกของ Fall Fest ปี 2026 (จาก IBM Quantum) */
  globalTheme: {
    th: "หนึ่งทศวรรษของควอนตัมบนคลาวด์",
    en: "A decade of quantum on the cloud",
  } as L,

  /** ธีมของ Thailand edition (จากเอกสาร proposal ของทีม) */
  localTheme: {
    th: "เราจะสร้างรากฐานความรู้ควอนตัมในระดับท้องถิ่นอย่างไร เพื่อกระจายโอกาสการเข้าถึงองค์ความรู้ควอนตัม และบ่มเพาะศักยภาพตั้งแต่ต้นน้ำให้กับทุกภาคส่วนของสังคมไทย",
    en: "How can we establish a locally grounded foundation to democratise quantum knowledge and build early-stage capacity across all sectors of Thai society?",
  } as L,

  contact: {
    email: "qff2026@g.sut.ac.th", // TBC — ยังไม่ยืนยัน
    emailConfirmed: false,
    discord: "", // TBC
    facebook: "", // TBC
    instagram: "", // TBC
    youtube: "", // TBC
    linkedin: "https://www.linkedin.com/company/qtric",
    registerForm: "", // TBC — ใส่ลิงก์ Google Form / Airtable แล้วฟอร์มจะฝังอัตโนมัติ
  },

  qbraid: {
    name: "qBraid",
    url: "https://qbraid.com",
    note: {
      th: "รันบน simulator เท่านั้น — โปรแกรม Fall Fest ไม่มีเครดิตสำหรับเครื่องควอนตัมจริง",
      en: "Simulator only — the Fall Fest programme does not include hardware credits.",
    } as L,
  },
};

/** ตัวเลข Fall Fest ระดับโลก ใช้สร้างความน่าเชื่อถือ */
export const globalStats: { num: string; label: L }[] = [
  {
    num: "32,000+",
    label: {
      th: "ผู้เข้าร่วม Fall Fest ทั่วโลกในปี 2025",
      en: "participants worldwide in 2025",
    },
  },
  {
    num: "150",
    label: { th: "ผู้จัดงานอาสาสมัครทั่วโลก", en: "volunteer organisers globally" },
  },
  {
    num: "2",
    label: {
      th: "เมืองในประเทศไทย (และอาจเพิ่มอีก 2)",
      en: "cities in Thailand, with two more planned",
    },
  },
  {
    num: "100%",
    label: { th: "ฟรี ไม่มีค่าลงทะเบียน", en: "free — no registration fee" },
  },
];

/* ------------------------------------------------------------
   เมนูหลัก
   ------------------------------------------------------------ */

export type NavItem = { href: string; label: L; mega?: boolean };

export const navItems: NavItem[] = [
  { href: "/about", label: { th: "เกี่ยวกับงาน", en: "About" } },
  { href: "/editions", label: { th: "งานทั้งหมด", en: "Editions" }, mega: true },
  { href: "/programme", label: { th: "กำหนดการ", en: "Programme" } },
  { href: "/learn", label: { th: "เตรียมตัว", en: "Learn" } },
  { href: "/speakers", label: { th: "วิทยากร", en: "Speakers" } },
  { href: "/committee", label: { th: "คณะกรรมการ", en: "Committee" } },
  { href: "/partners", label: { th: "พันธมิตร", en: "Partners" } },
  { href: "/news", label: { th: "ข่าวสาร", en: "News" } },
];

export const minorNavItems: NavItem[] = [
  { href: "/faq", label: { th: "คำถามที่พบบ่อย", en: "FAQ" } },
  { href: "/qtric", label: { th: "เกี่ยวกับ QTRiC", en: "QTRiC" } },
  { href: "/contact", label: { th: "ติดต่อเรา", en: "Contact" } },
  { href: "/code-of-conduct", label: { th: "ข้อปฏิบัติในงาน", en: "Code of Conduct" } },
];

export const announce: { text: L; cta: L } = {
  text: {
    th: "เปิดลงทะเบียนแล้ว · มทส. 25 ต.ค. 2026 · ที่นั่งจำกัด 50 ที่",
    en: "Registration open · SUT, 25 Oct 2026 · 50 seats only",
  },
  cta: { th: "ลงทะเบียน", en: "Register" },
};

export const footerCols: { title: L; links: NavItem[] }[] = [
  {
    title: { th: "งาน", en: "Editions" },
    links: [
      { href: "/editions/sut", label: { th: "มทส. นครราชสีมา", en: "SUT, Nakhon Ratchasima" } },
      { href: "/editions/bangkok", label: { th: "True Digital Park", en: "True Digital Park" } },
      { href: "/editions/online", label: { th: "ปฐมนิเทศออนไลน์", en: "Pre-event online" } },
      { href: "/programme", label: { th: "กำหนดการ", en: "Programme" } },
    ],
  },
  {
    title: { th: "เตรียมตัว", en: "Prepare" },
    links: [
      { href: "/learn#checklist", label: { th: "เช็กลิสต์ก่อนมางาน", en: "Pre-event checklist" } },
      { href: "/learn#qbraid", label: { th: "ตั้งค่า qBraid", en: "Set up qBraid" } },
      { href: "/learn#prework", label: { th: "การบ้านก่อนงาน", en: "Pre-work" } },
      { href: "/learn#glossary", label: { th: "ศัพท์ควอนตัม", en: "Glossary" } },
    ],
  },
  {
    title: { th: "เกี่ยวกับ", en: "About" },
    links: [
      { href: "/about", label: { th: "เกี่ยวกับงาน", en: "About the fest" } },
      { href: "/committee", label: { th: "คณะกรรมการ", en: "Committee" } },
      { href: "/partners", label: { th: "พันธมิตร", en: "Partners" } },
      { href: "/qtric", label: { th: "QTRiC", en: "QTRiC" } },
      { href: "/faq", label: { th: "คำถามที่พบบ่อย", en: "FAQ" } },
      { href: "/contact", label: { th: "ติดต่อเรา", en: "Contact" } },
    ],
  },
];
