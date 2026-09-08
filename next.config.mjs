/** @type {import("next").NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true,
  
    // URL ภายนอกที่ IIS เปิดให้ผู้ใช้
    basePath: "/qiskit-fall-fest-2026",
  
    // ทำให้ CSS / JS ที่อยู่ใน _next มี prefix เดียวกัน
    assetPrefix: "/qiskit-fall-fest-2026/",
  
    images: {
      unoptimized: true,
    },
  };
  
  export default nextConfig;