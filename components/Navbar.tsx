"use client";
import { useState } from "react";

const NAV = [
  { label: "회사소개", href: "#about" },
  { label: "사업분야", href: "#services" },
  { label: "시험 프로세스", href: "#process" },
  { label: "문의", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="nav-inner" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        padding: "0 48px", height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        borderBottom: "1px solid var(--border)",
        background: "rgba(8,18,30,0.92)", backdropFilter: "blur(12px)",
      }}>
        <a href="#" style={{ fontSize: 16, fontWeight: 900, letterSpacing: "0.05em", color: "#fff", display: "flex", alignItems: "center", gap: 2 }}>
          <span>GERMAN</span>
          <span style={{ color: "var(--accent)", marginLeft: 4 }}>KOREA</span>
        </a>

        <div className="nav-links" style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="nav-link">{n.label}</a>
          ))}
          <a href="#contact" className="nav-cta">문의하기</a>
        </div>

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
              <a key={n.href} href={n.href}
                className="mobile-link"
                onClick={() => setOpen(false)}
              >{n.label}</a>
            ))}
            <a href="#contact" className="mobile-cta" onClick={() => setOpen(false)}>문의하기</a>
          </div>
        </div>
      )}

      <style>{`
        .nav-link {
          font-size: 13px; font-weight: 500; letter-spacing: 0.02em;
          color: var(--text-muted); padding-bottom: 2px;
          border-bottom: 1px solid transparent; transition: color 0.2s;
        }
        .nav-link:hover { color: #fff; }
        .nav-cta {
          font-size: 12px; font-weight: 700; letter-spacing: 0.06em;
          padding: 9px 20px; border: 1px solid var(--accent);
          color: var(--accent); transition: all 0.2s;
        }
        .nav-cta:hover { background: var(--accent); color: #fff; }

        .hamburger {
          display: none; flex-direction: column; justify-content: center;
          gap: 5px; width: 36px; height: 36px;
          background: none; border: none; cursor: pointer; padding: 4px;
        }
        .bar {
          display: block; width: 22px; height: 2px;
          background: #fff; border-radius: 2px;
          transition: transform 0.25s, opacity 0.25s;
          transform-origin: center;
        }
        .bar-top.open  { transform: translateY(7px) rotate(45deg); }
        .bar-mid.open  { opacity: 0; }
        .bar-bot.open  { transform: translateY(-7px) rotate(-45deg); }

        .mobile-drawer {
          position: fixed; inset: 0; z-index: 49;
          background: rgba(8,18,30,0.5); backdrop-filter: blur(4px);
        }
        .mobile-menu {
          position: absolute; top: 64px; left: 0; right: 0;
          background: rgba(8,18,30,0.98);
          border-bottom: 1px solid var(--border);
          display: flex; flex-direction: column; padding: 8px 0 16px;
        }
        .mobile-link {
          font-size: 15px; font-weight: 600; color: var(--text-muted);
          padding: 16px 24px; border-bottom: 1px solid var(--border);
          transition: color 0.15s;
        }
        .mobile-link:hover { color: #fff; }
        .mobile-cta {
          font-size: 14px; font-weight: 800; letter-spacing: 0.06em;
          color: var(--accent); padding: 16px 24px; margin-top: 4px;
        }

        @media (max-width: 768px) {
          .nav-inner { padding: 0 20px !important; }
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
