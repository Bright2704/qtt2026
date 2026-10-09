import type { L } from "@/lib/i18n";
import { asset } from "@/lib/asset";

export type Slot = {
  time: string;
  title: L;
  detail: L;
  speaker?: L;
  kind?: "session" | "break" | "admin";
  tbc?: boolean;
};

/** ตารางเวลาหลัก — โครงสร้าง 3 Sessions ตาม Master Plan */
export const agenda: Slot[] = [
  // === Session 1: Online Lectures (Centralized) ===
  {
    time: "08:30 – 09:00",
    kind: "admin",
    title: { th: "ลงทะเบียนออนไลน์", en: "Online Check-in" },
    detail: {
      th: "เข้าระบบ Zoom ตรวจสอบการเชื่อมต่อ และรับภาพรวมของงาน IBM Qiskit Fall Fest 2026",
      en: "Join Zoom, verify your connection, and receive an overview of IBM Qiskit Fall Fest 2026.",
    },
  },
  {
    time: "09:00 – 10:30",
    title: {
      th: "Lecture 1: Qiskit Theory & Fundamentals",
      en: "Lecture 1: Qiskit Theory & Fundamentals",
    },
    detail: {
      th: "แนะนำ Quantum Computing, พื้นฐานคณิตศาสตร์, ทำไมต้อง Qiskit และวิธีใช้งาน Qiskit & Quantum Gates",
      en: "Introduction to Quantum Computing, mathematical foundations, why Qiskit, and how to use Qiskit & Quantum Gates.",
    },
    speaker: {
      th: "Pak Shen (Monash) / IBM Request / อ.นิค",
      en: "Pak Shen (Monash) / IBM Request / Aj. Nick",
    },
    tbc: true,
  },
  {
    time: "10:30 – 12:00",
    title: {
      th: "Lecture 2: qBraid Platform & Optimization",
      en: "Lecture 2: qBraid Platform & Optimization",
    },
    detail: {
      th: "แนะนำแพลตฟอร์ม qBraid Cloud, ตั้งค่า environment & SDK, การ frame ปัญหา Optimization และ Qiskit on qBraid workflow",
      en: "Introduction to qBraid Cloud Platform, setting up environment & SDK, optimization problem framing, and Qiskit on qBraid workflow.",
    },
    speaker: {
      th: "Ricky Young (qBraid) / ทีม: พัช, มีเบียร์, พี่ตง, แม็กกกี้",
      en: "Ricky Young (qBraid) / Team: Pach, Beer, Tong, Maggy",
    },
    tbc: true,
  },
  {
    time: "12:00 – 12:15",
    title: { th: "Q&A และเตรียมตัวสู่ Workshop", en: "Q&A & Transition to Workshops" },
    detail: {
      th: "เปิดรับคำถาม และแนะนำการเตรียมตัวสำหรับ Session 2 On-site Workshops",
      en: "Open Q&A session and preparation guide for Session 2 On-site Workshops.",
    },
  },
  {
    time: "12:15 – 13:00",
    kind: "break",
    title: { th: "พักกลางวัน", en: "Lunch Break" },
    detail: {
      th: "รายละเอียดอาหารกลางวันแจ้งแยกตามสถานที่ในอีเมลยืนยัน",
      en: "Lunch arrangements differ by venue and are confirmed in your registration email.",
    },
  },
  // === Session 2: On-site Workshops (Regional Hubs) ===
  {
    time: "13:00 – 15:00",
    title: { th: "Session 2: Hands-on Lab", en: "Session 2: Hands-on Lab" },
    detail: {
      th: "Lab 1: ออกแบบวงจรและ implement algorithm บน qBraid\nLab 2: แปลงโจทย์ domain เป็น QUBO/Circuits",
      en: "Lab 1: Circuit design & algorithm implementation on qBraid\nLab 2: Formulating domain challenges into QUBO/Circuits",
    },
    speaker: {
      th: "Mentors & TAs: มีเบียร์, เอกชัย, ดร.สรวิศ, นงลักษณ์",
      en: "Mentors & TAs: Beer, Ekkachai, Dr. Sorawit, Nonglak",
    },
  },
  {
    time: "15:00 – 16:00",
    title: { th: "Use Case Challenge Sprint", en: "Use Case Challenge Sprint" },
    detail: {
      th: "เลือก Domain Track: Energy & Smart Grid, Network Optimization, หรือ Post-Quantum Cryptography แล้วทำ Solution Architecture",
      en: "Choose your Domain Track: Energy & Smart Grid, Network Optimization, or Post-Quantum Cryptography and build a Solution Architecture.",
    },
    speaker: {
      th: "Track Leads: อ.มนัสวี (PQC), Domain Experts",
      en: "Track Leads: Aj. Manasvi (PQC), Domain Experts",
    },
  },
  {
    time: "16:00 – 16:30",
    title: { th: "Pitch & Review", en: "Pitch & Review" },
    detail: {
      th: "นำเสนอผลงาน: Problem → Solution → Presentation",
      en: "Team Pitching: Problem → Solution → Presentation",
    },
    speaker: {
      th: "Judging Panel & Mentors",
      en: "Judging Panel & Mentors",
    },
  },
  // === Session 3: Networking & Sharing ===
  {
    time: "16:30 – 17:00",
    title: { th: "Session 3: Networking Circles", en: "Session 3: Networking Circles" },
    detail: {
      th: "เลือกวงคุย:\n• Circle 1: Senior Mentorship (พี่จู๊ด) — Career growth, startup scaling\n• Circle 2: Academic & Faculty (อ.แจน) — Research grants, curriculum design\n• Circle 3: Student & Community (น้องๆ) — Learning path, hackathon experience",
      en: "Choose your circle:\n• Circle 1: Senior Mentorship (P'Jude) — Career growth, startup scaling\n• Circle 2: Academic & Faculty (Aj. Jan) — Research grants, curriculum design\n• Circle 3: Student & Community (Students) — Learning path, hackathon experience",
    },
    speaker: {
      th: "Circle Leads: พี่จู๊ด, อ.แจน, Student Leads",
      en: "Circle Leads: P'Jude, Aj. Jan, Student Leads",
    },
  },
];

export type Track = {
  name: L;
  level: L;
  status: "current" | "current-bkk" | "future";
  detail: L;
};

export const tracks: Track[] = [
  {
    name: { th: "สายเริ่มต้น (Introductory)", en: "Introductory" },
    level: { th: "ไม่ต้องมีพื้นฐาน", en: "No background required" },
    status: "current",
    detail: {
      th: "แกนหลักของงานนี้ ครอบคลุมตั้งแต่คิวบิตจนถึงการสร้างวงจรควอนตัมและรันบน simulator",
      en: "The core of this event, from qubits through to building circuits and running them on a simulator.",
    },
  },
  {
    name: { th: "Theme 1: Energy & Smart Grid", en: "Theme 1: Energy & Smart Grid" },
    level: { th: "Use Case Challenge", en: "Use Case Challenge" },
    status: "current",
    detail: {
      th: "Peak shaving, battery dispatch, grid load balancing ด้วย QUBO / QAOA / Linear-Quadratic Optimization",
      en: "Peak shaving, battery dispatch, grid load balancing using QUBO / QAOA / Linear-Quadratic Optimization",
    },
  },
  {
    name: { th: "Theme 2: Network & Telecom", en: "Theme 2: Network & Telecom" },
    level: { th: "Use Case Challenge", en: "Use Case Challenge" },
    status: "current",
    detail: {
      th: "Routing efficiency, traffic flow, topology optimization ด้วย Graph mapping & Quantum heuristics",
      en: "Routing efficiency, traffic flow, topology optimization using Graph mapping & Quantum heuristics",
    },
  },
  {
    name: { th: "Theme 3: Post-Quantum Cryptography", en: "Theme 3: Post-Quantum Cryptography" },
    level: { th: "Use Case Challenge", en: "Use Case Challenge" },
    status: "current",
    detail: {
      th: "Quantum security threats, key exchange, PQC algorithm migration & lattice-based crypto — ดูแลโดย อ.มนัสวี",
      en: "Quantum security threats, key exchange, PQC algorithm migration & lattice-based crypto — led by Aj. Manasvi",
    },
  },
  {
    name: { th: "สายเจาะลึก (Deep Dive)", en: "Deep dive" },
    level: { th: "ระดับบัณฑิตศึกษาและนักวิจัย", en: "Postgraduate and researcher level" },
    status: "future",
    detail: {
      th: "งานต่อเนื่องที่กำลังวางแผน ครอบคลุม Quantum Error Correction ฮาร์ดแวร์ และอัลกอริทึมขั้นสูง",
      en: "A planned follow-on event covering quantum error correction, hardware constraints, and advanced algorithms.",
    },
  },
];

export const syllabus: { title: L; items: L[] }[] = [
  {
    title: { th: "ช่วงเช้า — ทฤษฎี", en: "Morning — theory" },
    items: [
      { th: "ข้อมูลควอนตัมและการคำนวณควอนตัมคืออะไร", en: "What quantum information and computing are" },
      { th: "คิวบิต การซ้อนทับ และการวัด", en: "Qubits, superposition, and measurement" },
      { th: "Bloch sphere: การมองสถานะคิวบิตให้เห็นภาพ", en: "The Bloch sphere: picturing a qubit's state" },
      { th: "เกตควอนตัมพื้นฐาน — X, H, Z และ CNOT", en: "Basic quantum gates — X, H, Z, and CNOT" },
      { th: "ความพัวพันและสถานะ Bell", en: "Entanglement and the Bell states" },
    ],
  },
  {
    title: { th: "ช่วงบ่าย — ปฏิบัติ", en: "Afternoon — hands-on" },
    items: [
      { th: "ใช้งาน qBraid และ Qiskit เบื้องต้น", en: "Getting around qBraid and Qiskit" },
      { th: "สร้างและรันวงจรควอนตัมแรกของคุณ", en: "Building and running your first circuit" },
      { th: "อ่านฮิสโทแกรมผลลัพธ์และเรื่องของ shots", en: "Reading result histograms and the role of shots" },
      { th: "สร้างสถานะพัวพันด้วยตัวเอง", en: "Creating entangled states yourself" },
      { th: "กรณีใช้งานจริงและเส้นทางอาชีพสายควอนตัม", en: "Real-world use cases and quantum career paths" },
    ],
  },
];

/* ------------------------------------------------------------
   ตารางวิทยากรจำแนกตามวันและเวลา (Day-by-Day Speaker Schedule)
   ------------------------------------------------------------ */

export type SpeakerSession = {
  id: string;
  time: string;
  duration: L;
  title: L;
  speaker: {
    name: L;
    role?: L;
    org?: L;
    photo?: string;
    portraits?: { name: L; photo: string }[];
  };
  detail?: L;
  status: "Confirmed" | "TBC";
  note?: L;
};

export type DayScheduleGroup = {
  id: string;
  dateStr: string;
  dayLabel: L;
  sessionType: L;
  description: L;
  sessions: SpeakerSession[];
};

export const dayByDaySchedule: DayScheduleGroup[] = [
  {
    id: "day-10-oct",
    dateStr: "10 ต.ค. 2026",
    dayLabel: { th: "วันเสาร์ที่ 10 ตุลาคม 2026", en: "Saturday, 10 October 2026" },
    sessionType: { th: "Online Lecture Session 1", en: "Online Lecture Session 1" },
    description: {
      th: "ปูพื้นฐานภาพรวมของเทคโนโลยีควอนตัม การประยุกต์ใช้งานด้าน Optimization และทฤษฎีควอนตัมพื้นฐาน",
      en: "Foundations of quantum technology, optimization use cases, and quantum fundamentals.",
    },
    sessions: [
      {
        id: "s1-overview",
        time: "13:30 – 14:00 น.",
        duration: { th: "30 นาที", en: "30 mins" },
        title: { th: "Overview: ทำไมต้องควอนตัม และเส้นทางอาชีพสายควอนตัม", en: "Overview: Why Quantum & Quantum Career Paths" },
        speaker: {
          name: { th: "รศ. ดร. วรวัฒน์ มีวาสนา", en: "Assoc. Prof. Dr. Worawat Meevasana" },
          role: { th: "ที่ปรึกษาและหัวหน้าโครงการ", en: "Advisor & Project Lead" },
          org: { th: "มหาวิทยาลัยเทคโนโลยีสุรนารี", en: "Suranaree University of Technology" },
          photo: asset("/assets/photos/white-speakers/worawat.webp"),
        },
        detail: {
          th: "เปิดภาพรวมของโครงการ Qiskit Fall Fest 2026 ในประเทศไทย โอกาสและการเตรียมความพร้อมสู่สายอาชีพ Quantum",
          en: "Overview of Qiskit Fall Fest 2026 Thailand, opportunities, and preparing for careers in quantum technology.",
        },
        status: "Confirmed",
      },
      {
        id: "s1-optimization",
        time: "14:00 – 15:00 น.",
        duration: { th: "1 ชั่วโมง", en: "1 hour" },
        title: { th: "Quantum Technology Use Case (Optimization)", en: "Quantum Technology Use Case (Optimization)" },
        speaker: {
          name: { th: "ดร. จิรวัฒน์ ตั้งปณิธานนท์", en: "Dr. Jirawat Tangpanitanon" },
          role: { th: "Co-Founder & CEO", en: "Co-Founder & CEO" },
          org: { th: "Quantum Technology Foundation (Thailand) [QTFT]", en: "QTFT" },
          photo: asset("/assets/photos/aj til.jpg"),
        },
        detail: {
          th: "Deploying Quantum Computing Live in Logistics Operations: Some Challenges and How to Overcome",
          en: "Deploying Quantum Computing Live in Logistics Operations: Some Challenges and How to Overcome",
        },
        status: "Confirmed",
      },
      {
        id: "s1-fundamental",
        time: "15:00 – 17:00 น.",
        duration: { th: "2 ชั่วโมง", en: "2 hours" },
        title: { th: "Quantum Fundamental (Basic)", en: "Quantum Fundamental (Basic)" },
        speaker: {
          name: { th: "ดร. ธนภัทร ดีสุวรรณ (อาจารย์โอม)", en: "Dr. Tanapat Deesuwan (Aj. Ohm)" },
          role: { th: "อาจารย์ประจำภาควิชาฟิสิกส์", en: "Lecturer, Department of Physics" },
          org: { th: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (มจธ.)", en: "KMUTT" },
          photo: asset("/assets/photos/white-speakers/tanapat.webp"),
        },
        detail: {
          th: "ปูพื้นฐานแนวคิดทางควอนตัม คิวบิต เกตควอนตัม และการคำนวณเบื้องต้น",
          en: "Fundamental quantum concepts, qubits, quantum gates, and basic computations.",
        },
        status: "TBC",
        note: { th: "กำหนดลงตาราง (TBC)", en: "Scheduled (TBC)" },
      },
    ],
  },
  {
    id: "day-17-oct",
    dateStr: "17 ต.ค. 2026",
    dayLabel: { th: "วันเสาร์ที่ 17 ตุลาคม 2026", en: "Saturday, 17 October 2026" },
    sessionType: { th: "Online Lecture Session 2", en: "Online Lecture Session 2" },
    description: {
      th: "เจาะลึกแพลตฟอร์มคลาวด์ qBraid สำหรับรัน Qiskit และการผสาน Quantum เข้ากับปัญญาประดิษฐ์ (Quantum AI)",
      en: "Hands-on with qBraid Cloud Platform for Qiskit and Quantum Artificial Intelligence (Quantum AI).",
    },
    sessions: [
      {
        id: "s2-qbraid",
        time: "14:00 – 15:00 น.",
        duration: { th: "1 ชั่วโมง", en: "1 hour" },
        title: { th: "Lecture 2: qBraid Platform & Optimization", en: "Lecture 2: qBraid Platform & Optimization" },
        speaker: {
          name: { th: "ดร. Ricky Young & คุณ Harshit Gupta", en: "Dr. Ricky Young & Harshit Gupta" },
          role: { th: "Quantum Software Engineers", en: "Quantum Software Engineers" },
          org: { th: "qBraid", en: "qBraid" },
          photo: asset("/assets/photos/white-speakers/ricky.webp"),
          portraits: [
            { name: { th: "ดร. Ricky Young", en: "Dr. Ricky Young" }, photo: asset("/assets/photos/white-speakers/ricky.webp") },
            { name: { th: "คุณ Harshit Gupta", en: "Harshit Gupta" }, photo: asset("/assets/photos/white-speakers/harshit.webp") },
          ],
        },
        detail: {
          th: "การเข้าใช้งาน qBraid Cloud Platform การตั้งค่า Environment & SDK และ Workflow การรัน Qiskit",
          en: "Working on qBraid Cloud Platform, setting up environment & SDK, and running Qiskit algorithms.",
        },
        status: "Confirmed",
      },
      {
        id: "s2-quantum-ai",
        time: "15:00 – 16:00 น.",
        duration: { th: "1 ชั่วโมง", en: "1 hour" },
        title: { th: "Quantum AI (ควอนตัมกับปัญญาประดิษฐ์)", en: "Quantum AI" },
        speaker: {
          name: { th: "ผศ. ดร. ชาญวิทย์ แก้วกสิ", en: "Asst. Prof. Dr. Chanwit Kaewkasi" },
          role: { th: "Chief Technology Officer", en: "Chief Technology Officer" },
          org: { th: "Centillex", en: "Centillex" },
          photo: asset("/assets/photos/white-speakers/chanwit.webp"),
        },
        detail: {
          th: "สำรวจจุดตัดของเทคโนโลยี Quantum Computing และ AI โอกาสและความท้าทายในยุคถัดไป",
          en: "Exploring the intersection of Quantum Computing and AI, future opportunities, and breakthroughs.",
        },
        status: "Confirmed",
      },
    ],
  },
  {
    id: "day-24-oct",
    dateStr: "24 ต.ค. 2026",
    dayLabel: { th: "วันเสาร์ที่ 24 ตุลาคม 2026", en: "Saturday, 24 October 2026" },
    sessionType: { th: "Online Lecture Session 3", en: "Online Lecture Session 3" },
    description: {
      th: "ฮาร์ดแวร์ควอนตัม NV-Center, การสื่อสารควอนตัม (Quantum Communication) และการก้าวข้ามขีดจำกัดของการประมวลผล",
      en: "Quantum Hardware (NV-Center), Quantum Communication, and computing beyond classical boundaries.",
    },
    sessions: [
      {
        id: "s3-hardware",
        time: "14:00 – 15:00 น.",
        duration: { th: "1 ชั่วโมง", en: "1 hour" },
        title: { th: "Quantum Hardware (NV-Center in Diamond)", en: "Quantum Hardware (NV-Center in Diamond)" },
        speaker: {
          name: { th: "ผศ. ดร. สรวิศ แสงทวีสิน", en: "Asst. Prof. Dr. Sorawis Sangtawesin" },
          role: { th: "อาจารย์ประจำสาขาวิชาฟิสิกส์", en: "Lecturer, School of Physics" },
          org: { th: "มหาวิทยาลัยเทคโนโลยีสุรนารี", en: "Suranaree University of Technology" },
          photo: asset("/assets/photos/white-speakers/sorawis.webp"),
        },
        detail: {
          th: "การทำงานของเทคโนโลยีฮาร์ดแวร์ควอนตัม NV-Center ในเพชร สู่การสร้างเซนเซอร์และคิวบิตที่ใช้งานจริง",
          en: "Working principles of NV-Center in diamond quantum hardware for practical sensors and qubits.",
        },
        status: "Confirmed",
      },
      {
        id: "s3-communication",
        time: "15:00 – 16:00 น.",
        duration: { th: "1 ชั่วโมง", en: "1 hour" },
        title: { th: "Quantum Communication", en: "Quantum Communication" },
        speaker: {
          name: { th: "ผศ. ดร. ปรือ กลสุวรรณ", en: "Asst. Prof. Dr. Pruet Kalasuwan" },
          role: { th: "ผู้เชี่ยวชาญด้านการสื่อสารควอนตัม & Southern Node Lead", en: "Quantum Communication Expert & Southern Node Lead" },
          org: { th: "มหาวิทยาลัยสงขลานครินทร์", en: "Prince of Songkla University" },
          photo: asset("/assets/photos/white-speakers/pruet.webp"),
        },
        detail: {
          th: "หลักการ Quantum Key Distribution (QKD) เครือข่ายการสื่อสารที่ปลอดภัยในยุคควอนตัม",
          en: "Quantum Key Distribution (QKD) principles and securing communication networks in the quantum era.",
        },
        status: "Confirmed",
      },
      {
        id: "s3-beyond-ai",
        time: "16:00 – 17:30 น.",
        duration: { th: "1.5 ชั่วโมง", en: "1.5 hours" },
        title: { th: "The wall beyond AI: Where computation stops, and what comes next?", en: "The wall beyond AI: Where computation stops, and what comes next?" },
        speaker: {
          name: { th: "ดร. Choong Pak Shen & Tan Chun Loong", en: "Dr. Choong Pak Shen & Tan Chun Loong" },
          role: { th: "Regional Quantum Partners & Founders", en: "Regional Quantum Partners & Founders" },
          org: { th: "Monash University Malaysia & Quantum Wings", en: "Monash University Malaysia & Quantum Wings" },
          photo: asset("/assets/photos/white-speakers/tan-chun-loong-sharp.png"),
          portraits: [
            { name: { th: "ดร. Choong Pak Shen", en: "Dr. Choong Pak Shen" }, photo: asset("/assets/photos/choong-pak-shen.jpg") },
            { name: { th: "Tan Chun Loong", en: "Tan Chun Loong" }, photo: asset("/assets/photos/white-speakers/tan-chun-loong-sharp.png") },
          ],
        },
        detail: {
          th: "การบรรยายระดับนานาชาติเกี่ยวกับขีดจำกัดของการประมวลผล AI แบบดั้งเดิม และพลังของควอนตัมในการก้าวข้ามกำแพงนี้",
          en: "Special lecture on the limits of classical AI compute and how quantum architectures break through the wall.",
        },
        status: "Confirmed",
      },
    ],
  },
  {
    id: "day-onsite-workshops",
    dateStr: "จะประกาศภายหลัง",
    dayLabel: { th: "On-site Workshops (จะประกาศวันจัดงานภายหลัง)", en: "On-site Workshops (To be announced later)" },
    sessionType: { th: "Regional Workshop Hubs (On-site)", en: "Regional Workshop Hubs (On-site)" },
    description: {
      th: "เวิร์กช็อปลงมือปฏิบัติการจริงในแต่ละภูมิภาค วันและเวลาจัดงานจะประกาศให้ทราบอย่างเป็นทางการเร็ว ๆ นี้",
      en: "Hands-on workshops across regional hubs. Dates and timings will be announced soon.",
    },
    sessions: [],
  },
];
