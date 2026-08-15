import type { L } from "@/lib/i18n";

export const checklist: { title: L; detail: L; time: string }[] = [
  {
    title: { th: "สมัครบัญชี qBraid ด้วยอีเมลเดียวกับที่ลงทะเบียน", en: "Create a qBraid account with the email you registered with" },
    detail: {
      th: "ฟรี ใช้อีเมลเดิมเพื่อให้เราจับคู่บัญชีกับรายชื่อผู้เข้าร่วมได้",
      en: "It is free. Use the same address so we can match your account to your registration.",
    },
    time: "5 min",
  },
  {
    title: { th: "ล็อกอิน qBraid แล้วรัน notebook ตัวอย่างให้ผ่านหนึ่งครั้ง", en: "Log in and run one sample notebook end to end" },
    detail: {
      th: "ถ้ารันผ่านแล้วแปลว่าเครื่องคุณพร้อม ไม่ต้องมานั่งแก้ปัญหาหน้างาน",
      en: "If it runs, your setup works — and you will not spend workshop time debugging it.",
    },
    time: "10 min",
  },
  {
    title: { th: "ดูวิดีโอปฐมนิเทศ หรือเข้าร่วมรอบสด", en: "Watch the orientation session, live or recorded" },
    detail: {
      th: "หนึ่งชั่วโมง อธิบายภาพรวมของงานและปูพื้นควอนตัมแบบเบา ๆ",
      en: "One hour covering the shape of the day and a gentle introduction to the ideas.",
    },
    time: "60 min",
  },
  {
    title: { th: "อ่านศัพท์ควอนตัมสิบคำด้านล่าง", en: "Read the ten terms below" },
    detail: {
      th: "จะได้ไม่สะดุดเมื่อวิทยากรพูดคำเหล่านี้ในวันงาน",
      en: "So none of them stop you when a speaker uses them on the day.",
    },
    time: "10 min",
  },
  {
    title: { th: "เข้า Discord ของงานและแนะนำตัว", en: "Join the event Discord and introduce yourself" },
    detail: {
      th: "เป็นช่องทางหลักที่เราใช้ประกาศและตอบคำถามก่อนวันงาน",
      en: "This is where we post announcements and answer questions before the day.",
    },
    time: "5 min",
  },
  {
    title: { th: "ชาร์จโน้ตบุ๊กให้เต็มและเตรียมสายชาร์จมาด้วย", en: "Charge your laptop and pack the charger" },
    detail: {
      th: "ต้องนำโน้ตบุ๊กมาเอง ทุกคน ไม่มีข้อยกเว้น เราไม่มีเครื่องสำรองให้",
      en: "Everyone must bring their own laptop. We have no spares.",
    },
    time: "วันงาน",
  },
];

export const glossary: { term: L; def: L }[] = [
  {
    term: { th: "คิวบิต (Qubit)", en: "Qubit" },
    def: {
      th: "หน่วยข้อมูลของคอมพิวเตอร์ควอนตัม เทียบได้กับบิต แต่เก็บสถานะผสมของ 0 และ 1 ได้",
      en: "The unit of quantum information — like a bit, but able to hold a blend of 0 and 1.",
    },
  },
  {
    term: { th: "การซ้อนทับ (Superposition)", en: "Superposition" },
    def: {
      th: "คิวบิตอยู่ในสถานะผสมของ 0 และ 1 พร้อมกันได้ จนกว่าจะถูกวัด",
      en: "A qubit holding both 0 and 1 at once, until it is measured.",
    },
  },
  {
    term: { th: "ความพัวพัน (Entanglement)", en: "Entanglement" },
    def: {
      th: "คิวบิตสองตัวเชื่อมกันจนวัดตัวหนึ่งแล้วรู้อีกตัวทันที ไม่ว่าจะอยู่ห่างกันแค่ไหน",
      en: "Two qubits linked so that measuring one tells you about the other, however far apart they are.",
    },
  },
  {
    term: { th: "การวัด (Measurement)", en: "Measurement" },
    def: {
      th: "การอ่านค่าคิวบิต ทำแล้วสถานะซ้อนทับจะยุบเหลือ 0 หรือ 1 อย่างใดอย่างหนึ่ง",
      en: "Reading a qubit. Doing so collapses the superposition to either 0 or 1.",
    },
  },
  {
    term: { th: "เกตควอนตัม (Quantum gate)", en: "Quantum gate" },
    def: {
      th: "ปฏิบัติการที่กระทำกับคิวบิต เช่น X (พลิกค่า), H (สร้างการซ้อนทับ), CNOT (สร้างความพัวพัน)",
      en: "An operation on qubits — X flips, H creates superposition, CNOT creates entanglement.",
    },
  },
  {
    term: { th: "วงจรควอนตัม (Quantum circuit)", en: "Quantum circuit" },
    def: {
      th: "ลำดับของเกตที่ประกอบกันเป็นโปรแกรมควอนตัมหนึ่งโปรแกรม",
      en: "A sequence of gates that together make up one quantum program.",
    },
  },
  {
    term: { th: "Bloch sphere", en: "Bloch sphere" },
    def: {
      th: "ทรงกลมที่ใช้วาดสถานะของคิวบิตหนึ่งตัวให้เห็นภาพ ขั้วบนคือ 0 ขั้วล่างคือ 1",
      en: "A sphere for picturing one qubit's state: north pole is 0, south pole is 1.",
    },
  },
  {
    term: { th: "Qiskit", en: "Qiskit" },
    def: {
      th: "ไลบรารีภาษา Python ของ IBM สำหรับเขียนและรันโปรแกรมควอนตัม",
      en: "IBM's Python library for writing and running quantum programs.",
    },
  },
  {
    term: { th: "ตัวจำลอง (Simulator)", en: "Simulator" },
    def: {
      th: "โปรแกรมที่จำลองการทำงานของคอมพิวเตอร์ควอนตัมบนเครื่องธรรมดา — เป็นสิ่งที่เราจะใช้ในงานนี้",
      en: "Software that mimics a quantum computer on ordinary hardware — what we use in this event.",
    },
  },
  {
    term: { th: "Shots", en: "Shots" },
    def: {
      th: "จำนวนครั้งที่รันวงจรซ้ำเพื่อเก็บสถิติ เพราะผลลัพธ์ควอนตัมเป็นความน่าจะเป็น",
      en: "How many times a circuit is repeated to gather statistics, since quantum results are probabilistic.",
    },
  },
];

export const prework: { title: L; body: L; question: L }[] = [
  {
    title: { th: "รัน Hello Quantum", en: "Run Hello Quantum" },
    body: {
      th: "สร้างวงจร 1 คิวบิต ใส่เกต H หนึ่งตัว แล้ววัดผล 1024 shots",
      en: "Build a one-qubit circuit, apply a single H gate, and measure over 1024 shots.",
    },
    question: {
      th: "ทำไมผลถึงได้ประมาณ 50/50 แต่ไม่ใช่ 50/50 เป๊ะ ๆ",
      en: "Why does the result come out near 50/50 but rarely exactly 50/50?",
    },
  },
  {
    title: { th: "สร้างสถานะ Bell", en: "Create a Bell state" },
    body: {
      th: "ใช้คิวบิต 2 ตัว ใส่ H ที่ตัวแรก ตามด้วย CNOT แล้ววัดผล",
      en: "Use two qubits: apply H to the first, then a CNOT, then measure.",
    },
    question: {
      th: "ทำไมถึงเห็นแค่ 00 กับ 11 แต่ไม่มี 01 หรือ 10 เลย",
      en: "Why do you only see 00 and 11, and never 01 or 10?",
    },
  },
  {
    title: { th: "ลองเปลี่ยนเกตดู", en: "Change a gate and see" },
    body: {
      th: "เอาเกต X มาใส่ก่อน H แล้วดูว่าผลลัพธ์เปลี่ยนไปอย่างไร",
      en: "Put an X gate before the H and observe how the outcome changes.",
    },
    question: {
      th: "คุณสังเกตอะไรได้บ้าง — ข้อนี้ไม่มีคำตอบผิด เก็บไว้คุยกันในงาน",
      en: "What do you notice? There is no wrong answer — bring it to the workshop.",
    },
  },
];
