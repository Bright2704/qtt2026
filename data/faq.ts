import type { L } from "@/lib/i18n";

export const faq: { q: L; a: L }[] = [
  {
    q: { th: "ต้องมีพื้นฐานควอนตัมมาก่อนไหม", en: "Do I need a quantum background?" },
    a: {
      th: "ไม่ต้องเลย งานนี้ออกแบบมาสำหรับคนที่เริ่มจากศูนย์จริง ๆ ขอแค่คณิตศาสตร์ระดับมัธยมปลายและความอยากรู้ เราเริ่มจากคำถามว่าคิวบิตคืออะไร",
      en: "Not at all. The day is designed for people starting from zero. High school mathematics and curiosity are enough — we begin by asking what a qubit even is.",
    },
  },
  {
    q: { th: "ต้องเขียนโปรแกรมเป็นไหม", en: "Do I need to know how to code?" },
    a: {
      th: "ถ้าเคยเขียน Python มาบ้างจะสนุกขึ้น แต่ไม่ใช่ข้อบังคับ ช่วงลงมือทำมีทีม TA อย่างน้อยห้าคนเดินดูแล ติดตรงไหนยกมือได้ทันที",
      en: "Some Python makes it more fun, but it is not required. At least five teaching assistants circulate during the hands-on sessions — put your hand up whenever you are stuck.",
    },
  },
  {
    q: { th: "เสียค่าใช้จ่ายไหม", en: "Is there a fee?" },
    a: {
      th: "ไม่เสีย ไม่มีค่าลงทะเบียนใด ๆ แต่ค่าเดินทาง ที่พัก และอาหารนอกเหนือจากที่จัดให้ ผู้เข้าร่วมรับผิดชอบเอง",
      en: "No. Admission is free. Travel, accommodation, and any meals beyond those provided are at your own expense.",
    },
  },
  {
    q: { th: "ต้องเอาคอมพิวเตอร์มาเองไหม", en: "Do I have to bring a laptop?" },
    a: {
      th: "ต้องเอามาเอง ทุกคน ไม่มีข้อยกเว้น เราไม่มีเครื่องสำรองให้ ขอให้ชาร์จไฟมาเต็มและพกสายชาร์จมาด้วย เครื่องที่เปิดเบราว์เซอร์ได้ก็เพียงพอ",
      en: "Yes — everyone, without exception. We have no spare machines. Arrive fully charged and bring your charger. Anything that runs a modern browser is enough.",
    },
  },
  {
    q: { th: "ต้องติดตั้งโปรแกรมอะไรล่วงหน้าไหม", en: "Do I need to install anything?" },
    a: {
      th: "ไม่ต้อง ทุกอย่างรันบน qBraid ผ่านเบราว์เซอร์ ขอแค่สมัครบัญชี qBraid ไว้ล่วงหน้าและลองล็อกอินสักครั้งก่อนวันงาน",
      en: "No. Everything runs on qBraid in the browser. Just create a qBraid account beforehand and log in once to check it works.",
    },
  },
  {
    q: {
      th: "จะได้รันโค้ดบนคอมพิวเตอร์ควอนตัมจริงไหม",
      en: "Will I run code on real quantum hardware?",
    },
    a: {
      th: "ไม่ได้ในงานนี้ โปรแกรม Qiskit Fall Fest ให้ใช้ simulator เท่านั้น ไม่มีเครดิตสำหรับเครื่องจริง แต่โค้ดที่คุณเขียนคือ Qiskit ตัวจริง ยิงไปเครื่องจริงได้ทันทีเมื่อคุณมีสิทธิ์เข้าถึง",
      en: "Not at this event. The Fall Fest programme provides simulator access only, without hardware credits. That said, the code you write is real Qiskit — it will run on actual hardware the moment you have access.",
    },
  },
  {
    q: { th: "ได้ใบรับรองไหม", en: "Will I get a certificate?" },
    a: {
      th: "ได้ ผู้เข้าร่วมจะได้รับ certificate of participation จาก IBM Quantum ซึ่งใส่ใน CV และโปรไฟล์ LinkedIn ได้",
      en: "Yes. Participants receive an IBM Quantum certificate of participation, suitable for your CV and LinkedIn profile.",
    },
  },
  {
    q: { th: "งานจัดเป็นภาษาอะไร", en: "What language is the event in?" },
    a: {
      th: "บรรยายภาษาไทยเป็นหลัก สไลด์และโค้ดเป็นภาษาอังกฤษ หากมีวิทยากรรับเชิญจากต่างประเทศจะบรรยายเป็นภาษาอังกฤษ",
      en: "Mainly Thai, with slides and code in English. Any international guest speakers will present in English.",
    },
  },
  {
    q: { th: "เข้าร่วมแบบออนไลน์ได้ไหม", en: "Can I attend online?" },
    a: {
      th: "ปฐมนิเทศจัดออนไลน์และมีบันทึกย้อนหลัง ส่วนงานหลักเน้นแบบมาที่สถานที่จริง เพราะเป็นเวิร์กชอปลงมือทำที่ต้องมีคนช่วยประกบ เรากำลังพิจารณาว่าจะถ่ายทอดสดบางเซสชันหรือไม่",
      en: "The orientation is online and recorded. The main workshop is on-site by design, because hands-on sessions need people beside you. We are considering streaming selected sessions.",
    },
  },
  {
    q: { th: "มีอาหารกลางวันให้ไหม", en: "Is lunch provided?" },
    a: {
      th: "รายละเอียดต่างกันไปตามสถานที่ เราจะยืนยันให้ทราบในอีเมลยืนยันการลงทะเบียน หากคุณมีข้อจำกัดด้านอาหาร กรุณาระบุในฟอร์มลงทะเบียน",
      en: "Arrangements differ by venue and are confirmed in your registration email. Please note any dietary requirements on the registration form.",
    },
  },
  {
    q: { th: "ลงทะเบียนแล้วมาไม่ได้ ต้องทำอย่างไร", en: "What if I register and cannot attend?" },
    a: {
      th: "แจ้งเราทางอีเมลหรือ Discord ให้เร็วที่สุด เราจะได้ปล่อยที่นั่งให้คนในรายชื่อสำรอง ที่นั่งมีจำกัดจริง ๆ และทุกที่นั่งมีค่า",
      en: "Tell us by email or on Discord as soon as you can, so we can release your seat to someone on the waitlist. Seats are genuinely scarce.",
    },
  },
  {
    q: {
      th: "มาเป็นกลุ่มจากโรงเรียนหรือมหาวิทยาลัยได้ไหม",
      en: "Can we come as a group from a school or university?",
    },
    a: {
      th: "ได้ แต่กรุณาติดต่อทีมงานล่วงหน้าเพื่อจัดสรรที่นั่ง เราอยากให้ผู้เข้าร่วมมาจากหลายสถาบัน จึงต้องบริหารสัดส่วนให้สมดุล",
      en: "Yes, but please contact us in advance so we can plan seating. We aim for a mix of institutions, so we balance group allocations.",
    },
  },
  {
    q: { th: "จัดที่จังหวัดของฉันได้ไหม", en: "Will you come to my province?" },
    a: {
      th: "เรากำลังพิจารณาเชียงใหม่และสงขลาตามงบประมาณที่ได้รับ ลงชื่อรับแจ้งเตือนไว้ได้ จำนวนคนที่สนใจช่วยเราขอสนับสนุนได้จริง",
      en: "We are exploring Chiang Mai and Songkhla, subject to funding. Register your interest — demonstrated demand genuinely helps us make the case.",
    },
  },
  {
    q: { th: "อยากเป็น TA ช่วยงาน ต้องทำอย่างไร", en: "How do I become a teaching assistant?" },
    a: {
      th: "เราเปิดรับ TA ห้าคนขึ้นไป ถ้าคุณเคยเขียน Python และอยากช่วยเพื่อนในช่วงลงมือทำ ติดต่อเรามาได้เลย มีเซสชันเตรียมความพร้อมให้ก่อนวันงาน และ TA ทุกคนได้รับใบรับรอง",
      en: "We are recruiting five or more. If you have written Python and want to help others through the hands-on work, get in touch. There is a preparation session beforehand, and every TA receives a certificate.",
    },
  },
];
