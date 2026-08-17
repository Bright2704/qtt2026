/**
 * ไอคอนแบบ inline — วาดเป็น path ในโค้ดเลย ไม่ต้องโหลดไฟล์ sprite
 * ทำให้ไม่มีปัญหาเรื่อง basePath ตอน deploy ใน subfolder
 * ไฟล์ public/assets/icons.svg ยังเก็บไว้ให้ฝ่ายกราฟิกใช้ต่อได้
 */

const paths: Record<string, React.ReactNode> = {
  "i-calendar": (
    <>
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  "i-pin": (
    <>
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  "i-laptop": (
    <>
      <rect x="4" y="5" width="16" height="11" rx="2" />
      <path d="M2 19h20" />
    </>
  ),
  "i-users": (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16.5 5.6a3.2 3.2 0 0 1 0 6.3M17 14.4A6 6 0 0 1 21 20" />
    </>
  ),
  "i-certificate": (
    <>
      <rect x="4" y="3" width="16" height="13" rx="2" />
      <path d="M8 7h8M8 11h5" />
      <path d="M9 16v5l3-1.8 3 1.8v-5" />
    </>
  ),
  "i-network": (
    <>
      <circle cx="12" cy="4.5" r="2.2" />
      <circle cx="4.8" cy="18" r="2.2" />
      <circle cx="19.2" cy="18" r="2.2" />
      <path d="M12 6.7 6.2 16.2M12 6.7l5.8 9.5M7 18h10" />
    </>
  ),
  "i-atom": (
    <>
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.4" />
      <ellipse cx="12" cy="12" rx="10" ry="4.4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.4" transform="rotate(-60 12 12)" />
    </>
  ),
  "i-book": (
    <>
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v16H6.5A2.5 2.5 0 0 0 4 20.5z" />
      <path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v4H6.5A2.5 2.5 0 0 1 4 20.5z" />
    </>
  ),
  "i-chat": <path d="M21 12a8 8 0 0 1-8 8H7l-4 3v-5.6A8 8 0 0 1 13 4a8 8 0 0 1 8 8z" />,
  "i-globe": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
    </>
  ),
  "i-code": <path d="M8.5 6.5 3 12l5.5 5.5M15.5 6.5 21 12l-5.5 5.5M13.5 4l-3 16" />,
  "i-spark": <path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" />,
  "i-clock": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.3l3.4 2" />
    </>
  ),
  "i-search": (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.4 15.4 21 21" />
    </>
  ),
  "i-arrow": <path d="M4 12h15M13 6l6 6-6 6" />,
  "i-chevron": <path d="M9 6l6 6-6 6" />,
  "i-check": <path d="M4 12.5 9 17.5 20 6.5" />,
  "i-x": <path d="M6 6l12 12M18 6L6 18" />,
  "i-menu": <path d="M3 7h18M3 12h18M3 17h18" />,
  "i-copy": (
    <>
      <rect x="9" y="9" width="12" height="12" rx="2.5" />
      <path d="M15 5.5A2.5 2.5 0 0 0 12.5 3h-7A2.5 2.5 0 0 0 3 5.5v7A2.5 2.5 0 0 0 5.5 15" />
    </>
  ),
  "i-download": (
    <>
      <path d="M12 3v12M7.5 10.5 12 15l4.5-4.5" />
      <path d="M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17" />
    </>
  ),
  "i-mail": (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  "i-alert": (
    <>
      <path d="M12 3.5 22 20H2z" />
      <path d="M12 10v4.5M12 17.4v.1" />
    </>
  ),
  "i-info": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.5M12 7.6v.1" />
    </>
  ),
};

export type IconName = keyof typeof paths;

export default function Icon({
  name,
  size = 24,
  className = "ico",
  strokeWidth = 1.75,
}: {
  name: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
}) {
  const body = paths[name] ?? paths["i-spark"];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {body}
    </svg>
  );
}
