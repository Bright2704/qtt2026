import type { L } from "@/lib/i18n";

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
