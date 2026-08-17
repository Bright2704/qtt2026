/* ============================================================
   ที่เก็บใบสมัครฝั่งเบราว์เซอร์ (โหมดจำลอง)

   ใช้ตอนที่ยังไม่ได้ต่อ backend จริง — ฟอร์มจะทำงานครบทุกขั้นตอน
   ตั้งแต่ตรวจข้อมูล ส่ง ออกรหัสอ้างอิง ไปจนถึงหน้ายืนยัน
   ข้อมูลเก็บไว้ในเครื่องของผู้ใช้เท่านั้น ไม่ได้ส่งออกไปไหน

   พอใส่ site.contact.formEndpoint แล้ว ฟอร์มจะสลับไปยิง POST จริง
   อัตโนมัติ ไม่ต้องแก้โค้ดตรงนี้เลย
   ============================================================ */

const KEY = "qff2026:registrations";

export type StoredRegistration = {
  ref: string;
  submittedAt: string;
  lang: string;
  demo: true;
  values: Record<string, string | boolean>;
};

/** อ่านได้เฉพาะฝั่ง client — ตอน build ไม่มี window */
function store(): Storage | null {
  if (typeof window === "undefined") return null;
  try {
    const s = window.localStorage;
    const probe = "__qff_probe__";
    s.setItem(probe, "1");
    s.removeItem(probe);
    return s;
  } catch {
    // โหมดส่วนตัวของบางเบราว์เซอร์ปิด localStorage ไว้ — ไม่ให้ล้ม
    return null;
  }
}

export function listRegistrations(): StoredRegistration[] {
  const s = store();
  if (!s) return [];
  try {
    const raw = s.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? (parsed as StoredRegistration[]) : [];
  } catch {
    return [];
  }
}

export function saveRegistration(entry: StoredRegistration): StoredRegistration[] {
  const s = store();
  const next = [entry, ...listRegistrations()].slice(0, 200);
  if (s) {
    try {
      s.setItem(KEY, JSON.stringify(next));
    } catch {
      /* เต็มโควตาก็ปล่อยผ่าน อย่างน้อยหน้ายืนยันยังขึ้น */
    }
  }
  return next;
}

export function clearRegistrations(): void {
  store()?.removeItem(KEY);
}

/**
 * รหัสอ้างอิง เช่น QFF26-SUT-7K3M
 * ปีค.ศ. + รหัสงาน + สี่ตัวอักษรสุ่มแบบอ่านออกเสียงได้
 * ตัด I O 0 1 ออกเพราะคนอ่านสลับกันบ่อยเวลาโทรแจ้ง
 */
const ALPHABET = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";

export function makeRef(edition: string): string {
  const rand = Array.from(
    crypto.getRandomValues(new Uint8Array(4)),
    (n) => ALPHABET[n % ALPHABET.length],
  ).join("");
  const ed = (edition || "GEN").slice(0, 3).toUpperCase();
  return `QFF26-${ed}-${rand}`;
}

/** ดาวน์โหลดรายชื่อที่กรอกไว้เป็น CSV เอาไว้ตรวจว่าฟอร์มเก็บครบจริง */
export function downloadCsv(rows: StoredRegistration[]): void {
  if (!rows.length) return;
  const cols = Array.from(
    rows.reduce<Set<string>>((set, r) => {
      Object.keys(r.values).forEach((k) => set.add(k));
      return set;
    }, new Set(["ref", "submittedAt"])),
  );
  const esc = (val: unknown) => {
    const s = String(val ?? "");
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const body = rows
    .map((r) =>
      cols
        .map((c) =>
          esc(c === "ref" ? r.ref : c === "submittedAt" ? r.submittedAt : r.values[c]),
        )
        .join(","),
    )
    .join("\n");
  // BOM ไว้ให้ Excel ภาษาไทยเปิดแล้วไม่เป็นตัวยึกยือ
  const blob = new Blob(["﻿" + cols.join(",") + "\n" + body], {
    type: "text/csv;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "qff2026-registrations.csv";
  a.click();
  URL.revokeObjectURL(url);
}
