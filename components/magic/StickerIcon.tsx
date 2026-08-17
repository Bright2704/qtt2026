"use client";

import type { Sticker as StickerType } from "@/data/stickers";
import Sticker from "./Sticker";

/**
 * ใช้สติกเกอร์ทางการเป็นไอคอนของการ์ด แทนไอคอนเส้นที่วาดเอง
 *
 * หลักที่ใช้แยกว่าเมื่อไหร่ใช้อะไร
 *   สติกเกอร์ = ไอคอนของ "เนื้อหา/จุดขาย" เช่นการ์ดสิ่งที่จะได้รับ
 *   ไอคอนเส้น = ข้อมูลกำกับที่ต้องอ่านเร็ว เช่น วันที่ สถานที่ เวลา
 * ถ้าเอาสติกเกอร์ไปใช้กับข้อมูลกำกับด้วย หน้าจะรกและอ่านยากขึ้น
 */
export default function StickerIcon({
  sticker,
  size = 72,
  tilt = 0,
  tone = "lilac",
}: {
  sticker: StickerType;
  size?: number;
  tilt?: number;
  tone?: "lilac" | "ice" | "dark" | "none";
}) {
  return (
    <span
      className={`sticker-icon sticker-icon--${tone}`}
      style={{ "--si-size": `${size}px` } as React.CSSProperties}
      aria-hidden="true"
    >
      <Sticker
        sticker={sticker}
        className="sticker-icon__art"
        style={{ "--tilt": `${tilt}deg` } as React.CSSProperties}
      />
    </span>
  );
}
