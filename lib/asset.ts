/**
 * เติม basePath ให้ path ของไฟล์ใน public/ (เช่น "/assets/logo.png")
 * เพราะ <img src> และ metadata ไม่ได้เติม basePath ให้อัตโนมัติ
 * ค่า NEXT_PUBLIC_BASE_PATH ถูกตั้งใน next.config
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
