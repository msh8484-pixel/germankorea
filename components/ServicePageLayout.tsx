"use client";

import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

interface ServiceTab {
  label: string;
  href: string;
}

interface ServicePageLayoutProps {
  children: React.ReactNode;
  heroTitle: string;
  heroTitleAccent?: string;
  heroSub: string;
  heroTag: string;
  videoId: string;
  tabs: ServiceTab[];
  activeTab: string;
}

export default function ServicePageLayout({
  children,
  heroTitle,
  heroTitleAccent,
  heroSub,
  heroTag,
  videoId,
  tabs,
  activeTab,
}: ServicePageLayoutProps) {
  return (
    <>
      <Navbar />

      {/* 히어로 */}
      <section style={{
        position: "relative",
        height: "56vh",
        minHeight: 420,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 clamp(24px,5vw,96px) 72px",
        background: "#060e1a",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&disablekb=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&start=10`}
            allow="autoplay; encrypted-media"
            style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%,-50%)",
              width: "177.78vh", minWidth: "100%",
              height: "56.25vw", minHeight: "100%",
              border: "none", pointerEvents: "none",
            }}
          />
        </div>
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to right, rgba(6,14,26,0.94) 0%, rgba(6,14,26,0.70) 55%, rgba(6,14,26,0.25) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to top, #060e1a 0%, transparent 55%)" }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <Link href="/" style={{ fontSize: 12, color: "rgba(200,218,240,0.4)", letterSpacing: "0.06em", transition: "color 0.2s" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "rgba(200,218,240,0.75)")}
              onMouseOut={(e) => (e.currentTarget.style.color = "rgba(200,218,240,0.4)")}
            >홈</Link>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.18)" }}>›</span>
            <span style={{ fontSize: 12, color: "var(--accent)", fontWeight: 700, letterSpacing: "0.06em" }}>{heroTag}</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px,5vw,72px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.05, marginBottom: 16 }}>
            {heroTitle}
            {heroTitleAccent && <span style={{ color: "var(--accent)", display: "block" }}>{heroTitleAccent}</span>}
          </h1>
          <p style={{ fontSize: 16, color: "rgba(200,218,240,0.65)", lineHeight: 1.8, maxWidth: 560 }}>{heroSub}</p>
        </div>
      </section>

      {/* 서비스 탭 */}
      <div style={{
        background: "#0A1628",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "0 clamp(24px,5vw,96px)",
        overflowX: "auto",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 0 }}>
          {tabs.map((tab) => (
            <Link key={tab.href} href={tab.href} style={{
              display: "inline-block",
              padding: "18px 22px",
              fontSize: 13,
              fontWeight: tab.href === activeTab ? 700 : 500,
              color: tab.href === activeTab ? "#fff" : "rgba(200,218,240,0.48)",
              borderBottom: tab.href === activeTab ? "2px solid var(--accent)" : "2px solid transparent",
              letterSpacing: "0.02em",
              whiteSpace: "nowrap",
              transition: "color 0.2s",
            }}
              onMouseOver={(e) => { if (tab.href !== activeTab) e.currentTarget.style.color = "rgba(200,218,240,0.75)"; }}
              onMouseOut={(e) => { if (tab.href !== activeTab) e.currentTarget.style.color = "rgba(200,218,240,0.48)"; }}
            >{tab.label}</Link>
          ))}
        </div>
      </div>

      {/* 콘텐츠 */}
      <main style={{ background: "#F3F7FC", minHeight: "40vh" }}>
        {children}
      </main>

      <SiteFooter />
    </>
  );
}
