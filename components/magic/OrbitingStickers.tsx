"use client";

import { useLang } from "@/lib/i18n";
import { heroOrbit, stickers } from "@/data/stickers";
import Sticker from "./Sticker";

/**
 * เหรียญตราอยู่กลาง สติกเกอร์โคจรรอบสองวง
 *
 * โครงสร้างสองชั้นต่อสติกเกอร์หนึ่งตัว
 *   .orbit__path  กล่องเต็มวง หมุนรอบตัวเอง -> พาสติกเกอร์วิ่งเป็นวงกลม
 *   .orbit__slot  หมุนสวนทางเท่ากัน -> สติกเกอร์ตั้งตรงตลอด ไม่ตีลังกา
 * รัศมีคุมด้วย --inset ของ path (ยิ่งมาก วงยิ่งเล็ก)
 */
export default function OrbitingStickers() {
  const { t } = useLang();

  return (
    <div
      className="orbit"
      role="img"
      aria-label={t({
        th: "เหรียญตรา Qiskit Fall Fest 2026 ล้อมด้วยสติกเกอร์ประจำงาน",
        en: "The Qiskit Fall Fest 2026 badge surrounded by the event stickers",
      })}
    >
      <span className="orbit__ring orbit__ring--outer" aria-hidden="true" />
      <span className="orbit__ring orbit__ring--inner" aria-hidden="true" />

      <Sticker sticker={stickers.badge} className="orbit__center" />

      {heroOrbit.map((o, i) => {
        const vars = {
          "--angle": `${o.angle}deg`,
          "--inset": o.inset,
          "--size": o.size,
          "--spin": o.spin,
          "--delay": o.delay,
        } as React.CSSProperties;

        return (
          <span key={o.sticker.id + i} aria-hidden="true">
            <span
              className={`orbit__path${o.reverse ? " orbit__path--reverse" : ""}`}
              style={vars}
            >
              <span className="orbit__slot" style={vars}>
                <Sticker
                  sticker={o.sticker}
                  className="orbit__art"
                  style={
                    { "--tilt": `${o.tilt}deg`, "--bob": o.bob } as React.CSSProperties
                  }
                />
              </span>
            </span>
          </span>
        );
      })}
    </div>
  );
}
