import type { Metadata } from "next";

/* ------------------------------------------------------------------
   ฟอนต์ IBM Plex แบบ self-host ผ่าน @fontsource
   ไม่พึ่ง Google Fonts — โหลดเร็วกว่า ไม่มีปัญหาเรื่องเครือข่ายมหาวิทยาลัย
   และไม่ต้องส่งข้อมูลผู้ใช้ออกไปนอกเซิร์ฟเวอร์ (ดีต่อ PDPA)
   ถ้าต้องการลดขนาดไฟล์อีก ให้ตัดน้ำหนักที่ไม่ได้ใช้ออกได้
   ------------------------------------------------------------------ */
import "@fontsource/ibm-plex-sans-thai/thai-300.css";
import "@fontsource/ibm-plex-sans-thai/thai-400.css";
import "@fontsource/ibm-plex-sans-thai/thai-500.css";
import "@fontsource/ibm-plex-sans-thai/thai-600.css";
import "@fontsource/ibm-plex-sans/latin-300.css";
import "@fontsource/ibm-plex-sans/latin-400.css";
import "@fontsource/ibm-plex-sans/latin-500.css";
import "@fontsource/ibm-plex-sans/latin-600.css";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "@fontsource/ibm-plex-mono/latin-500.css";

import "./globals.css";
import "./magic.css";
import { LangProvider } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollSway from "@/components/magic/ScrollSway";

const SITE_URL = "https://qtric.sut.ac.th/qff2026/";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Qiskit Fall Fest 2026: ประเทศไทย — เวิร์กชอปควอนตัมคอมพิวติง เข้าร่วมฟรี",
    template: "%s · Qiskit Fall Fest 2026: ประเทศไทย",
  },
  description:
    "เทศกาลควอนตัมคอมพิวติงระดับโลกของ IBM Quantum มาถึงประเทศไทย ตุลาคม–พฤศจิกายน 2026 ลงมือเขียนโปรแกรมควอนตัมจริงหนึ่งวันเต็ม ที่ มทส. นครราชสีมา และ True Digital Park กรุงเทพฯ เข้าร่วมฟรี ไม่ต้องมีพื้นฐาน",
  keywords: [
    "Qiskit Fall Fest",
    "ควอนตัมคอมพิวติง",
    "quantum computing thailand",
    "IBM Quantum",
    "qBraid",
    "QTRiC",
    "มหาวิทยาลัยเทคโนโลยีสุรนารี",
    "เวิร์กชอปควอนตัม",
  ],
  authors: [{ name: "QTRiC" }],
  openGraph: {
    type: "website",
    title: "Qiskit Fall Fest 2026: Thailand",
    description:
      "Hands-on quantum computing, free to join. Nakhon Ratchasima and Bangkok, October–November 2026.",
    url: SITE_URL,
    siteName: "Qiskit Fall Fest 2026: Thailand",
    locale: "th_TH",
    alternateLocale: ["en_US"],
    images: [{ url: "/assets/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qiskit Fall Fest 2026: Thailand",
    description: "Hands-on quantum computing, free to join. October–November 2026.",
    images: ["/assets/og-image.svg"],
  },
  icons: { icon: "/assets/favicon.svg", apple: "/assets/favicon.svg" },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: "#f4f2fb", width: "device-width", initialScale: 1 };

/** โครงสร้างข้อมูลให้ Google แสดงผลเป็นการ์ดอีเวนต์ */
const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  name: "Qiskit Fall Fest 2026: Thailand — SUT Edition",
  description:
    "A full day of hands-on quantum computing with Qiskit on the qBraid platform. Free to attend, no prior background required.",
  startDate: "2026-10-25T08:30:00+07:00",
  endDate: "2026-10-25T16:15:00+07:00",
  eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Suranaree University of Technology",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nakhon Ratchasima",
      addressCountry: "TH",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "QTRiC — Quantum Technology Research Initiative Consortium (Thailand)",
    url: "https://qtric.sut.ac.th/",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "THB",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}register/`,
  },
  isAccessibleForFree: true,
  inLanguage: ["th", "en"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body data-lang="th">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
        <LangProvider>
          <ScrollSway />
          <a className="skip" href="#main">
            ข้ามไปยังเนื้อหาหลัก / Skip to content
          </a>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
