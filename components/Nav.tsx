"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/i18n";
import { announce, minorNavItems, navItems, site } from "@/data/site";
import { editions, statusLabel } from "@/data/editions";
import Icon from "./Icon";
import { CapacityMeter } from "./ui";

export default function Nav() {
  const { lang, setLang, t } = useLang();
  const pathname = usePathname() || "/";
  const isHome = pathname === "/" || pathname === "";

  const [scrolled, setScrolled] = useState(false);
  const [onHero, setOnHero] = useState(isHome);
  const [megaOpen, setMegaOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [showAnnounce, setShowAnnounce] = useState(true);
  const [mobileEditions, setMobileEditions] = useState(false);

  const megaRef = useRef<HTMLDivElement>(null);
  const megaBtnRef = useRef<HTMLButtonElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  /* --- แถบเมนูเปลี่ยนสีเมื่อเลื่อนพ้น hero --- */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      setOnHero(isHome && y < window.innerHeight * 0.68);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  /* --- ปิด mega menu เมื่อคลิกนอกเมนูหรือกด Esc --- */
  useEffect(() => {
    if (!megaOpen) return;
    const onDown = (e: MouseEvent) => {
      if (
        !megaRef.current?.contains(e.target as Node) &&
        !megaBtnRef.current?.contains(e.target as Node)
      ) {
        setMegaOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        megaBtnRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [megaOpen]);

  /* --- ล็อกการเลื่อนหน้าเมื่อเปิดเมนูมือถือ --- */
  useEffect(() => {
    if (sheetOpen) document.body.setAttribute("data-locked", "true");
    else document.body.removeAttribute("data-locked");
    return () => document.body.removeAttribute("data-locked");
  }, [sheetOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && sheetOpen) closeSheet();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  });

  const closeSheet = useCallback(() => {
    setSheetOpen(false);
    burgerRef.current?.focus();
  }, []);

  /* ปิดเมนูทุกครั้งที่เปลี่ยนหน้า */
  useEffect(() => {
    setMegaOpen(false);
    setSheetOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {showAnnounce && (
        <div className="announce">
          <p style={{ margin: 0 }}>{t(announce.text)}</p>
          <Link href="/register">{t(announce.cta)} →</Link>
          <button
            className="announce__close"
            onClick={() => setShowAnnounce(false)}
            aria-label={t({ th: "ปิดประกาศ", en: "Dismiss announcement" })}
          >
            <Icon name="i-x" size={15} />
          </button>
        </div>
      )}

      <header
        className="nav"
        data-scrolled={scrolled}
        data-on-hero={onHero && !scrolled ? "true" : onHero ? "true" : "false"}
      >
        <Link className="nav__brand" href="/">
          <img src="/assets/logo-mark.svg" alt="" width={32} height={32} />
          <span>
            <strong>Qiskit Fall Fest</strong>
            <em>2026 · {t({ th: "ประเทศไทย", en: "Thailand" })}</em>
          </span>
        </Link>

        <nav className="nav__menu" aria-label={t({ th: "เมนูหลัก", en: "Main menu" })}>
          {navItems.map((item) =>
            item.mega ? (
              <div className="nav__group" key={item.href}>
                <button
                  ref={megaBtnRef}
                  className="nav__link"
                  aria-expanded={megaOpen}
                  aria-controls="mega-editions"
                  data-active={isActive(item.href)}
                  onClick={() => setMegaOpen((v) => !v)}
                >
                  {t(item.label)}
                  <Icon name="i-chevron" size={14} strokeWidth={2} />
                </button>
                {megaOpen && (
                  <div className="mega" id="mega-editions" ref={megaRef}>
                    <div className="mega__grid">
                      {editions.map((e) => (
                        <Link
                          key={e.id}
                          className="mega__card"
                          href={`/editions/${e.slug}`}
                        >
                          <span className={`status status--${e.status}`}>
                            {t(statusLabel[e.status])}
                          </span>
                          <h4>{t(e.name)}</h4>
                          <p>
                            {t(e.city)} · {t(e.dateLabel)}
                          </p>
                          {e.status === "open" && (
                            <CapacityMeter
                              registered={e.registered}
                              capacity={e.capacity}
                            />
                          )}
                        </Link>
                      ))}
                    </div>
                    <div className="mega__foot">
                      <Link href="/editions">
                        {t({
                          th: "ดูทุกงานและเปรียบเทียบ",
                          en: "Compare all editions",
                        })}{" "}
                        →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                className="nav__link"
                href={item.href}
                data-active={isActive(item.href)}
              >
                {t(item.label)}
              </Link>
            ),
          )}
        </nav>

        <div className="nav__actions">
          <div className="lang" role="group" aria-label={t({ th: "เลือกภาษา", en: "Language" })}>
            <button aria-pressed={lang === "th"} onClick={() => setLang("th")}>
              <span>TH</span>
            </button>
            <button aria-pressed={lang === "en"} onClick={() => setLang("en")}>
              <span>EN</span>
            </button>
          </div>
          <Link className="btn btn--primary btn--sm" href="/register">
            {t({ th: "ลงทะเบียน", en: "Register" })}
          </Link>
          <button
            ref={burgerRef}
            className="nav__burger"
            aria-expanded={sheetOpen}
            aria-controls="mobile-sheet"
            onClick={() => setSheetOpen(true)}
            aria-label={t({ th: "เปิดเมนู", en: "Open menu" })}
          >
            <Icon name="i-menu" size={24} />
          </button>
        </div>
      </header>

      {/* ---------- เมนูมือถือ ---------- */}
      {sheetOpen && (
        <div className="sheet" id="mobile-sheet" role="dialog" aria-modal="true">
          <div className="sheet__top">
            <Link className="nav__brand" href="/" onClick={closeSheet}>
              <img src="/assets/logo-mark.svg" alt="" width={32} height={32} />
              <span>
                <strong>Qiskit Fall Fest</strong>
                <em>2026 · {t({ th: "ประเทศไทย", en: "Thailand" })}</em>
              </span>
            </Link>
            <button
              className="nav__icon-btn"
              onClick={closeSheet}
              aria-label={t({ th: "ปิดเมนู", en: "Close menu" })}
              autoFocus
            >
              <Icon name="i-x" size={24} />
            </button>
          </div>

          <div className="sheet__body">
            {navItems.map((item) =>
              item.mega ? (
                <div key={item.href}>
                  <button
                    className="sheet__link"
                    style={{ width: "100%", background: "none", border: 0, font: "inherit", textAlign: "left", cursor: "pointer" }}
                    aria-expanded={mobileEditions}
                    onClick={() => setMobileEditions((v) => !v)}
                  >
                    {t(item.label)}
                    <Icon
                      name="i-chevron"
                      size={18}
                      className={mobileEditions ? "ico" : "ico"}
                    />
                  </button>
                  {mobileEditions && (
                    <div className="sheet__sub">
                      {editions.map((e) => (
                        <Link
                          key={e.id}
                          href={`/editions/${e.slug}`}
                          onClick={closeSheet}
                        >
                          {t(e.name)} · {t(e.city)}
                        </Link>
                      ))}
                      <Link href="/editions" onClick={closeSheet}>
                        {t({ th: "ดูทั้งหมด", en: "See all" })} →
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  className="sheet__link"
                  href={item.href}
                  onClick={closeSheet}
                >
                  {t(item.label)}
                  <Icon name="i-chevron" size={18} />
                </Link>
              ),
            )}

            <div className="sheet__minor">
              {minorNavItems.map((m) => (
                <Link key={m.href} href={m.href} onClick={closeSheet}>
                  {t(m.label)}
                </Link>
              ))}
            </div>

            <div style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 14 }}>
                  <div className="lang" role="group" aria-label="Language" style={{ color: "var(--text-strong)" }}>
                <button aria-pressed={lang === "th"} onClick={() => setLang("th")}>
                  <span>TH</span>
                </button>
                <button aria-pressed={lang === "en"} onClick={() => setLang("en")}>
                  <span>EN</span>
                </button>
              </div>
            </div>
          </div>

          <div className="mobile-cta" style={{ display: "block" }}>
            <Link className="btn btn--primary btn--block" href="/register" onClick={closeSheet}>
              {t({ th: "ลงทะเบียนเลย", en: "Register now" })} →
            </Link>
          </div>
        </div>
      )}

      {/* ปุ่มลงทะเบียนติดล่างจอบนมือถือ */}
      {!sheetOpen && (
        <div className="mobile-cta">
          <Link className="btn btn--primary btn--block" href="/register">
            {t({ th: "ลงทะเบียนฟรี", en: "Register free" })} →
          </Link>
        </div>
      )}

      <span className="sr-only">{site.shortName}</span>
    </>
  );
}
