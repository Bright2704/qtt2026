import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Static export — ผลลัพธ์เป็นไฟล์ HTML/CSS/JS ล้วน
   * อัปโหลดโฟลเดอร์ out/ ขึ้นเซิร์ฟเวอร์ มทส. ได้เลย ไม่ต้องมี Node บนเซิร์ฟเวอร์
   */
  output: "export",

  /**
   * ถ้าจะ deploy ที่ https://qtric.sut.ac.th/qff2026/
   * ให้เปิดสองบรรทัดนี้ (และตั้ง NEXT_PUBLIC_BASE_PATH=/qff2026 ตอน build)
   */
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || undefined,

  trailingSlash: true,

  images: {
    // static export ใช้ next/image optimizer ไม่ได้
    unoptimized: true,
  },
};

export default nextConfig;
