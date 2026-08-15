import type { L } from "@/lib/i18n";

export type Post = {
  slug: string;
  date: string;
  dateLabel: L;
  category: L;
  title: L;
  excerpt: L;
  body: L[];
  draft: boolean;
};

/* บทความตั้งต้น — เขียนไว้ให้พร้อมเผยแพร่ ปรับวันที่และรายละเอียดแล้วโพสต์ได้เลย */

export const posts: Post[] = [
  {
    slug: "thailand-hosts-qff-2026",
    date: "2026-08-15",
    dateLabel: { th: "15 สิงหาคม 2026", en: "15 August 2026" },
    category: { th: "ประกาศ", en: "Announcement" },
    title: {
      th: "ประเทศไทยได้เป็นเจ้าภาพ Qiskit Fall Fest 2026",
      en: "Thailand will host Qiskit Fall Fest 2026",
    },
    excerpt: {
      th: "มหาวิทยาลัยเทคโนโลยีสุรนารีร่วมกับ QTRiC ได้รับเลือกให้เป็นหนึ่งในเจ้าภาพจัดงาน Qiskit Fall Fest 2026 ซึ่งเป็นเทศกาลควอนตัมคอมพิวติงระดับโลกของ IBM Quantum",
      en: "Suranaree University of Technology and QTRiC have been selected to host an edition of Qiskit Fall Fest 2026, IBM Quantum's global celebration of quantum computing.",
    },
    body: [
      {
        th: "ทุกปี IBM Quantum จัดชุดกิจกรรมควอนตัมคอมพิวติงที่ขับเคลื่อนโดยชุมชนทั่วโลก ในปี 2025 มีผู้เข้าร่วมมากกว่า 32,000 คน จากผู้จัดงานอาสาสมัคร 150 คนใน 6 ทวีป ปีนี้ประเทศไทยได้เข้าร่วมเป็นหนึ่งในเจ้าภาพ",
        en: "Each year IBM Quantum runs a worldwide series of community-led quantum computing events. In 2025 more than 32,000 people took part, organised by 150 volunteer hosts across six continents. This year, Thailand joins the roster.",
      },
      {
        th: "งานในประเทศไทยจะจัดขึ้นในรูปแบบไฮบริดช่วงเดือนตุลาคมถึงพฤศจิกายน 2026 โดยมีสองสถานที่หลักคือมหาวิทยาลัยเทคโนโลยีสุรนารี จังหวัดนครราชสีมา และทรู ดิจิทัล พาร์ค กรุงเทพมหานคร แต่ละแห่งรับผู้เข้าร่วมประมาณ 40 ถึง 50 คน",
        en: "The Thai edition runs in hybrid format between October and November 2026, at two main venues: Suranaree University of Technology in Nakhon Ratchasima, and True Digital Park in Bangkok. Each accommodates roughly 40 to 50 participants on site.",
      },
      {
        th: "ธีมระดับโลกของปีนี้คือหนึ่งทศวรรษของควอนตัมบนคลาวด์ ครบสิบปีนับตั้งแต่ IBM เปิดให้คนทั่วโลกส่งวงจรควอนตัมไปรันบนเครื่องจริงผ่านอินเทอร์เน็ตเป็นครั้งแรก",
        en: "This year's global theme is a decade of quantum on the cloud, marking ten years since IBM first let anyone in the world send a quantum circuit to real hardware over the internet.",
      },
      {
        th: "การลงทะเบียนไม่มีค่าใช้จ่าย และไม่ต้องมีพื้นฐานควอนตัมมาก่อน",
        en: "Registration is free and requires no prior quantum background.",
      },
    ],
    draft: true,
  },
  {
    slug: "why-we-teach-from-zero",
    date: "2026-08-20",
    dateLabel: { th: "20 สิงหาคม 2026", en: "20 August 2026" },
    category: { th: "เบื้องหลัง", en: "Behind the scenes" },
    title: {
      th: "ทำไมเราถึงเลือกสอนควอนตัมให้คนที่ไม่มีพื้นฐานเลย",
      en: "Why we chose to teach quantum to people with no background",
    },
    excerpt: {
      th: "ที่ผ่านมาความรู้ควอนตัมในไทยกระจุกอยู่กับนักวิจัยกลุ่มเล็ก ๆ เราอยากเปลี่ยนเรื่องนั้น และนี่คือเหตุผลว่าทำไมหลักสูตรของเราถึงเริ่มจากศูนย์",
      en: "Quantum knowledge in Thailand has been concentrated among a small group of researchers. We want to change that — and here is why our curriculum starts from zero.",
    },
    body: [
      {
        th: "ตั้งแต่ก่อตั้ง SEA Quantum Network ในปี 2024 ทีมของเราจัดงานระดับภูมิภาคมาต่อเนื่อง ทั้ง SEA Quantathon 2025 การประชุม QTRi 2025 และ SEA Quantum Leaders Summit 2026 งานเหล่านั้นสำเร็จดี แต่ก็ทำให้เราเห็นช่องว่างที่ชัดขึ้นเรื่อย ๆ",
        en: "Since founding the SEA Quantum Network in 2024, our team has run a series of regional events: SEA Quantathon 2025, the QTRi 2025 Conference, and the SEA Quantum Leaders Summit 2026. They went well — and they made a gap increasingly clear.",
      },
      {
        th: "ผู้เข้าร่วมงานเหล่านั้นคือนักวิจัยและผู้เชี่ยวชาญ ซึ่งเป็นกลุ่มที่มีความรู้อยู่แล้ว องค์ความรู้จึงวนอยู่ในวงเดิม ไม่ได้ลงไปหยั่งรากในสังคมไทยจริง ๆ",
        en: "Those events drew researchers and specialists — people who already knew the material. The knowledge circulated within the same circle rather than taking root more widely.",
      },
      {
        th: "Qiskit Fall Fest 2026 จึงเป็นการหันหัวเรือกลับมาที่ฐานราก เราตั้งใจให้คนที่เดินเข้ามาโดยไม่รู้ว่าคิวบิตคืออะไร เดินออกไปพร้อมวงจรควอนตัมที่ตัวเองเขียนและรันเอง นั่นคือมาตรวัดความสำเร็จของเรา",
        en: "Qiskit Fall Fest 2026 turns back towards the foundation. Our aim is that someone who walks in not knowing what a qubit is walks out having written and run their own quantum circuit. That is how we measure success.",
      },
    ],
    draft: true,
  },
  {
    slug: "how-to-prepare",
    date: "2026-09-01",
    dateLabel: { th: "1 กันยายน 2026", en: "1 September 2026" },
    category: { th: "คู่มือ", en: "Guide" },
    title: {
      th: "เตรียมตัวอย่างไรถ้าไม่เคยแตะควอนตัมมาก่อน",
      en: "How to prepare if you have never touched quantum before",
    },
    excerpt: {
      th: "ใช้เวลาประมาณ 30 ถึง 45 นาที ทำล่วงหน้าได้ทุกเมื่อ ทำครบแล้ววันงานคุณจะได้ลงมือเขียนโค้ดตั้งแต่นาทีแรก",
      en: "About 30 to 45 minutes, whenever suits you. Finish these and you will be writing code from the first minute of the workshop.",
    },
    body: [
      {
        th: "ข้อผิดพลาดที่พบบ่อยที่สุดในเวิร์กชอปแบบลงมือทำ คือใช้เวลาชั่วโมงแรกไปกับการตั้งค่าเครื่อง ไม่ใช่การเรียนรู้ เราจึงย้ายงานส่วนนั้นมาไว้ก่อนวันงานทั้งหมด",
        en: "The commonest failure in hands-on workshops is spending the first hour on setup rather than learning. So we have moved all of that work to before the day.",
      },
      {
        th: "สิ่งที่ต้องทำมีหกข้อ ใช้เวลารวมไม่ถึงชั่วโมง เริ่มจากสมัครบัญชี qBraid ด้วยอีเมลเดียวกับที่ใช้ลงทะเบียน แล้วลองรัน notebook ตัวอย่างให้ผ่านสักหนึ่งครั้ง",
        en: "There are six things to do, together under an hour. Start by creating a qBraid account with the same email you registered with, then run one sample notebook end to end.",
      },
      {
        th: "ที่เหลือคือดูวิดีโอปฐมนิเทศหนึ่งชั่วโมง อ่านศัพท์ควอนตัมสิบคำ เข้า Discord แนะนำตัว และชาร์จโน้ตบุ๊กมาให้เต็ม รายละเอียดทั้งหมดอยู่ในหน้าเตรียมตัว",
        en: "The rest: watch the one-hour orientation, read ten terms of vocabulary, join the Discord and say hello, and arrive with a charged laptop. Full details are on the preparation page.",
      },
    ],
    draft: true,
  },
];

export const pressKit: { name: L; detail: L; file: string }[] = [
  {
    name: { th: "โลโก้งาน (SVG)", en: "Event mark (SVG)" },
    detail: { th: "โลโก้ประจำเว็บไซต์ ใช้บนพื้นสว่างและพื้นมืดได้", en: "Site mark, usable on light and dark backgrounds" },
    file: "/assets/logo-mark.svg",
  },
  {
    name: { th: "เหรียญตรางาน (SVG)", en: "Event badge (SVG)" },
    detail: { th: "เหรียญวงกลม เหมาะกับสติกเกอร์และโซเชียล", en: "Circular badge, suited to stickers and social posts" },
    file: "/assets/badge-2026.svg",
  },
  {
    name: { th: "ภาพสำหรับแชร์ (1200×630)", en: "Social share image (1200×630)" },
    detail: { th: "ภาพ preview สำหรับ Facebook, LinkedIn และ X", en: "Preview card for Facebook, LinkedIn, and X" },
    file: "/assets/og-image.svg",
  },
  {
    name: { th: "ภาพพื้นหลังหลัก", en: "Hero background" },
    detail: { th: "ภาพพื้นหลังธีมงาน ใช้ประกอบบทความได้", en: "Themed background for use alongside articles" },
    file: "/assets/hero-bg.svg",
  },
];
