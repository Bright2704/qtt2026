"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import type { Sticker as StickerType } from "@/data/stickers";

/**
 * แสดงสติกเกอร์ทางการ ถ้ายังไม่มีไฟล์จริงจะถอยไปใช้กราฟิกสำรองของเราเอง
 * ทำให้เว็บไม่มีรูปแตกระหว่างรอไฟล์จาก IBM
 */
export default function Sticker({
  sticker,
  className,
  style,
  sizes,
}: {
  sticker: StickerType;
  className?: string;
  style?: React.CSSProperties;
  sizes?: string;
}) {
  const { t } = useLang();
  const [src, setSrc] = useState(sticker.src);

  const isDecorative = sticker.decorative;

  return (
    <img
      src={src}
      onError={() => {
        if (src !== sticker.fallback) setSrc(sticker.fallback);
      }}
      alt={isDecorative ? "" : t(sticker.alt)}
      aria-hidden={isDecorative || undefined}
      className={className}
      style={style}
      sizes={sizes}
      loading="lazy"
      decoding="async"
      draggable={false}
    />
  );
}
