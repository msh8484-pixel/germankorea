"use client";
import { useState } from "react";
import Link from "next/link";

const NAV = [
  { label: "회사소개", href: "/#about" },
  {
    label: "사업분야",
    href: "/#services",
    sub: [
      { label: "국내 실차시험", href: "/services/domestic" },
      { label: "해외 실차시험", href: "/services/overseas" },
      { label: "기술시험 (FCA·ADAS)", href: "/services/technical" },
      { label: "기술교육", href: "/services/training" },
      { label: "자기인증", href: "/services/certification" },
    ],
  },
  { label: "보유장비", href: "/equipment" },
  { label: "문의", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <>
      <nav className="nav-island" style={{
        position: "fixed", top: 18, left: "50%", transform: "translateX(-50%)",
        zIndex: 50,
        padding: "0 8px 0 24px", height: 52,
        display: "flex", alignItems: "center",
        borderRadius: 100,
        border: "1px solid rgba(255,255,255,0.09)",
        background: "rgba(8,18,30,0.88)", backdropFilter: "blur(20px)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), 0 8px 40px rgba(0,0,0,0.5)",
        whiteSpace: "nowrap",
      }}>
        <Link href="/" style={{
          fontSize: 14, fontWeight: 900, letterSpacing: "0.06em", color: "#fff",
          display: "flex", alignItems: "center",
          paddingRight: 20, marginRight: 4,
          borderRight: "1px solid rgba(255,255,255,0.07)",
        }}>
          <span>GERMAN</span>
          <span style={{ color: "var(--accent)", marginLeft: 3 }}>KOREA</span>
        </Link>

        <div className="nav-links" style={{ display: "flex", alignItems: "center" }}>
          {NAV.map((n, i) => (
            <div key={n.href} style={{ position: "relative" }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <Link href={n.href} className="nav-link">{n.label}</Link>
              {n.sub && hoveredIdx === i && (
                <div style={{
                  position: "absolute", top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)",
                  background: "rgba(7,13,20,0.97)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderRadius: 12,
                  boxShadow: "0 16px 48px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
                  padding: "6px",
                  minWidth: 180,
                }}>
                  {n.sub.map((s) => (
                    <Link key={s.href} href={s.href} style={{
                      display: "block",
                      fontSize: 13, fontWeight: 500,
                      color: "rgba(200,216,232,0.75)",
                      padding: "10px 16px",
                      borderRadius: 8,
                      transition: "color 0.15s, background 0.15s",
                      whiteSpace: "nowrap",
                    }}
                      onMouseOver={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
                      onMouseOut={(e) => { e.currentTarget.style.color = "rgba(200,216,232,0.75)"; e.currentTarget.style.background = "transparent"; }}
                    >{s.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <Link href="/#contact" className="nav-cta">문의하기</Link>

        <button className="hamburger" onClick={() => setOpen((v) => !v)} aria-label="메뉴 열기">
          <span className={open ? "bar bar-top open" : "bar bar-top"} />
          <span className={open ? "bar bar-mid open" : "bar bar-mid"} />
          <span className={open ? "bar bar-bot open" : "bar bar-bot"} />
        </button>
      </nav>

      {open && (
        <div className="mobile-drawer" onClick={() => setOpen(false)}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            {NAV.map((n) => (
              <div key={n.href}>
                <Link href={n.href} className="mobile-link" onClick={() => setOpen(false)}>{n.label}</Link>
                {n.sub && (
                  <div style={{ paddingLeft: 16, borderLeft: "2px solid rgba(204,0,34,0.3)", marginLeft: 20, marginBottom: 4 }}>
                    {n.sub.map((s) => (
                      <Link key={s.href} href={s.href} style={{
                        display: "block",
                        fontSize: 13, fontWeight: 500,
                        color: "rgba(200,216,232,0.6)",
                        padding: "8px 16px",
                        borderRadius: 8,
                        transition: "color 0.15s",
                      }} onClick={() => setOpen(false)}>{s.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/#contact" className="mobile-cta" onClick={() => setOpen(false)}>문의하기</Link>
          </div>
        </div>
      )}

      <style>{`
        .nav-link {
          font-size: 13px; font-weight: 500; letter-spacing: 0.02em;
          color: rgba(200,216,232,0.65); padding: 8px 14px; border-radius: 50px;
          transition: color 0.2s, background 0.2s;
          display: inline-block;
        }
        .nav-link:hover { color: #fff; background: rgba(255,255,255,0.06); }
        .nav-cta {
          font-size: 12px; font-weight: 700; letter-spacing: 0.06em;
          padding: 9px 18px; border-radius: 50px;
          background: var(--accent); color: #fff;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.15);
          transition: opacity 0.2s, transform 0.2s cubic-bezier(0.16,1,0.3,1);
          margin-left: 6px;
          display: inline-block;
        }
        .nav-cta:hover { opacity: 0.88; transform: scale(0.96); }
        .nav-cta:active { transform: scale(0.93); }

        .hamburger {
          display: none; flex-direction: column; justify-content: center;
          gap: 5px; width: 36px; height: 36px;
          background: none; border: none; cursor: pointer; padding: 4px; margin-left: 4px;
        }
        .bar {
          display: block; width: 20px; height: 2px;
          background: #fff; border-radius: 2px;
          transition: transform 0.25s, opacity 0.25s;
          transform-origin: center;
        }
        .bar-top.open  { transform: translateY(7px) rotate(45deg); }
        .bar-mid.open  { opacity: 0; }
        .bar-bot.open  { transform: translateY(-7px) rotate(-45deg); }

        .mobile-drawer {
          position: fixed; inset: 0; z-index: 49;
          background: rgba(0,0,0,0.3); backdrop-filter: blur(4px);
        }
        .mobile-menu {
          position: absolute; top: 78px; left: 12px; right: 12px;
          background: rgba(7,13,20,0.97);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 20px;
          box-shadow: 0 20px 56px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.06);
          display: flex; flex-direction: column; padding: 8px;
          max-height: 80vh; overflow-y: auto;
        }
        .mobile-link {
          font-size: 15px; font-weight: 600; color: rgba(200,216,232,0.8);
          padding: 14px 20px; border-radius: 12px;
          transition: color 0.15s, background 0.15s;
          display: block;
        }
        .mobile-link:hover { color: #fff; background: rgba(255,255,255,0.05); }
        .mobile-cta {
          font-size: 14px; font-weight: 800; letter-spacing: 0.06em;
          color: #fff; background: var(--accent);
          padding: 14px 20px; border-radius: 12px; margin-top: 4px; text-align: center;
          transition: opacity 0.2s; display: block;
        }
        .mobile-cta:hover { opacity: 0.88; }

        @media (max-width: 768px) {
          .nav-island {
            left: 12px !important; right: 12px !important;
            transform: none !important;
            width: auto !important;
            padding: 0 8px 0 20px !important;
            justify-content: space-between !important;
          }
          .nav-links { display: none !important; }
          .nav-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
