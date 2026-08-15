"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "th" | "en";

/** ข้อความสองภาษา — ใช้กับทุกอย่างที่ต้องแสดงผลบนเว็บ */
export type L = { th: string; en: string };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (v: L | string) => string };

const LangCtx = createContext<Ctx>({
  lang: "th",
  setLang: () => {},
  t: (v) => (typeof v === "string" ? v : v.th),
});

const STORAGE_KEY = "qff2026-lang";

export function LangProvider({ children }: { children: ReactNode }) {
  // ค่าเริ่มต้นเป็นไทยเสมอ เพื่อให้ HTML ที่ prerender ตอน build เป็นภาษาไทย (ดีต่อ SEO)
  const [lang, setLangState] = useState<Lang>("th");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved === "th" || saved === "en") setLangState(saved);
    } catch {
      /* โหมดส่วนตัวของบางเบราว์เซอร์อ่าน localStorage ไม่ได้ — ไม่เป็นไร ใช้ค่าเริ่มต้น */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.body.dataset.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const t = useCallback(
    (v: L | string) => (typeof v === "string" ? v : v[lang]),
    [lang],
  );

  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  return useContext(LangCtx);
}

/** ใช้แทรกข้อความสองภาษาใน JSX: <Tx v={copy.title} /> */
export function Tx({ v }: { v: L | string }) {
  const { t } = useLang();
  return <>{t(v)}</>;
}
