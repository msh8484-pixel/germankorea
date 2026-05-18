"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    num: "01",
    ko: "국내 실차시험",
    en: "Domestic Vehicle Testing",
    sub: "신뢰성 · 내구성 · NVH · 안전기능 · 연비",
    desc: "개발차량 및 품질보증차량의 신뢰성·내구성 시험, 시스템 시험, 친환경차량 평가. 국내 5대 완성차사와의 협력 기반 현장 검증 서비스를 제공합니다.",
    bg: "#F8FAFD",
  },
  {
    num: "02",
    ko: "해외 실차시험",
    en: "Overseas Vehicle Testing",
    sub: "혹한지 · 혹서지 · 고지 · 중국(연태) 직접 대행",
    desc: "혹한지·혹서지·고지 극한환경 시험 및 중국(연태) 현지 내구·성능시험 대행. 유럽·북미·중국 현지 시험장을 활용한 원스톱 처리.",
    bg: "#F3F7FC",
  },
  {
    num: "03",
    ko: "기술시험",
    en: "Technical Testing",
    sub: "FCA · AEB · ADAS · 자율주행 실데이터 수집",
    desc: "전방추돌경고·자동비상제동(FCA/AEB) 및 ADAS 센서 시험. 자율주행 실데이터 수집과 차량 품질평가. Euro NCAP·C-NCAP 기준 첨단 안전기능 검증.",
    bg: "#F8FAFD",
  },
  {
    num: "04",
    ko: "기술교육",
    en: "Technical Training",
    sub: "시험차 운용 · 품질평가 방법론 · 주행성능 시험",
    desc: "시험차량 운용, 품질평가 방법론, 차량 주행성능 시험 전문 교육. 현장 전문가 직강 실무 프로그램으로 실전 역량을 키웁니다.",
    bg: "#F3F7FC",
  },
  {
    num: "05",
    ko: "자기인증",
    en: "Self-Certification",
    sub: "인증 컨설팅 · 안전기준 시험 · 리콜 대응",
    desc: "자동차 및 부품 자기인증 컨설팅, 안전기준 시험, 리콜 대응 지원. 형식승인부터 서류 제출까지 원스톱으로 처리합니다.",
    bg: "#F8FAFD",
  },
];

const STRENGTHS = [
  {
    n: "01",
    title: "독일 기반 글로벌 네트워크",
    desc: "독일 현지 시험기관·완성차 메이커와의 직접 협력. 유럽 시험 기준을 가장 빠르게 국내에 도입합니다.",
  },
  {
    n: "02",
    title: "FCA · ADAS 전문성",
    desc: "전방추돌경고·자동비상제동 시험에 특화. Euro NCAP 기준 적용 가능한 국내 민간 전문기관.",
  },
  {
    n: "03",
    title: "원스톱 인증 지원",
    desc: "시험 계획부터 실차 평가, 자기인증 서류까지 전 과정 한 팀이 책임집니다.",
  },
];

const PROCESS = [
  { step: "01", title: "요건 분석", desc: "법규·고객 요구사항 분석, 시험 항목 및 범위 정의" },
  { step: "02", title: "시험 계획", desc: "시험 방법·일정·장소·비용 수립 및 사전 협의" },
  { step: "03", title: "실차 시험", desc: "현장 시험 수행, 정밀 데이터 계측·기록" },
  { step: "04", title: "결과 보고", desc: "분석 리포트, 인증 대응 권고안 및 후속 지원" },
];

const MARQUEE_ITEMS = [
  "국내 실차시험", "·", "해외 실차시험", "·", "FCA · AEB · ADAS", "·",
  "자율주행 검증", "·", "기술교육", "·", "자기인증", "·",
  "Euro NCAP", "·", "C-NCAP", "·", "독일 기반 네트워크", "·",
];

const VIDEO_SHOWCASE = [
  {
    id: "hfZWT5FKjS0",
    label: "AEB · FCA 시험",
    title: "자동비상제동 검증",
    sub: "Euro NCAP 기준 AEB 시험 현장",
  },
  {
    id: "S5gl1S0GMkk",
    label: "극한 환경 시험",
    title: "혹한지 · 혹서지 시험",
    sub: "극한 기후 조건 차량 성능 검증",
  },
];

export default function Home() {
  const introRef      = useRef<HTMLDivElement>(null);
  const logoRef       = useRef<HTMLDivElement>(null);
  const siteRef       = useRef<HTMLDivElement>(null);
  const hTrackRef     = useRef<HTMLDivElement>(null);
  const hContainerRef = useRef<HTMLDivElement>(null);
  const [introVisible, setIntroVisible] = useState(true);
  const [activePanel, setActivePanel]   = useState(0);

  /* ── 인트로 애니메이션 ── */
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(logoRef.current,
      { opacity: 0, y: 56, filter: "blur(12px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.1, ease: "power3.out" }
    )
    .to(logoRef.current, { duration: 1.0 })
    .to(logoRef.current, { opacity: 0, y: -36, duration: 0.55, ease: "power2.in" })
    .to(introRef.current, { opacity: 0, duration: 0.35, ease: "power2.in" }, "-=0.25")
    .add(() => {
      setIntroVisible(false);
      gsap.fromTo(siteRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.65, ease: "power2.out" }
      );
    });
  }, []);

  /* ── 메인 GSAP ── */
  useEffect(() => {
    if (introVisible) return;

    const ctx = gsap.context(() => {
      /* 히어로 텍스트 */
      gsap.fromTo(".hero-line",
        { y: 72, opacity: 0, filter: "blur(14px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.0, stagger: 0.14, ease: "power3.out", delay: 0.1 }
      );
      gsap.fromTo(".hero-sub",
        { opacity: 0, y: 20, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power2.out", delay: 0.6 }
      );
      gsap.fromTo(".hero-buttons",
        { opacity: 0, y: 16, filter: "blur(6px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power2.out", delay: 0.85 }
      );

      /* 수평 스크롤 — 서비스 패널 */
      const track     = hTrackRef.current;
      const container = hContainerRef.current;
      if (track && container) {
        const totalMove = (SERVICES.length - 1) * window.innerWidth;
        gsap.to(track, {
          x: -totalMove,
          ease: "none",
          scrollTrigger: {
            id: "hscroll",
            trigger: container,
            start: "top top",
            end: () => `+=${totalMove}`,
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              setActivePanel(Math.round(self.progress * (SERVICES.length - 1)));
            },
          },
        });
      }

      /* 스크롤 reveal */
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 32, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.85, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 83%", once: true } }
        );
      });

      /* 강점 카드 */
      gsap.fromTo(".strength-card",
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: ".strengths-bento", start: "top 75%", once: true } }
      );

      /* 프로세스 스텝 */
      gsap.fromTo(".proc-step",
        { opacity: 0, x: -24 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.15, ease: "power2.out",
          scrollTrigger: { trigger: ".process-grid", start: "top 75%", once: true } }
      );

      /* 비디오 오버레이 텍스트 */
      gsap.utils.toArray<HTMLElement>(".video-label").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: el.closest(".video-section"), start: "top 70%", once: true } }
        );
      });
    });

    return () => ctx.revert();
  }, [introVisible]);

  /* ── JSX ── */
  return (
    <>
      {/* 인트로 */}
      {introVisible && (
        <div ref={introRef} style={{
          position: "fixed", inset: 0, zIndex: 100, background: "#0A1628",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div ref={logoRef} style={{ opacity: 0, textAlign: "center" }}>
            <p style={{ fontSize: 12, letterSpacing: "0.45em", color: "var(--accent)", fontWeight: 700, marginBottom: 22 }}>
              AUTOMOTIVE TESTING &amp; EVALUATION
            </p>
            <h1 style={{ fontSize: "clamp(38px, 7vw, 88px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1 }}>
              GERMAN<span style={{ color: "var(--accent)" }}>KOREA</span>
            </h1>
            <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, transparent, var(--accent), transparent)", marginTop: 22, opacity: 0.45 }} />
            <p style={{ marginTop: 16, fontSize: 13, color: "rgba(200,218,240,0.5)", letterSpacing: "0.14em" }}>저먼코리아(주)</p>
          </div>
        </div>
      )}

      <div ref={siteRef} style={{ opacity: 0 }}>
        <Navbar />

        {/* ── HERO (dark) ── */}
        <section style={{
          minHeight: "100dvh",
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          padding: "0 80px 100px",
          position: "relative", overflow: "hidden",
          background: "#0A1628",
        }}>
          <div className="gk-grid-bg" style={{ position: "absolute", inset: 0, zIndex: 0 }} />
          <div style={{
            position: "absolute", inset: 0, zIndex: 1,
            background: "linear-gradient(to right, rgba(10,22,40,0.96) 0%, rgba(10,22,40,0.6) 50%, rgba(10,22,40,0.18) 100%)",
          }} />
          <div style={{
            position: "absolute", inset: 0, zIndex: 1,
            background: "linear-gradient(to top, #0A1628 0%, transparent 42%)",
          }} />
          {/* 링 장식 */}
          <div style={{
            position: "absolute", right: "7%", top: "50%", transform: "translateY(-50%)",
            width: 440, height: 440, borderRadius: "50%",
            border: "1px solid rgba(204,0,34,0.1)",
            zIndex: 1,
          }}>
            <div style={{ position: "absolute", inset: 55, borderRadius: "50%", border: "1px solid rgba(204,0,34,0.07)" }}>
              <div style={{ position: "absolute", inset: 55, borderRadius: "50%", border: "1px solid rgba(204,0,34,0.05)" }} />
            </div>
          </div>
          {/* 빨간 빛 */}
          <div style={{
            position: "absolute", top: "28%", left: "18%",
            width: "55vw", height: "55vw", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(204,0,34,0.07) 0%, transparent 62%)",
            pointerEvents: "none", zIndex: 1,
          }} />

          <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>
            <div style={{ marginBottom: 32 }}>
              <p className="hero-line" style={{
                fontSize: 12, fontWeight: 700, letterSpacing: "0.35em", color: "var(--accent)",
                display: "flex", alignItems: "center", gap: 12,
              }}>
                <span style={{ display: "inline-block", width: 32, height: 1, background: "var(--accent)" }} />
                GERMAN KOREA — 최상의 솔루션을 제공합니다
              </p>
            </div>
            <div style={{ marginBottom: 40 }}>
              <div className="hero-line-wrap">
                <h2 className="hero-line" style={{
                  fontSize: "clamp(48px, 8vw, 116px)", fontWeight: 900,
                  lineHeight: 1.0, letterSpacing: "-0.04em", color: "#fff",
                }}>
                  자동차 성능 시험,
                </h2>
              </div>
              <div className="hero-line-wrap">
                <h2 className="hero-line" style={{
                  fontSize: "clamp(48px, 8vw, 116px)", fontWeight: 900,
                  lineHeight: 1.0, letterSpacing: "-0.04em",
                }}>
                  <span style={{ color: "var(--accent)" }}>독일 기준</span>
                  <span style={{ color: "#fff" }}>으로.</span>
                </h2>
              </div>
            </div>
            <p className="hero-sub" style={{
              fontSize: 18, color: "rgba(200,218,240,0.75)", lineHeight: 2.0,
              maxWidth: 500, marginBottom: 56, opacity: 0,
            }}>
              국내·해외 실차시험 · FCA/ADAS 기술시험<br />기술교육 · 자기인증 — 5개 분야 원스톱
            </p>
            <div className="hero-buttons" style={{ display: "flex", gap: 16, flexWrap: "wrap", opacity: 0 }}>
              <a href="#contact" className="gk-cta-btn">시험 의뢰하기</a>
              <a href="#services-section" className="gk-outline-btn" style={{ display: "flex", alignItems: "center", gap: 10 }}>
                사업분야 보기 <span style={{ fontSize: 16 }}>↓</span>
              </a>
            </div>
          </div>

          {/* SCROLL 인디케이터 */}
          <div style={{
            position: "absolute", bottom: 40, right: 48, zIndex: 2,
            display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          }}>
            <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", color: "rgba(255,255,255,0.25)", writingMode: "vertical-rl" }}>SCROLL</span>
            <div style={{ width: 1, height: 56, background: "linear-gradient(to bottom, var(--accent), transparent)", opacity: 0.55 }} />
          </div>
        </section>

        {/* ── MARQUEE STRIP ── */}
        <div style={{
          overflow: "hidden",
          borderTop: "1px solid rgba(10,22,40,0.07)",
          borderBottom: "1px solid rgba(10,22,40,0.07)",
          background: "#F3F7FC", padding: "14px 0",
        }}>
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} style={{
                padding: item === "·" ? "0 16px" : "0 28px",
                fontSize: 10, fontWeight: item === "·" ? 400 : 700,
                letterSpacing: "0.22em",
                color: item === "·" ? "rgba(204,0,34,0.45)" : "rgba(10,22,40,0.38)",
                whiteSpace: "nowrap",
              }}>{item}</span>
            ))}
          </div>
        </div>

        {/* ── HORIZONTAL SCROLL — 사업분야 (light panels) ── */}
        <div id="services-section" ref={hContainerRef} style={{ position: "relative" }}>
          <div ref={hTrackRef} style={{
            display: "flex",
            width: `${SERVICES.length * 100}vw`,
            height: "100dvh",
            willChange: "transform",
          }}>
            {SERVICES.map((svc, i) => (
              <div key={svc.num} style={{
                width: "100vw", height: "100dvh",
                flexShrink: 0,
                background: svc.bg,
                position: "relative", overflow: "hidden",
                display: "flex", flexDirection: "column", justifyContent: "flex-end",
                padding: "80px",
                borderRight: i < SERVICES.length - 1 ? "1px solid rgba(10,22,40,0.06)" : "none",
              }}>
                <div className="gk-grid-light" style={{ position: "absolute", inset: 0, opacity: 0.8 }} />
                {/* 상단 우측 — 카운터 */}
                <div style={{
                  position: "absolute", top: 48, right: 80,
                  fontSize: 12, color: "rgba(10,22,40,0.3)", letterSpacing: "0.15em", fontWeight: 600,
                }}>
                  {String(i + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
                </div>
                {/* 대형 배경 번호 */}
                <span style={{
                  position: "absolute", top: "50%", right: "6%",
                  transform: "translateY(-50%)",
                  fontSize: "clamp(200px, 25vw, 340px)",
                  fontWeight: 900, lineHeight: 1,
                  color: "rgba(0,45,114,0.04)",
                  letterSpacing: "-0.06em",
                  userSelect: "none", pointerEvents: "none",
                }}>{svc.num}</span>
                {/* 콘텐츠 */}
                <div style={{ position: "relative", zIndex: 1, maxWidth: 720 }}>
                  <p style={{ fontSize: 12, color: "var(--accent)", fontWeight: 700, letterSpacing: "0.3em", marginBottom: 22 }}>
                    {svc.en.toUpperCase()}
                  </p>
                  <h2 style={{
                    fontSize: "clamp(44px, 6vw, 88px)", fontWeight: 900,
                    letterSpacing: "-0.04em", color: "#0A1628", lineHeight: 1.05, marginBottom: 22,
                  }}>
                    {svc.ko}
                  </h2>
                  <div style={{ width: 48, height: 3, background: "var(--accent)", marginBottom: 26, opacity: 0.85 }} />
                  <p style={{ fontSize: 15, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.05em", marginBottom: 20 }}>
                    {svc.sub}
                  </p>
                  <p style={{ fontSize: 18, color: "#3d5570", lineHeight: 1.95, maxWidth: 520 }}>
                    {svc.desc}
                  </p>
                  <a href="#contact" className="gk-panel-link">
                    문의하기 →
                  </a>
                </div>

                {/* 하단 진행 바 */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "rgba(10,22,40,0.06)" }}>
                  <div style={{
                    height: "100%",
                    width: `${((i + 1) / SERVICES.length) * 100}%`,
                    background: "var(--accent)",
                    opacity: activePanel === i ? 1 : 0.2,
                    transition: "opacity 0.3s",
                  }} />
                </div>
              </div>
            ))}
          </div>

          {/* 도트 네비 */}
          <div style={{
            position: "absolute", bottom: 28, left: "50%",
            transform: "translateX(-50%)",
            display: "flex", gap: 10, zIndex: 10, pointerEvents: "none",
          }}>
            {SERVICES.map((_, i) => (
              <div key={i} style={{
                width: activePanel === i ? 28 : 6, height: 3,
                background: activePanel === i ? "var(--accent)" : "rgba(10,22,40,0.2)",
                borderRadius: 2, transition: "all 0.35s ease",
              }} />
            ))}
          </div>
        </div>

        {/* ── 영상 쇼케이스 1 ── */}
        <section className="video-section" style={{
          position: "relative", width: "100%", height: "80vh", minHeight: 480,
          background: "#030609", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_SHOWCASE[0].id}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_SHOWCASE[0].id}&controls=0&disablekb=1&modestbranding=1&playsinline=1&rel=0&showinfo=0`}
              allow="autoplay; encrypted-media"
              style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: "177.78vh", minWidth: "100%",
                height: "56.25vw", minHeight: "100%",
                border: "none", pointerEvents: "none",
              }}
            />
          </div>
          <div style={{
            position: "absolute", inset: 0, zIndex: 1,
            background: "linear-gradient(to right, rgba(10,22,40,0.88) 0%, rgba(10,22,40,0.45) 55%, rgba(10,22,40,0.15) 100%)",
          }} />
          <div style={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", alignItems: "center", padding: "0 80px" }}>
            <div className="video-label" style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
              <p style={{ fontSize: 12, color: "var(--accent)", fontWeight: 700, letterSpacing: "0.35em", marginBottom: 22 }}>
                {VIDEO_SHOWCASE[0].label}
              </p>
              <h3 style={{ fontSize: "clamp(32px, 5vw, 68px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", marginBottom: 18 }}>
                {VIDEO_SHOWCASE[0].title}
              </h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", letterSpacing: "0.04em" }}>
                {VIDEO_SHOWCASE[0].sub}
              </p>
            </div>
          </div>
        </section>

        {/* ── ABOUT (light) ── */}
        <section id="about" style={{ padding: "128px 80px", background: "#FFFFFF" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, alignItems: "center" }}>
              <div>
                <p className="reveal" style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.35em", color: "var(--accent)", marginBottom: 22 }}>WHO WE ARE</p>
                <h3 className="reveal" style={{
                  fontSize: "clamp(32px, 4.5vw, 60px)", fontWeight: 900,
                  letterSpacing: "-0.03em", marginBottom: 32, lineHeight: 1.15, color: "#0A1628",
                }}>
                  독일 자동차 기술의<br />기준을 국내에
                </h3>
                <p className="reveal" style={{ fontSize: 18, color: "#3d5570", lineHeight: 2.0, marginBottom: 22 }}>
                  저먼코리아(주)는 독일의 자동차 시험·평가 기준과 노하우를 바탕으로
                  국내외 자동차 제조사·부품사에 전문 시험 서비스를 제공합니다.
                </p>
                <p className="reveal" style={{ fontSize: 18, color: "#3d5570", lineHeight: 2.0 }}>
                  FCA·ADAS·자율주행 등 첨단 기술 시험부터 자기인증, 해외 시험 대행까지 —
                  국내에서 가장 독일과 가까운 자동차 평가 전문기업입니다.
                </p>
              </div>
              <div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "rgba(10,22,40,0.07)" }}>
                  {[
                    { label: "경기도 화성시", sub: "국내 시험 거점" },
                    { label: "031-366-8808", sub: "대표 전화" },
                    { label: "5개 분야", sub: "핵심 사업영역" },
                    { label: "독일·유럽·미국·중국", sub: "해외 파트너 거점" },
                  ].map((item) => (
                    <div key={item.label} className="reveal" style={{ background: "#FFFFFF", padding: "36px 32px" }}>
                      <p style={{ fontSize: "clamp(14px, 1.5vw, 18px)", fontWeight: 800, color: "#0A1628", marginBottom: 8 }}>{item.label}</p>
                      <p style={{ fontSize: 12, color: "#7090b0", letterSpacing: "0.06em" }}>{item.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY GERMAN KOREA (light gray) ── */}
        <section style={{ padding: "128px 80px", background: "#F3F7FC" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <p className="reveal" style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.35em", color: "var(--accent)", marginBottom: 22 }}>WHY GERMAN KOREA</p>
            <h3 className="reveal" style={{
              fontSize: "clamp(32px, 4.5vw, 60px)", fontWeight: 900,
              letterSpacing: "-0.03em", marginBottom: 80, maxWidth: 620, color: "#0A1628",
            }}>
              한 곳에서 끝나는<br />자동차 시험 파트너
            </h3>

            {/* 비대칭 벤토 */}
            <div className="strengths-bento" style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 2, background: "rgba(10,22,40,0.07)" }}>
              {/* 카드 1 */}
              <div className="strength-card" style={{
                position: "relative", overflow: "hidden", padding: "60px 56px",
                background: "#FFFFFF",
                transition: "box-shadow 0.3s",
              }}
                onMouseOver={(e) => { e.currentTarget.style.boxShadow = "0 8px 40px rgba(0,45,114,0.08)"; }}
                onMouseOut={(e) => { e.currentTarget.style.boxShadow = "none"; }}
              >
                <span style={{
                  position: "absolute", top: -12, right: 16, fontSize: 140, fontWeight: 900, lineHeight: 1,
                  color: "rgba(0,45,114,0.04)", letterSpacing: "-0.05em", userSelect: "none", pointerEvents: "none",
                }}>{STRENGTHS[0].n}</span>
                <p style={{ fontSize: 12, color: "var(--accent)", fontWeight: 700, letterSpacing: "0.22em", marginBottom: 22 }}>{STRENGTHS[0].n}</p>
                <h4 style={{ fontSize: "clamp(20px, 2.2vw, 28px)", fontWeight: 800, marginBottom: 18, lineHeight: 1.3, color: "#0A1628" }}>{STRENGTHS[0].title}</h4>
                <div style={{ width: 36, height: 3, background: "var(--accent)", marginBottom: 22, opacity: 0.8 }} />
                <p style={{ fontSize: 17, color: "#3d5570", lineHeight: 1.9, maxWidth: 400 }}>{STRENGTHS[0].desc}</p>
              </div>
              {/* 카드 2 */}
              <div className="strength-card" style={{
                position: "relative", overflow: "hidden", padding: "60px 44px",
                background: "#EBF0F8",
                borderLeft: "1px solid rgba(10,22,40,0.07)",
                transition: "box-shadow 0.3s",
              }}
                onMouseOver={(e) => { e.currentTarget.style.boxShadow = "0 8px 40px rgba(0,45,114,0.08)"; }}
                onMouseOut={(e) => { e.currentTarget.style.boxShadow = "none"; }}
              >
                <span style={{
                  position: "absolute", bottom: -10, right: 16, fontSize: 120, fontWeight: 900, lineHeight: 1,
                  color: "rgba(0,45,114,0.05)", letterSpacing: "-0.05em", userSelect: "none", pointerEvents: "none",
                }}>{STRENGTHS[1].n}</span>
                <p style={{ fontSize: 12, color: "var(--accent)", fontWeight: 700, letterSpacing: "0.22em", marginBottom: 22 }}>{STRENGTHS[1].n}</p>
                <h4 style={{ fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 800, marginBottom: 18, lineHeight: 1.3, color: "#0A1628" }}>{STRENGTHS[1].title}</h4>
                <div style={{ width: 30, height: 3, background: "var(--accent)", marginBottom: 22, opacity: 0.8 }} />
                <p style={{ fontSize: 16, color: "#3d5570", lineHeight: 1.9 }}>{STRENGTHS[1].desc}</p>
              </div>
              {/* 카드 3 — 전폭 가로형 */}
              <div className="strength-card strength-card-wide" style={{
                gridColumn: "span 2", display: "flex", alignItems: "center", gap: 80,
                padding: "48px 56px", background: "#0A1628",
                borderTop: "1px solid rgba(10,22,40,0.07)",
                transition: "background 0.3s",
              }}
                onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.background = "#0D1E35"; }}
                onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.background = "#0A1628"; }}
              >
                <div style={{ flexShrink: 0 }}>
                  <p style={{ fontSize: 12, color: "var(--accent)", fontWeight: 700, letterSpacing: "0.22em", marginBottom: 14 }}>{STRENGTHS[2].n}</p>
                  <h4 style={{ fontSize: "clamp(20px, 2.2vw, 28px)", fontWeight: 800, lineHeight: 1.25, minWidth: 220, color: "#fff" }}>{STRENGTHS[2].title}</h4>
                </div>
                <div style={{ width: 1, height: 60, background: "rgba(204,0,34,0.25)", flexShrink: 0 }} />
                <p style={{ fontSize: 17, color: "rgba(200,218,240,0.75)", lineHeight: 1.9 }}>{STRENGTHS[2].desc}</p>
                <div style={{ marginLeft: "auto", flexShrink: 0 }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", border: "1px solid rgba(204,0,34,0.35)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3 9h12M9 3l6 6-6 6" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 영상 쇼케이스 2 ── */}
        <section className="video-section" style={{
          position: "relative", width: "100%", height: "70vh", minHeight: 420,
          background: "#030609", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_SHOWCASE[1].id}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_SHOWCASE[1].id}&controls=0&disablekb=1&modestbranding=1&playsinline=1&rel=0&showinfo=0`}
              allow="autoplay; encrypted-media"
              style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: "177.78vh", minWidth: "100%",
                height: "56.25vw", minHeight: "100%",
                border: "none", pointerEvents: "none",
              }}
            />
          </div>
          <div style={{
            position: "absolute", inset: 0, zIndex: 1,
            background: "linear-gradient(to left, rgba(10,22,40,0.88) 0%, rgba(10,22,40,0.45) 55%, rgba(10,22,40,0.15) 100%)",
          }} />
          <div style={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", alignItems: "center", justifyContent: "flex-end", padding: "0 80px" }}>
            <div className="video-label" style={{ textAlign: "right", maxWidth: 560 }}>
              <p style={{ fontSize: 12, color: "var(--accent)", fontWeight: 700, letterSpacing: "0.35em", marginBottom: 22 }}>
                {VIDEO_SHOWCASE[1].label}
              </p>
              <h3 style={{ fontSize: "clamp(28px, 4.5vw, 64px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", marginBottom: 18 }}>
                {VIDEO_SHOWCASE[1].title}
              </h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", letterSpacing: "0.04em" }}>
                {VIDEO_SHOWCASE[1].sub}
              </p>
            </div>
          </div>
        </section>

        {/* ── PROCESS (white) ── */}
        <section id="process" style={{ padding: "128px 80px", background: "#FFFFFF" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <p className="reveal" style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.35em", color: "var(--accent)", marginBottom: 22 }}>PROCESS</p>
            <h3 className="reveal" style={{
              fontSize: "clamp(32px, 4.5vw, 60px)", fontWeight: 900,
              letterSpacing: "-0.03em", marginBottom: 18, color: "#0A1628",
            }}>
              시험 의뢰부터<br />결과 보고까지
            </h3>
            <p className="reveal" style={{ fontSize: 18, color: "#3d5570", marginBottom: 88, lineHeight: 1.9, maxWidth: 580 }}>
              체계적인 4단계 프로세스로 시험의 신뢰도와 정확성을 보장합니다.
            </p>
            <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, position: "relative" }}>
              <div style={{
                position: "absolute", top: 36, left: "12.5%", right: "12.5%",
                height: 1, background: "linear-gradient(90deg, transparent, rgba(204,0,34,0.3) 20%, rgba(204,0,34,0.3) 80%, transparent)",
                pointerEvents: "none", zIndex: 0,
              }} />
              {PROCESS.map((p, i) => (
                <div key={p.step} className="proc-step" style={{
                  padding: "0 36px 52px",
                  borderRight: i < 3 ? "1px solid rgba(10,22,40,0.07)" : "none",
                  position: "relative", zIndex: 1,
                }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: "50%",
                    border: "1px solid rgba(204,0,34,0.3)", background: "rgba(204,0,34,0.05)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 36,
                  }}>
                    <span style={{ fontSize: 13, fontWeight: 800, color: "var(--accent)", letterSpacing: "0.08em" }}>{p.step}</span>
                  </div>
                  <h4 style={{ fontSize: 21, fontWeight: 800, marginBottom: 14, color: "#0A1628" }}>{p.title}</h4>
                  <p style={{ fontSize: 15, color: "#3d5570", lineHeight: 1.85 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT CTA (dark) ── */}
        <section id="contact" style={{ padding: "160px 80px", textAlign: "center", background: "#0A1628", position: "relative", overflow: "hidden" }}>
          <div style={{
            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
            width: "80vw", height: "80vw", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(204,0,34,0.05) 0%, transparent 62%)",
            pointerEvents: "none",
          }} />
          <div className="gk-grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.6 }} />
          <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
            <p className="reveal" style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.35em", color: "var(--accent)", marginBottom: 28 }}>CONTACT</p>
            <h3 className="reveal" style={{
              fontSize: "clamp(36px, 5.5vw, 76px)", fontWeight: 900,
              letterSpacing: "-0.03em", marginBottom: 28, color: "#fff",
            }}>
              시험 의뢰 및<br />문의는 여기로
            </h3>
            <p className="reveal" style={{ fontSize: 18, color: "rgba(200,218,240,0.65)", marginBottom: 14, lineHeight: 1.9 }}>
              경기도 화성시 남양읍 화성로 1444-12
            </p>
            <p className="reveal" style={{ fontSize: 15, color: "rgba(200,218,240,0.4)", marginBottom: 60, letterSpacing: "0.02em" }}>
              영업일 기준 24시간 내 답변 드립니다
            </p>
            <div className="reveal cta-buttons" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:031-366-8808" className="gk-cta-btn">031-366-8808 전화하기</a>
              <a href="mailto:contact@germankorea.co.kr" className="gk-outline-btn">이메일 문의</a>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>

      <style>{`
        /* CTA 버튼 */
        .gk-cta-btn {
          padding: 18px 48px; background: var(--accent); color: #fff;
          font-size: 15px; font-weight: 800; letter-spacing: 0.06em;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.15), 0 4px 20px rgba(204,0,34,0.22);
          transition: transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s;
          will-change: transform;
        }
        .gk-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 10px 32px rgba(204,0,34,0.32);
        }
        .gk-cta-btn:active { transform: scale(0.97) translateY(0); }

        .gk-outline-btn {
          padding: 18px 48px; border: 1px solid rgba(255,255,255,0.18); color: rgba(255,255,255,0.65);
          font-size: 15px; font-weight: 600; letter-spacing: 0.06em;
          transition: all 0.25s cubic-bezier(0.16,1,0.3,1);
        }
        .gk-outline-btn:hover { border-color: rgba(255,255,255,0.38); color: #fff; transform: translateY(-1px); }
        .gk-outline-btn:active { transform: scale(0.97); }

        /* 서비스 패널 링크 */
        .gk-panel-link {
          display: inline-flex; align-items: center; gap: 10;
          margin-top: 44px; font-size: 13px; font-weight: 700;
          color: var(--accent); letter-spacing: 0.1em;
          border-bottom: 1px solid rgba(204,0,34,0.3); padding-bottom: 4px;
          transition: gap 0.2s, border-color 0.2s;
        }
        .gk-panel-link:hover { gap: 16px; border-color: var(--accent); }

        @media (max-width: 768px) {
          .hero-section { padding: 80px 20px 64px !important; }
          .hero-buttons { flex-direction: column !important; }
          .hero-buttons a { width: 100% !important; text-align: center !important; }

          #about { padding: 72px 20px !important; }
          #about > div > div { grid-template-columns: 1fr !important; gap: 48px !important; }

          .strengths-bento { grid-template-columns: 1fr !important; }
          .strength-card { padding: 40px 28px !important; }
          .strength-card-wide { flex-direction: column !important; gap: 24px !important; padding: 40px 28px !important; }
          .strength-card-wide > div:nth-child(2) { display: none !important; }
          .strength-card-wide > div:last-child { display: none !important; }

          .video-section { height: 56vw !important; min-height: 240px !important; }
          .video-section iframe { width: 100% !important; height: 100% !important; transform: none !important; top: 0 !important; left: 0 !important; }

          #process { padding: 72px 20px !important; }
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .proc-step { border-right: none !important; padding: 32px 16px !important; }
          .proc-step:nth-child(odd) { border-right: 1px solid rgba(10,22,40,0.07) !important; }

          #contact { padding: 88px 20px !important; }
          .cta-buttons { flex-direction: column !important; align-items: stretch !important; }
          .cta-buttons a { text-align: center !important; padding: 18px 24px !important; }
        }
      `}</style>
    </>
  );
}
