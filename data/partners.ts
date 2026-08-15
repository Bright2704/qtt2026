import type { L } from "@/lib/i18n";

export type PartnerTier = {
  title: L;
  note?: L;
  partners: { name: L; sub?: L; logo?: string; url?: string; confirmed: boolean }[];
};

export const partnerTiers: PartnerTier[] = [
  {
    title: { th: "พันธมิตรหลักของโครงการ", en: "Programme partner" },
    note: {
      th: "ผู้ริเริ่มและสนับสนุน Qiskit Fall Fest ในระดับโลก",
      en: "Creator and supporter of Qiskit Fall Fest worldwide",
    },
    partners: [
      {
        name: { th: "IBM Quantum", en: "IBM Quantum" },
        sub: { th: "ผู้จัด Fall Fest ระดับโลก", en: "Global Fall Fest programme" },
        url: "https://www.ibm.com/quantum",
        confirmed: true,
      },
    ],
  },
  {
    title: { th: "พันธมิตรด้านแพลตฟอร์ม", en: "Platform partner" },
    partners: [
      {
        name: { th: "qBraid", en: "qBraid" },
        sub: {
          th: "สภาพแวดล้อมการเรียนรู้หลักของงาน",
          en: "The event's core learning environment",
        },
        url: "https://qbraid.com",
        confirmed: true,
      },
    ],
  },
  {
    title: { th: "สถาบันเจ้าภาพและผู้จัด", en: "Host institution and organisers" },
    partners: [
      {
        name: { th: "มหาวิทยาลัยเทคโนโลยีสุรนารี", en: "Suranaree University of Technology" },
        sub: { th: "สถาบันเจ้าภาพ", en: "Host institution" },
        confirmed: true,
      },
      {
        name: { th: "QTRiC", en: "QTRiC" },
        sub: {
          th: "Quantum Technology Research Initiative Consortium",
          en: "Quantum Technology Research Initiative Consortium",
        },
        url: "https://qtric.sut.ac.th/",
        confirmed: true,
      },
      {
        name: { th: "SEA Quantum Network", en: "SEA Quantum Network" },
        sub: { th: "เครือข่ายควอนตัมเอเชียตะวันออกเฉียงใต้", en: "Southeast Asian quantum network" },
        url: "https://seaqnet.org/",
        confirmed: true,
      },
    ],
  },
  {
    title: { th: "พันธมิตรด้านสถานที่", en: "Venue partner" },
    partners: [
      {
        name: { th: "True Corporation", en: "True Corporation" },
        sub: { th: "ทรู ดิจิทัล พาร์ค กรุงเทพฯ", en: "True Digital Park, Bangkok" },
        confirmed: true,
      },
    ],
  },
  {
    title: { th: "เครือข่ายวิชาการ", en: "Academic network" },
    note: {
      th: "อยู่ระหว่างยืนยันการเข้าร่วมอย่างเป็นทางการ",
      en: "Formal participation currently being confirmed",
    },
    partners: [
      { name: { th: "มหาวิทยาลัยเชียงใหม่", en: "Chiang Mai University" }, confirmed: false },
      { name: { th: "มหาวิทยาลัยสงขลานครินทร์", en: "Prince of Songkla University" }, confirmed: false },
      { name: { th: "มหาวิทยาลัยมหิดล", en: "Mahidol University" }, confirmed: false },
      { name: { th: "จุฬาลงกรณ์มหาวิทยาลัย", en: "Chulalongkorn University" }, confirmed: false },
    ],
  },
  {
    title: { th: "ภาคอุตสาหกรรม", en: "Industry" },
    partners: [
      {
        name: { th: "IBM ประเทศไทย", en: "IBM Thailand" },
        sub: { th: "ความร่วมมือระดับประเทศ", en: "National collaboration" },
        confirmed: true,
      },
    ],
  },
];

/** สิ่งที่ IBM สนับสนุน / ไม่สนับสนุน — ใช้ในหน้า About และ FAQ */
export const ibmProvides: { give: L[]; notGive: L[] } = {
  give: [
    {
      th: "เอกสารปูพื้นควอนตัม และ Jupyter Notebook สำหรับใช้สอนในงาน",
      en: "Introductory quantum materials and Jupyter notebooks for teaching",
    },
    {
      th: "โจทย์สำหรับกิจกรรมแฮกกาธอน บางโจทย์มาพร้อมสไลด์จากบริษัทพาร์ทเนอร์",
      en: "Hackathon problem sets, some with slides from partner companies",
    },
    {
      th: "ใบประกาศนียบัตรสำหรับผู้เข้าร่วม และ badge พร้อมใบประกาศสำหรับทีมผู้จัด",
      en: "Certificates for participants, plus badges and certificates for the organising team",
    },
    {
      th: "สิทธิ์ใช้แบรนด์ IBM Quantum และการช่วยโปรโมทอีเวนต์",
      en: "IBM Quantum branding rights and promotional support",
    },
    {
      th: "ของที่ระลึก เช่น เสื้อและสติกเกอร์ เฉพาะงานประเภท Fall Fest Plus",
      en: "Swag such as T-shirts and stickers, for Fall Fest Plus events only",
    },
  ],
  notGive: [
    {
      th: "ไม่มีเครดิตสำหรับรันบนคอมพิวเตอร์ควอนตัมจริง ผู้เข้าร่วมใช้ simulator เท่านั้น",
      en: "No hardware credits — participants run on simulators only",
    },
    {
      th: "ไม่ได้ส่งวิทยากรมาให้โดยอัตโนมัติ ทีมผู้จัดเชิญเองได้หากต้องการ",
      en: "No speakers are assigned automatically; organisers may invite them if they wish",
    },
  ],
};

/** ผลงานที่ผ่านมาของทีม */
export const trackRecord: { year: string; name: L; url?: string }[] = [
  {
    year: "2024",
    name: { th: "ก่อตั้ง SEA Quantum Network", en: "Founding of the SEA Quantum Network" },
    url: "https://seaqnet.org/",
  },
  {
    year: "2025",
    name: { th: "SEA Quantathon 2025", en: "SEA Quantathon 2025" },
    url: "https://qtric.sut.ac.th/quantathon2025/",
  },
  {
    year: "2025",
    name: {
      th: "การประชุม QTRi 2025 — เชื่อมภาครัฐ เอกชน และวิชาการ",
      en: "QTRi 2025 Conference — government, industry, and academia",
    },
    url: "https://qtric.sut.ac.th/qtri2025/",
  },
  {
    year: "2026",
    name: { th: "SEA Quantum Leaders Summit 2026", en: "SEA Quantum Leaders Summit 2026" },
  },
];
