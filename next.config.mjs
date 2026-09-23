/** @type {import("next").NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true,
  
    // URL ภายนอกที่ IIS เปิดให้ผู้ใช้
    basePath: "/qiskit-fall-fest-2026",
  
    // ทำให้ CSS / JS ที่อยู่ใน _next มี prefix เดียวกัน
    assetPrefix: "/qiskit-fall-fest-2026/",

    // ให้ lib/asset.ts เติม basePath ให้ path รูปใน public/
    env: {
      NEXT_PUBLIC_BASE_PATH: "/qiskit-fall-fest-2026",
    },
  
    images: {
      unoptimized: true,
    },
  };
  
  export default nextConfig;