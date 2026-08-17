import type { L } from "@/lib/i18n";

/* ============================================================
   สติกเกอร์ทางการของ Qiskit Fall Fest 2026

   ⚠️ ข้อกำหนดแบรนด์จาก IBM
   สติกเกอร์เหล่านี้ใช้ได้ แต่ห้ามแก้ไขดัดแปลงตัวงานออกแบบ
   เว็บนี้จึงทำได้แค่ "วาง หมุน และย่อขยายทั้งชิ้นเท่านั้น"
   ไม่มีการเปลี่ยนสี ครอบตัด หรือบีบยืดสัดส่วนใด ๆ

   📁 วิธีใส่ไฟล์จริง
   วางไฟล์ PNG พื้นโปร่งไว้ที่ public/assets/stickers/
   ใช้ชื่อไฟล์ตามช่อง src ด้านล่างเป๊ะ ๆ แล้วเว็บจะสลับไปใช้เอง
   ถ้ายังไม่มีไฟล์ ระบบจะถอยไปใช้กราฟิก SVG ที่เราออกแบบเองแทน
   ============================================================ */

export type Sticker = {
  id: string;
  /** ไฟล์จริงจาก IBM */
  src: string;
  /** กราฟิกสำรองของเราเอง ใช้ระหว่างที่ยังไม่มีไฟล์จริง */
  fallback: string;
  alt: L;
  /** true = เป็นภาพตกแต่ง ไม่ต้องอ่านออกเสียง */
  decorative?: boolean;
};

const DIR = "/assets/stickers";

export const stickers: Record<string, Sticker> = {
  badge: {
    id: "badge",
    src: `${DIR}/badge.png`,
    fallback: "/assets/badge-2026.svg",
    alt: {
      th: "เหรียญตรา Qiskit Fall Fest 2026",
      en: "Qiskit Fall Fest 2026 badge",
    },
  },
  hummingbirds: {
    id: "hummingbirds",
    src: `${DIR}/hummingbirds.png`,
    fallback: "/assets/logo-mark.svg",
    alt: {
      th: "สติกเกอร์นกฮัมมิงเบิร์ดสองตัวบินอยู่บนก้อนเมฆ",
      en: "Sticker of two hummingbirds flying among clouds",
    },
    decorative: true,
  },
  bluebird: {
    id: "bluebird",
    src: `${DIR}/bluebird.png`,
    fallback: "/assets/logo-mark.svg",
    alt: {
      th: "สติกเกอร์นกสีน้ำเงินเกาะกิ่งไม้",
      en: "Sticker of a blue bird perched on a branch",
    },
    decorative: true,
  },
  circuit: {
    id: "circuit",
    src: `${DIR}/circuit.png`,
    fallback: "/assets/pattern-circuit.svg",
    alt: {
      th: "สติกเกอร์การ์ดวงจรควอนตัม มีเส้นคลื่นและจุดสองสี",
      en: "Sticker of a quantum circuit card with a wave and two nodes",
    },
    decorative: true,
  },
  eagle: {
    id: "eagle",
    src: `${DIR}/eagle.png`,
    fallback: "/assets/logo-mark.svg",
    alt: {
      th: "สติกเกอร์นกอินทรีขอบชมพู ปีกสีม่วงเข้ม",
      en: "Sticker of an eagle outlined in pink with a deep purple wing",
    },
    decorative: true,
  },
  qiskit: {
    id: "qiskit",
    src: `${DIR}/qiskit-pill.png`,
    fallback: "/assets/logo-mark.svg",
    alt: { th: "สติกเกอร์คำว่า Qiskit", en: "Qiskit wordmark sticker" },
    decorative: true,
  },
  fallFest: {
    id: "fallFest",
    src: `${DIR}/fall-fest-pill.png`,
    fallback: "/assets/logo-mark.svg",
    alt: { th: "สติกเกอร์คำว่า Fall Fest", en: "Fall Fest wordmark sticker" },
    decorative: true,
  },
};

export const allStickers = Object.values(stickers);

/* ------------------------------------------------------------
   วงโคจรรอบเหรียญตราในหน้าแรก
   angle  = องศาเริ่มต้นบนวง
   radius = รัศมี (% ของครึ่งกล่อง)
   tilt   = องศาเอียงของสติกเกอร์
   spin   = เวลาโคจรครบรอบ
   ------------------------------------------------------------ */

export type OrbitItem = {
  sticker: Sticker;
  /** องศาเริ่มต้นบนวง */
  angle: number;
  /** ระยะหดของกล่องวงโคจร ยิ่งมาก วงยิ่งเล็ก (0% = วงนอกสุด) */
  inset: string;
  size: string;
  tilt: number;
  spin: string;
  bob: string;
  delay: string;
  reverse?: boolean;
};

/** วงนอกสามตัว วงในสองตัว หมุนสวนทางกัน */
export const heroOrbit: OrbitItem[] = [
  {
    sticker: stickers.hummingbirds,
    angle: 12,
    inset: "1%",
    size: "clamp(62px, 11vw, 104px)",
    tilt: -8,
    spin: "44s",
    bob: "5.5s",
    delay: "0s",
  },
  {
    sticker: stickers.eagle,
    angle: 140,
    inset: "1%",
    size: "clamp(64px, 11.5vw, 108px)",
    tilt: 12,
    spin: "44s",
    bob: "6.2s",
    delay: "0s",
  },
  {
    sticker: stickers.bluebird,
    angle: 258,
    inset: "1%",
    size: "clamp(58px, 10.5vw, 98px)",
    tilt: -14,
    spin: "44s",
    bob: "5s",
    delay: "0s",
  },
  {
    sticker: stickers.qiskit,
    angle: 68,
    inset: "26%",
    size: "clamp(54px, 9vw, 88px)",
    tilt: -18,
    spin: "32s",
    bob: "4.6s",
    delay: "0s",
    reverse: true,
  },
  {
    sticker: stickers.fallFest,
    angle: 232,
    inset: "26%",
    size: "clamp(60px, 10vw, 96px)",
    tilt: 16,
    spin: "32s",
    bob: "6.6s",
    delay: "0s",
    reverse: true,
  },
];

/* ------------------------------------------------------------
   สติกเกอร์ตกแต่งกระจายตามหน้า
   ------------------------------------------------------------ */

export type ScatterItem = {
  sticker: Sticker;
  top: string;
  left: string;
  size: string;
  tilt: number;
  opacity: number;
  bob: string;
  delay: string;
  /** ความเร็วพารัลแลกซ์แนวตั้ง ยิ่งต่างกันมาก ยิ่งแยกชั้นกันชัด */
  speed?: number;
  /** ลอยออกด้านข้างด้วย ทำให้กระจายออกจากกันตอนเลื่อน ไม่ใช่ขึ้นลงอย่างเดียว */
  drift?: number;
  keepOnMobile?: boolean;
};

/* ตำแหน่งเลือกไว้ให้อยู่ "ริมขอบที่ไม่มีตัวหนังสือ" เท่านั้น
   เนื้อหาในสองส่วนนี้กว้างไม่เกิน 62ch (ราว 58% ของ wrap)
   สติกเกอร์จึงวางได้เฉพาะฝั่งขวาและขอบนอก และคุมความทึบให้อ่านง่าย */

/** ใช้ในช่วงเนื้อหาสว่าง */
export const scatterLight: ScatterItem[] = [
  {
    // มุมซ้ายล่างของคอลัมน์หัวข้อเป็นพื้นที่ว่าง วางได้เต็มตัวไม่ทับตัวหนังสือ
    sticker: stickers.qiskit,
    top: "56%",
    left: "9%",
    size: "116px",
    tilt: -16,
    opacity: 0.8,
    bob: "7s",
    delay: "0s",
    speed: 0.26,
    drift: -0.05,
  },
  {
    sticker: stickers.circuit,
    top: "24%",
    left: "92%",
    size: "100px",
    tilt: 14,
    opacity: 0.6,
    bob: "6.4s",
    delay: "-1.6s",
    speed: 0.09,
    drift: 0.045,
  },
  {
    sticker: stickers.fallFest,
    top: "88%",
    left: "86%",
    size: "112px",
    tilt: -9,
    opacity: 0.62,
    bob: "7.2s",
    delay: "-3.1s",
    speed: 0.36,
    drift: 0.02,
  },
];

/** ใช้ในช่วงพื้นมืด */
export const scatterDark: ScatterItem[] = [
  {
    sticker: stickers.hummingbirds,
    top: "4%",
    left: "79%",
    size: "138px",
    tilt: 10,
    opacity: 0.9,
    bob: "6.8s",
    delay: "-0.6s",
    speed: 0.08,
    drift: 0.06,
  },
  {
    sticker: stickers.bluebird,
    top: "56%",
    left: "90%",
    size: "116px",
    tilt: -12,
    opacity: 0.75,
    bob: "7.4s",
    delay: "-2.4s",
    speed: 0.3,
    drift: -0.04,
  },
  {
    sticker: stickers.eagle,
    top: "78%",
    left: "68%",
    size: "96px",
    tilt: 18,
    opacity: 0.5,
    bob: "8s",
    delay: "-4.2s",
    speed: 0.44,
    drift: -0.08,
  },
];

/** แถบเลื่อน — ใส่ซ้ำได้ ยิ่งหลากหลายยิ่งดู lively */
export const marqueeStickers: { sticker: Sticker; tilt: number }[] = [
  { sticker: stickers.badge, tilt: -6 },
  { sticker: stickers.hummingbirds, tilt: 8 },
  { sticker: stickers.qiskit, tilt: -14 },
  { sticker: stickers.eagle, tilt: 6 },
  { sticker: stickers.fallFest, tilt: -11 },
  { sticker: stickers.circuit, tilt: -9 },
  { sticker: stickers.bluebird, tilt: 12 },
];
