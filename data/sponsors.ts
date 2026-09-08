import type { L } from "@/lib/i18n";

export type SponsorItem = {
  name: L;
  sub?: L;
  logo?: string;
  logoDarkBg?: boolean; // ใช้เมื่อ logo มีตัวหนังสือสีขาว ต้องการพื้นหลังสีเข้ม
  url?: string;
  confirmed?: boolean;
};

export type SponsorTier = {
  tierName: L;
  note?: L;
  sponsors: SponsorItem[];
};

/**
 * ข้อมูลผู้สนับสนุน (Supported By) — องค์กรและหน่วยงานที่สนับสนุนการจัดงาน
 */
export const sponsorTiers: SponsorTier[] = [
  {
    tierName: { th: "ผู้จัดงานหลัก", en: "Main Organizers" },
    sponsors: [
      {
        name: { th: "IBM Quantum", en: "IBM Quantum" },
        sub: { th: "ผู้สนับสนุนโปรแกรม Qiskit Fall Fest ระดับโลก", en: "Global Qiskit Fall Fest Programme Sponsor" },
        logo: "/assets/ibm-quantum-logo.png",
        url: "https://www.ibm.com/quantum",
        confirmed: true,
      },
      {
        name: { th: "QTRiC", en: "QTRiC" },
        sub: { th: "Quantum Technology Research Initiative Consortium", en: "Quantum Technology Research Initiative Consortium" },
        logo: "/assets/qtric-logo.png",
        url: "https://qtric.sut.ac.th",
        confirmed: true,
      },
      {
        name: { th: "มหาวิทยาลัยเทคโนโลยีสุรนารี", en: "Suranaree University of Technology" },
        sub: { th: "สถาบันเจ้าภาพหลัก", en: "Host Institution" },
        logo: "/assets/sut-logo.png",
        url: "https://www.sut.ac.th",
        confirmed: true,
      },
    ],
  },
  {
    tierName: { th: "พันธมิตรแพลตฟอร์ม", en: "Platform Partner" },
    sponsors: [
      {
        name: { th: "qBraid", en: "qBraid" },
        sub: { th: "แพลตฟอร์มเรียนรู้ควอนตัมคอมพิวติง", en: "Quantum Computing Learning Platform" },
        logo: "/assets/qbraid-logo.webp",
        url: "https://qbraid.com",
        confirmed: true,
      },
    ],
  },
  {
    tierName: { th: "พันธมิตรอุตสาหกรรม", en: "Industry Partners" },
    sponsors: [
      {
        name: { th: "IBM Thailand", en: "IBM Thailand" },
        sub: { th: "สถานที่จัดงาน กรุงเทพฯ", en: "Bangkok Venue Host" },
        logo: "/assets/ibm-quantum-logo.png",
        url: "https://www.ibm.com/quantum",
        confirmed: true,
      },
      {
        name: { th: "SEA Quantum Network", en: "SEA Quantum Network" },
        sub: { th: "เครือข่ายควอนตัมอาเซียน", en: "Southeast Asia Quantum Network" },
        logo: "/assets/sea-quantum-logo.jpg",
        url: "https://seaqnet.org",
        confirmed: true,
      },
    ],
  },
  {
    tierName: { th: "พันธมิตรสถาบันการศึกษา", en: "Academic Partners" },
    sponsors: [
      {
        name: { th: "มหาวิทยาลัยเชียงใหม่", en: "Chiang Mai University" },
        sub: { th: "เจ้าภาพจัดงานภาคเหนือ", en: "Northern Region Host" },
        logo: "/assets/cmu-logo.webp",
        url: "https://www.cmu.ac.th",
        confirmed: true,
      },
      {
        name: { th: "มหาวิทยาลัยสงขลานครินทร์", en: "Prince of Songkla University" },
        sub: { th: "เจ้าภาพจัดงานภาคใต้", en: "Southern Region Host" },
        logo: "/assets/psu-logo.png",
        url: "https://www.psu.ac.th",
        confirmed: true,
      },
    ],
  },
  {
    tierName: { th: "ผู้สนับสนุน", en: "Supporters" },
    sponsors: [
      {
        name: { th: "The Tiger Team Academy", en: "The Tiger Team Academy" },
        sub: { th: "ผู้สนับสนุนโครงการ", en: "Project Supporter" },
        logo: "/images/TheTigerTeamAcademy.jpg",
        confirmed: true,
      },
    ],
  },
];
