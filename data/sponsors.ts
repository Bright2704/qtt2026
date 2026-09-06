import type { L } from "@/lib/i18n";

export type SponsorItem = {
  name: L;
  sub?: L;
  logo?: string;
  url?: string;
  confirmed?: boolean;
};

export type SponsorTier = {
  tierName: L;
  note?: L;
  sponsors: SponsorItem[];
};

/**
 * ข้อมูลผู้สนับสนุน (Sponsors) — ตัวอย่างสำหรับเริ่มต้น
 * แก้ไขข้อมูลในไฟล์นี้เมื่อได้รับรายละเอียดและโลโก้จาก Sponsor จริง
 */
export const sponsorTiers: SponsorTier[] = [
  {
    tierName: { th: "ผู้สนับสนุน", en: "Platinum Sponsors" },
    sponsors: [
      {
        name: { th: "TheTigerTeamAcademy", en: "The Tiger Team Academy" },
        sub: { th: "ผู้สนับสนุนหลักอย่างเป็นทางการ", en: "Official Platinum Sponsor" },
        logo: "/images/TheTigerTeamAcademy.jpg",
        confirmed: true,
      },
    ],
  },
];
