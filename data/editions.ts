import type { L } from "@/lib/i18n";

export type EditionStatus = "open" | "soon" | "planned" | "closed";

export type Edition = {
  id: string;
  slug: string;
  name: L;
  city: L;
  /** ISO date — ใส่ null ถ้ายังไม่เคาะวัน */
  date: string | null;
  dateConfirmed: boolean;
  dateLabel: L;
  start: string;
  end: string;
  capacity: number | null;
  registered: number;
  status: EditionStatus;
  audience: L;
  summary: L;
  mapQuery: string;
  address: L;
  travel: { icon: string; text: L }[];
  image: string;
};

export const statusLabel: Record<EditionStatus, L> = {
  open: { th: "เปิดรับลงทะเบียน", en: "Registration open" },
  soon: { th: "เร็ว ๆ นี้", en: "Coming soon" },
  planned: { th: "อยู่ระหว่างวางแผน", en: "Being planned" },
  closed: { th: "ปิดรับแล้ว", en: "Closed" },
};

export const editions: Edition[] = [
  {
    id: "sut",
    slug: "sut",
    name: {
      th: "มหาวิทยาลัยเทคโนโลยีสุรนารี",
      en: "Suranaree University of Technology",
    },
    city: { th: "นครราชสีมา", en: "Nakhon Ratchasima" },
    date: "2026-10-25",
    dateConfirmed: false,
    dateLabel: { th: "25 ตุลาคม 2026", en: "25 October 2026" },
    start: "08:30",
    end: "16:15",
    capacity: 50,
    registered: 0,
    status: "open",
    audience: {
      th: "นักเรียนมัธยมปลาย นักศึกษา และอาจารย์ในภาคอีสาน",
      en: "High school students, university students, and faculty across north-eastern Thailand",
    },
    summary: {
      th: "งานหลักของ Qiskit Fall Fest 2026 ในประเทศไทย จัดที่มหาวิทยาลัยเจ้าภาพ หนึ่งวันเต็มตั้งแต่ปูพื้นทฤษฎีจนถึงลงมือเขียนวงจรควอนตัมของตัวเอง มีทีม TA ประกบตลอดช่วงปฏิบัติ",
      en: "The flagship Thai edition, hosted on the home campus. A full day from first principles to writing your own quantum circuits, with teaching assistants beside you throughout the hands-on sessions.",
    },
    mapQuery: "Suranaree University of Technology, Nakhon Ratchasima",
    address: {
      th: "มหาวิทยาลัยเทคโนโลยีสุรนารี 111 ถ.มหาวิทยาลัย ต.สุรนารี อ.เมือง จ.นครราชสีมา 30000",
      en: "Suranaree University of Technology, 111 University Avenue, Suranaree, Mueang, Nakhon Ratchasima 30000",
    },
    travel: [
      {
        icon: "i-pin",
        text: {
          th: "ห้องประชุม: รอยืนยันอาคารและเลขห้อง",
          en: "Room: building and room number to be confirmed",
        },
      },
      {
        icon: "i-laptop",
        text: {
          th: "มี Wi-Fi สำหรับผู้เข้าร่วม รายละเอียดการเชื่อมต่อแจ้งในอีเมลยืนยัน",
          en: "Wi-Fi is provided; connection details arrive with your confirmation email",
        },
      },
      {
        icon: "i-clock",
        text: {
          th: "จากตัวเมืองนครราชสีมา ประมาณ 30 นาทีโดยรถยนต์ มีที่จอดรถในมหาวิทยาลัย",
          en: "About 30 minutes by car from Nakhon Ratchasima city centre; parking available on campus",
        },
      },
    ],
    image: "/assets/venue-sut.svg",
  },
  {
    id: "bangkok",
    slug: "bangkok",
    name: { th: "ทรู ดิจิทัล พาร์ค", en: "True Digital Park" },
    city: { th: "IBM Thailand", en: "IBM Thailand" },
    date: null,
    dateConfirmed: false,
    dateLabel: { th: "รอยืนยันวันที่", en: "Date to be confirmed" },
    start: "08:30",
    end: "16:15",
    capacity: 40,
    registered: 0,
    status: "open",
    audience: {
      th: "นักพัฒนา คนทำงานสายเทคโนโลยี สตาร์ทอัพ และนักศึกษาในกรุงเทพฯ",
      en: "Developers, technology professionals, startups, and students in Bangkok",
    },
    summary: {
      th: "หลักสูตรแกนเดียวกับงานที่ มทส. แต่เซสชันช่วงบ่ายปรับให้เข้ากับคนทำงานสายเทคโนโลยี เน้นกรณีใช้งานจริงในภาคธุรกิจ เช่น การหาค่าที่เหมาะที่สุดและงานด้านการเงิน",
      en: "The same core curriculum as the SUT edition, with afternoon sessions tuned for working technologists — real industry use cases such as optimisation and finance.",
    },
    mapQuery: "True Digital Park, Sukhumvit, Bangkok",
    address: {
      th: "ทรู ดิจิทัล พาร์ค 101 ถ.สุขุมวิท แขวงบางจาก เขตพระโขนง กรุงเทพฯ 10260",
      en: "True Digital Park, 101 Sukhumvit Road, Bang Chak, Phra Khanong, Bangkok 10260",
    },
    travel: [
      {
        icon: "i-pin",
        text: {
          th: "BTS ปุณณวิถี ทางออก 1 เดินเชื่อมเข้าอาคารได้โดยตรง",
          en: "BTS Punnawithi, exit 1, with a direct covered walkway into the building",
        },
      },
      {
        icon: "i-laptop",
        text: {
          th: "มี Wi-Fi และปลั๊กไฟทุกที่นั่ง",
          en: "Wi-Fi and power at every seat",
        },
      },
      {
        icon: "i-clock",
        text: {
          th: "มีที่จอดรถในอาคาร คิดค่าบริการตามอัตราของสถานที่",
          en: "On-site parking is available at the venue's standard rates",
        },
      },
    ],
    image: "/assets/venue-bangkok.svg",
  },
  {
    id: "online",
    slug: "online",
    name: { th: "ปฐมนิเทศออนไลน์", en: "Pre-event online session" },
    city: { th: "ออนไลน์", en: "Online" },
    date: null,
    dateConfirmed: false,
    dateLabel: { th: "จัด 2 รอบ · รอยืนยันวันที่", en: "Two sessions · dates to be confirmed" },
    start: "—",
    end: "—",
    capacity: null,
    registered: 0,
    status: "soon",
    audience: {
      th: "ทุกคนที่อยากรู้ว่างานนี้เกี่ยวกับอะไร ก่อนตัดสินใจสมัคร",
      en: "Anyone who wants to know what the day involves before committing",
    },
    summary: {
      th: "หนึ่งชั่วโมง ออนไลน์ล้วน เราจัดสองรอบเพื่อให้ทุกคนเข้าได้อย่างน้อยหนึ่งครั้ง เนื้อหาคือภาพรวมของกิจกรรม สิ่งที่ต้องเตรียม และปูพื้นควอนตัมแบบเบา ๆ ไม่บังคับ แต่คนที่เข้าจะตามทันในวันงานได้ง่ายกว่ามาก",
      en: "One hour, online only, run twice so nobody misses out. It covers what the day looks like, what to prepare, and a gentle introduction to the ideas you will need. Optional — but those who attend find the workshop day much easier to follow.",
    },
    mapQuery: "",
    address: { th: "Zoom และถ่ายทอดสดทาง YouTube", en: "Zoom, with a YouTube live stream" },
    travel: [
      {
        icon: "i-globe",
        text: {
          th: "เข้าร่วมได้จากทุกที่ ลิงก์ส่งให้ทางอีเมลก่อนวันงาน",
          en: "Join from anywhere; the link arrives by email beforehand",
        },
      },
      {
        icon: "i-book",
        text: {
          th: "มีบันทึกย้อนหลังให้ดูภายหลัง",
          en: "A recording is published afterwards",
        },
      },
    ],
    image: "/assets/venue-online.svg",
  },
  {
    id: "chiangmai",
    slug: "chiangmai",
    name: {
      th: "มหาวิทยาลัยเชียงใหม่",
      en: "Chiang Mai University",
    },
    city: { th: "เชียงใหม่", en: "Chiang Mai" },
    date: null,
    dateConfirmed: false,
    dateLabel: { th: "รอยืนยันวันที่", en: "Date to be confirmed" },
    start: "08:30",
    end: "17:00",
    capacity: 30,
    registered: 0,
    status: "soon",
    audience: {
      th: "นักศึกษา อาจารย์ และผู้สนใจในภาคเหนือ",
      en: "Students, faculty, and enthusiasts in northern Thailand",
    },
    summary: {
      th: "งาน Regional Workshop Node ของภาคเหนือ จัดที่มหาวิทยาลัยเชียงใหม่ ดูแลโดย ผศ. ดร. สุกฤต สุจริตกุล ใช้หลักสูตรแกนกลางเดียวกันกับทุก Hub",
      en: "The northern regional workshop node at Chiang Mai University, led by Asst. Prof. Dr. Sukrit Sucharitakul. Same core curriculum as all hubs.",
    },
    mapQuery: "Chiang Mai University",
    address: {
      th: "มหาวิทยาลัยเชียงใหม่ ต.สุเทพ อ.เมือง จ.เชียงใหม่ 50200",
      en: "Chiang Mai University, Suthep, Mueang, Chiang Mai 50200",
    },
    travel: [
      {
        icon: "i-pin",
        text: {
          th: "ห้องประชุม: รอยืนยันอาคารและเลขห้อง",
          en: "Room: building and room number to be confirmed",
        },
      },
    ],
    image: "/assets/venue-chiangmai.svg",
  },
  {
    id: "psu",
    slug: "psu",
    name: {
      th: "มหาวิทยาลัยสงขลานครินทร์",
      en: "Prince of Songkla University",
    },
    city: { th: "สงขลา", en: "Songkhla" },
    date: null,
    dateConfirmed: false,
    dateLabel: { th: "รอยืนยันวันที่", en: "Date to be confirmed" },
    start: "08:30",
    end: "17:00",
    capacity: 30,
    registered: 0,
    status: "soon",
    audience: {
      th: "นักศึกษา อาจารย์ และผู้สนใจในภาคใต้",
      en: "Students, faculty, and enthusiasts in southern Thailand",
    },
    summary: {
      th: "งาน Regional Workshop Node ของภาคใต้ จัดที่มหาวิทยาลัยสงขลานครินทร์ ดูแลโดย ผศ. ดร. ปรือ กลัสุวรรณ ใช้หลักสูตรแกนกลางเดียวกันกับทุก Hub",
      en: "The southern regional workshop node at Prince of Songkla University, led by Asst. Prof. Dr. Pruet Kalasuwan. Same core curriculum as all hubs.",
    },
    mapQuery: "Prince of Songkla University, Hat Yai",
    address: {
      th: "มหาวิทยาลัยสงขลานครินทร์ อ.หาดใหญ่ จ.สงขลา 90110",
      en: "Prince of Songkla University, Hat Yai, Songkhla 90110",
    },
    travel: [
      {
        icon: "i-pin",
        text: {
          th: "ห้องประชุม: รอยืนยันอาคารและเลขห้อง",
          en: "Room: building and room number to be confirmed",
        },
      },
    ],
    image: "/assets/venue-psu.svg",
  },
  {
    id: "phitsanulok",
    slug: "phitsanulok",
    name: {
      th: "มหาวิทยาลัยนเรศวร",
      en: "Naresuan University",
    },
    city: { th: "พิษณุโลก", en: "Phitsanulok" },
    date: null,
    dateConfirmed: false,
    dateLabel: { th: "รอยืนยันวันที่", en: "Date to be confirmed" },
    start: "08:30",
    end: "17:00",
    capacity: 30,
    registered: 0,
    status: "planned",
    audience: {
      th: "นักศึกษา อาจารย์ และผู้สนใจในภาคเหนือตอนล่าง",
      en: "Students, faculty, and enthusiasts in the lower northern region",
    },
    summary: {
      th: "งาน Regional Workshop Node ของภาคเหนือตอนล่าง จัดที่มหาวิทยาลัยนเรศวร ดูแลโดย อ.ริน ใช้หลักสูตรแกนกลางเดียวกันกับทุก Hub",
      en: "The lower northern regional workshop node at Naresuan University, led by Aj. Rin. Same core curriculum as all hubs.",
    },
    mapQuery: "Naresuan University, Phitsanulok",
    address: {
      th: "มหาวิทยาลัยนเรศวร ต.ท่าโพธิ์ อ.เมือง จ.พิษณุโลก 65000",
      en: "Naresuan University, Tha Pho, Mueang, Phitsanulok 65000",
    },
    travel: [],
    image: "/assets/venue-phitsanulok.svg",
  },
  {
    id: "chonburi",
    slug: "chonburi",
    name: {
      th: "ภาคตะวันออก",
      en: "Eastern Region",
    },
    city: { th: "ชลบุรี", en: "Chonburi" },
    date: null,
    dateConfirmed: false,
    dateLabel: { th: "รอยืนยันวันที่", en: "Date to be confirmed" },
    start: "08:30",
    end: "17:00",
    capacity: 30,
    registered: 0,
    status: "planned",
    audience: {
      th: "นักศึกษา อาจารย์ และผู้สนใจในภาคตะวันออก",
      en: "Students, faculty, and enthusiasts in the eastern region",
    },
    summary: {
      th: "งาน Regional Workshop Node ของภาคตะวันออก ดูแลโดย อ.ไม้ ผ่านเครือข่ายพันธมิตร ใช้หลักสูตรแกนกลางเดียวกันกับทุก Hub",
      en: "The eastern regional workshop node via Associated Partner Network, led by Aj. Mai. Same core curriculum as all hubs.",
    },
    mapQuery: "Chonburi, Thailand",
    address: {
      th: "รอยืนยัน",
      en: "To be confirmed",
    },
    travel: [],
    image: "/assets/venue-chonburi.svg",
  },
];

export const bookableEditions = editions.filter((e) => e.status === "open");

export function getEdition(slug: string) {
  return editions.find((e) => e.slug === slug);
}
