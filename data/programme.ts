import type { L } from "@/lib/i18n";

export type Slot = {
  time: string;
  title: L;
  detail: L;
  speaker?: L;
  kind?: "session" | "break" | "admin";
  tbc?: boolean;
};

/** ตารางเวลาหลัก ใช้ทั้งงานที่ มทส. และ True Digital Park */
export const agenda: Slot[] = [
  {
    time: "08:30 – 09:00",
    kind: "admin",
    title: { th: "ลงทะเบียนหน้างาน", en: "Registration" },
    detail: {
      th: "รับป้ายชื่อ ตรวจสอบว่าบัญชี qBraid ใช้งานได้ และเชื่อมต่อ Wi-Fi ให้เรียบร้อยก่อนเริ่ม",
      en: "Collect your badge, check that your qBraid account works, and get onto the Wi-Fi before we begin.",
    },
  },
  {
    time: "09:00 – 10:00",
    title: {
      th: "Intro to Qiskit บน qBraid — ทฤษฎี (ก)",
      en: "Intro to Qiskit on qBraid — theory (a)",
    },
    detail: {
      th: "ปูพื้นข้อมูลควอนตัมและการคำนวณควอนตัมผ่านแพลตฟอร์ม qBraid เริ่มจากคิวบิตคืออะไร ทำไมมันถึงต่างจากบิต",
      en: "An introduction to quantum information and computing via qBraid: what a qubit is, and why it differs from a bit.",
    },
    tbc: true,
  },
  {
    time: "10:00 – 11:00",
    title: {
      th: "Intro to Qiskit บน qBraid — ทฤษฎี (ข)",
      en: "Intro to Qiskit on qBraid — theory (b)",
    },
    detail: {
      th: "พื้นฐานวงจรควอนตัมและเกตด้วย Qiskit — เกต X, H, CNOT และการอ่านผลจากการวัด",
      en: "Fundamentals of quantum circuits and gates using Qiskit — the X, H, and CNOT gates, and how to read measurement results.",
    },
    tbc: true,
  },
  {
    time: "11:00 – 12:00",
    title: { th: "ลงมือทำ ภาค 1", en: "Hands-on, part 1" },
    detail: {
      th: "เขียนโค้ดจริงบน qBraid สร้างวงจรแรกของคุณและรันดูผล มีทีม TA เดินดูแลตลอด ติดตรงไหนยกมือได้เลย",
      en: "Write real code on qBraid: build your first circuit and run it. Teaching assistants circulate throughout — put your hand up whenever you get stuck.",
    },
  },
  {
    time: "12:00 – 13:00",
    kind: "break",
    title: { th: "พักกลางวัน", en: "Lunch" },
    detail: {
      th: "รายละเอียดอาหารกลางวันแจ้งแยกตามสถานที่ในอีเมลยืนยัน",
      en: "Lunch arrangements differ by venue and are confirmed in your registration email.",
    },
    tbc: true,
  },
  {
    time: "13:00 – 14:00",
    title: { th: "ลงมือทำ ภาค 2", en: "Hands-on, part 2" },
    detail: {
      th: "ต่อยอดจากภาคเช้า สร้างสถานะพัวพัน (entanglement) และทดลองดัดแปลงวงจรของตัวเอง",
      en: "Building on the morning: create entangled states and experiment with modifying your own circuits.",
    },
  },
  {
    time: "14:00 – 15:00",
    title: {
      th: "ควอนตัมใช้ทำอะไรได้ และเส้นทางอาชีพสายควอนตัม",
      en: "Quantum use cases and career paths",
    },
    detail: {
      th: "ความสำคัญของเทคโนโลยีควอนตัม โอกาสในระดับภูมิภาค และบทบาทของ QTRiC ในการผลักดันระบบนิเวศควอนตัมของไทย",
      en: "Why quantum technology matters, what the regional opportunities look like, and QTRiC's role in building Thailand's quantum ecosystem.",
    },
    speaker: {
      th: "รศ. ดร. วรวัฒน์ มีวาสนา",
      en: "Assoc. Prof. Dr. Worawat Meevasana",
    },
  },
  {
    time: "15:00 – 15:15",
    kind: "break",
    title: { th: "พักเบรก", en: "Break" },
    detail: { th: "พักดื่มน้ำ ยืดเส้นยืดสาย", en: "A short pause for refreshments." },
  },
  {
    time: "15:15 – 16:15",
    title: {
      th: "เครือข่ายและกรณีใช้งานจริง",
      en: "Networking and use cases",
    },
    detail: {
      th: "แนะนำแนวคิดเพื่อจุดประกายก่อนส่งต่อไปยังงาน Deep Dive ที่จะจัดต่อเนื่อง พร้อมเปิดพื้นที่ให้ผู้เข้าร่วมได้คุยกันเอง",
      en: "Ideas to spark what comes next, ahead of our follow-on deep-dive events — plus open space for participants to talk with one another.",
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
    name: { th: "สายกรณีใช้งานและอุตสาหกรรม", en: "Use case and industry" },
    level: { th: "รู้พื้นฐานแล้ว", en: "Some background helpful" },
    status: "current-bkk",
    detail: {
      th: "เซสชันช่วงบ่ายของงานที่ True Digital Park เน้นการหาค่าที่เหมาะที่สุดและงานด้านการเงิน",
      en: "Afternoon sessions at the True Digital Park edition, focused on optimisation and finance.",
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
