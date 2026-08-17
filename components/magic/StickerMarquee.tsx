"use client";

import { marqueeStickers } from "@/data/stickers";
import Sticker from "./Sticker";

/**
 * แถบสติกเกอร์เลื่อนไม่รู้จบ วางสองชุดต่อกันเพื่อให้ลูปเนียน
 * เอาเมาส์ไปวางแล้วจะหยุด และสติกเกอร์ที่ชี้อยู่จะหมุนกลับมาตรงพร้อมขยาย
 */
export default function StickerMarquee({
  speed = "42s",
  size = "108px",
  reverse = false,
}: {
  speed?: string;
  size?: string;
  reverse?: boolean;
}) {
  const track = (
    <div className="marquee__track" aria-hidden="true">
      {marqueeStickers.map((m, i) => (
        <Sticker
          key={m.sticker.id + i}
          sticker={m.sticker}
          className="marquee__item"
          style={{ "--tilt": `${m.tilt}deg` } as React.CSSProperties}
        />
      ))}
    </div>
  );

  return (
    <div
      className={`marquee${reverse ? " marquee--reverse" : ""}`}
      style={{ "--mq-speed": speed, "--mq-size": size } as React.CSSProperties}
    >
      {track}
      {track}
    </div>
  );
}
