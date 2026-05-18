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
    sub: "NVH · 내구성 · 주행성능 · 안전기능 · 연비",
    desc: "국내 법규 및 완성차 메이커 요구사항에 따른 실차 종합 성능 시험. 국내 5대 완성차사 협력 기반의 현장 검증 서비스.",
    accent: "#CC0022",
    bg: "linear-gradient(135deg, #0a0d12 0%, #12060b 100%)",
  },
  {
    num: "02",
    ko: "해외 실차시험",
    en: "Overseas Vehicle Testing",
    sub: "독일 · 중국(연태) · 미국 거점 직접 대행",
    desc: "유럽·북미·중국 현지 시험장을 활용한 해외 실차시험 대행. 혹한지·혹서지·고지 시험까지 원스톱 처리.",
    accent: "#CC0022",
    bg: "linear-gradient(135deg, #080d16 0%, #0b0f1c 100%)",
  },
  {
    num: "03",
    ko: "기술시험",
    en: "Technical Testing",
    sub: "FCA · AEB · ADAS · 자율주행 검증",
    desc: "전방추돌경고·자동비상제동(FCA/AEB), ADAS 센서 퓨전, 자율주행 기술 시험·평가. Euro NCAP·C-NCAP 기준 첨단 안전기능 검증.",
    accent: "#CC0022",
    bg: "linear-gradient(135deg, #0c0810 0%, #0f0a08 100%)",
  },
  {
    num: "04",
    ko: "기술교육",
    en: "Technical Training",
    sub: "자동차 시험·평가 전문 실무 교육",
    desc: "국내외 자동차 법규·시험 방법론 및 FCA·ADAS·자율주행 최신 기술 교육. 현장 전문가 직강 프로그램.",
    accent: "#CC0022",
    bg: "linear-gradient(135deg, #070d0a 0%, #090c10 100%)",
  },
  {
    num: "05",
    ko: "자기인증",
    en: "Self-Certification",
    sub: "국토교통부 자동차 자기인증 전 과정 대행",
    desc: "형식승인·안전기준 적합성 검증부터 인증 서류 작성·제출까지. 중소 부품사·스타트업도 쉽게 통과하는 원스톱 지원.",
    accent: "#CC0022",
    bg: "linear-gradient(135deg, #0a0c0d 0%, #0d0810 100%)",
  },
];

const STRENGTHS = [
  { n: "01", title: "독일 기반 글로벌 네트워크", desc: "독일 현지 시험기관·완성차 메이커와의 직접 협력. 유럽 시험 기준을 가장 빠르게 국내에 도입합니다." },
  { n: "02", title: "FCA · ADAS 전문성", desc: "전방추돌경고·자동비상제동 시험에 특화. Euro NCAP 기준 적용 가능한 국내 민간 전문기관." },
  { n: "03", title: "원스톱 인증 지원", desc: "시험 계획부터 실차 평가, 자기인증 서류까지 전 과정 한 팀이 책임집니다." },
];

const PROCESS = [
  { step: "01", title: "요건 분석", desc: "법규·고객 요구사항 분석, 시험 항목 및 범위 정의" },
  { step: "02", title: "시험 계획", desc: "시험 방법·일정·장소·비용 수립 및 사전 협의" },
  { step: "03", title: "실차 시험", desc: "현장 시험 수행, 정밀 데이터 계측·기록" },
  { step: "04", title: "결과 보고", desc: "분석 리포트, 인증 대응 권고안 및 후속 지원" },
];

// 영상 쇼케이스에 삽입할 YouTube 영상 ID
// 실제 시험 영상으로 교체하세요
const VIDEO_SHOWCASE = [
  {
    id: "rU3mEBSRiUU",          // 교체 필요: 저먼코리아 실제 시험 영상
    label: "FIELD RECORD",
    title: "실차 시험 현장",
    sub: "직접 촬영한 시험 영상으로 교체하세요",
  },
  {
    id: "jfKfPfyJRdk",          // 교체 필요: FCA/ADAS 기술시험 영상
    label: "TECHNICAL TESTING",
    title: "FCA · ADAS 기술시험",
    sub: "첨단 안전기술 검증 영상으로 교체하세요",
  },
];

export default function Home() {
  const introRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const siteRef = useRef<HTMLDivElement>(null);
  const hTrackRef = useRef<HTMLDivElement>(null);
  const hContainerRef = useRef<HTMLDivElement>(null);
  const [introVisible, setIntroVisible] = useState(true);
  const [activePanel, setActivePanel] = useState(0);

  // 인트로 애니메이션
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(logoRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .to(logoRef.current, { duration: 1.0 })
    .to(logoRef.current, { opacity: 0, y: -40, duration: 0.6, ease: "power2.in" })
    .to(introRef.current, { opacity: 0, duration: 0.4, ease: "power2.in" }, "-=0.3")
    .add(() => {
      setIntroVisible(false);
      gsap.fromTo(siteRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.7, ease: "power2.out" }
      );
    });
  }, []);

  // 메인 GSAP 애니메이션
  useEffect(() => {
    if (introVisible) return;

    const ctx = gsap.context(() => {
      // 히어로 텍스트 등장
      gsap.fromTo(".hero-line", { y: 80, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.13, ease: "power3.out", delay: 0.1,
      });
      gsap.fromTo(".hero-sub", { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.55,
      });
      gsap.fromTo(".hero-buttons", { opacity: 0, y: 16 }, {
        opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.8,
      });

      // 수평 스크롤 — 서비스 패널
      const track = hTrackRef.current;
      const container = hContainerRef.current;
      if (track && container) {
        const totalMove = (SERVICES.length - 1) * window.innerWidth;

        const hST = gsap.to(track, {
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
              const idx = Math.round(self.progress * (SERVICES.length - 1));
              setActivePanel(idx);
            },
          },
        });
        void hST;
      }

      // 스크롤 트리거 reveal
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
        });
      });

      // 강점 카드
      gsap.fromTo(".strength-card", { opacity: 0, y: 28 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out",
        scrollTrigger: { trigger: ".strengths-grid", start: "top 75%", once: true },
      });

      // 프로세스 스텝
      gsap.fromTo(".proc-step", { opacity: 0, x: -24 }, {
        opacity: 1, x: 0, duration: 0.6, stagger: 0.15, ease: "power2.out",
        scrollTrigger: { trigger: ".process-grid", start: "top 75%", once: true },
      });

      // 비디오 섹션 오버레이 텍스트
      gsap.utils.toArray<HTMLElement>(".video-label").forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 32 }, {
          opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el.closest(".video-section"), start: "top 70%", once: true },
        });
      });
    });

    return () => ctx.revert();
  }, [introVisible]);

  return (
    <>
      {/* 인트로 */}
      {introVisible && (
        <div ref={introRef} style={{
          position: "fixed", inset: 0, zIndex: 100, background: "#08121E",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div ref={logoRef} style={{ opacity: 0, textAlign: "center" }}>
            <p style={{ fontSize: 11, letterSpacing: "0.45em", color: "var(--accent)", fontWeight: 700, marginBottom: 20 }}>
              AUTOMOTIVE TESTING &amp; EVALUATION
            </p>
            <h1 style={{ fontSize: "clamp(36px, 7vw, 84px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1 }}>
              GERMAN<span style={{ color: "var(--accent)" }}>KOREA</span>
            </h1>
            <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, transparent, var(--accent), transparent)", marginTop: 20, opacity: 0.5 }} />
            <p style={{ marginTop: 16, fontSize: 12, color: "var(--text-muted)", letterSpacing: "0.14em" }}>저먼코리아(주)</p>
          </div>
        </div>
      )}

      <div ref={siteRef} style={{ opacity: 0 }}>
        <Navbar />

        {/* ── HERO ── */}
        <section className="hero-section" style={{
          minHeight: "100vh",
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          padding: "0 80px 100px",
          position: "relative", overflow: "hidden",
        }}>
          {/* 기술 그리드 배경 */}
          <div className="gk-grid-bg" style={{ position: "absolute", inset: 0, zIndex: 0 }} />
          {/* 좌측 그라디언트 */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 1,
            background: "linear-gradient(to right, rgba(8,18,30,0.95) 0%, rgba(8,18,30,0.6) 50%, rgba(8,18,30,0.2) 100%)",
          }} />
          {/* 밑에서 올라오는 그라디언트 */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 1,
            background: "linear-gradient(to top, #08121E 0%, transparent 40%)",
          }} />
          {/* 우측 링 장식 */}
          <div style={{
            position: "absolute", right: "8%", top: "50%", transform: "translateY(-50%)",
            width: 420, height: 420, borderRadius: "50%",
            border: "1px solid rgba(204,0,34,0.1)",
            boxShadow: "inset 0 0 0 40px rgba(204,0,34,0.03), 0 0 0 80px rgba(204,0,34,0.02)",
            zIndex: 1,
          }}>
            <div style={{ position: "absolute", inset: 50, borderRadius: "50%", border: "1px solid rgba(204,0,34,0.07)" }}>
              <div style={{ position: "absolute", inset: 50, borderRadius: "50%", border: "1px solid rgba(204,0,34,0.05)" }} />
            </div>
          </div>
          {/* 빨간 빛 */}
          <div style={{
            position: "absolute", top: "30%", left: "20%",
            width: "50vw", height: "50vw", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(204,0,34,0.06) 0%, transparent 65%)",
            pointerEvents: "none", zIndex: 1,
          }} />

          <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>
            {/* 태그라인 */}
            <div style={{ marginBottom: 28 }}>
              <p className="hero-line" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: "0.35em", color: "var(--accent)",
                display: "flex", alignItems: "center", gap: 12,
              }}>
                <span style={{ display: "inline-block", width: 32, height: 1, background: "var(--accent)" }} />
                GERMAN KOREA — 저먼코리아(주)
              </p>
            </div>
            {/* 헤드라인 */}
            <div style={{ marginBottom: 36 }}>
              <div className="hero-line-wrap">
                <h2 className="hero-line" style={{ fontSize: "clamp(40px, 7.5vw, 104px)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-0.04em", color: "#fff" }}>
                  자동차 성능 시험,
                </h2>
              </div>
              <div className="hero-line-wrap">
                <h2 className="hero-line" style={{ fontSize: "clamp(40px, 7.5vw, 104px)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-0.04em" }}>
                  <span className="gk-gradient-text">독일 기준</span>
                  <span style={{ color: "#fff" }}>으로.</span>
                </h2>
              </div>
            </div>
            <p className="hero-sub" style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.9, maxWidth: 460, marginBottom: 52, opacity: 0 }}>
              국내·해외 실차시험 · FCA/ADAS 기술시험<br />기술교육 · 자기인증 — 5개 분야 원스톱
            </p>
            <div className="hero-buttons" style={{ display: "flex", gap: 16, flexWrap: "wrap", opacity: 0 }}>
              <a href="#contact" className="gk-cta-btn">시험 의뢰하기</a>
              <a href="#services-section" className="gk-outline-btn" style={{ display: "flex", alignItems: "center", gap: 10 }}>
                사업분야 보기
                <span style={{ fontSize: 18 }}>↓</span>
              </a>
            </div>
          </div>

          {/* SCROLL 인디케이터 */}
          <div style={{
            position: "absolute", bottom: 40, right: 48, zIndex: 2,
            display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          }}>
            <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)", writingMode: "vertical-rl" }}>SCROLL</span>
            <div style={{ width: 1, height: 56, background: "linear-gradient(to bottom, var(--accent), transparent)", opacity: 0.6 }} />
          </div>
        </section>

        {/* ── HORIZONTAL SCROLL — 사업분야 ── */}
        <div id="services-section" ref={hContainerRef} style={{ position: "relative" }}>
          <div ref={hTrackRef} style={{
            display: "flex",
            width: `${SERVICES.length * 100}vw`,
            height: "100vh",
            willChange: "transform",
          }}>
            {SERVICES.map((svc, i) => (
              <div
                key={svc.num}
                style={{
                  width: "100vw", height: "100vh",
                  flexShrink: 0,
                  background: svc.bg,
                  position: "relative", overflow: "hidden",
                  display: "flex", flexDirection: "column", justifyContent: "flex-end",
                  padding: "80px",
                }}
              >
                {/* 배경 그리드 */}
                <div className="gk-grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />
                {/* 빛 */}
                <div style={{
                  position: "absolute", bottom: "-10%", left: "10%",
                  width: "40vw", height: "40vw", borderRadius: "50%",
                  background: `radial-gradient(circle, rgba(204,0,34,0.08) 0%, transparent 65%)`,
                  pointerEvents: "none",
                }} />
                {/* 대형 번호 (배경) */}
                <span style={{
                  position: "absolute", top: "50%", right: "8%",
                  transform: "translateY(-50%)",
                  fontSize: "clamp(200px, 25vw, 340px)",
                  fontWeight: 900, lineHeight: 1,
                  color: "rgba(204,0,34,0.06)",
                  letterSpacing: "-0.06em",
                  userSelect: "none", pointerEvents: "none",
                }}>{svc.num}</span>
                {/* 우측 상단 — 서비스 카운터 */}
                <div style={{
                  position: "absolute", top: 48, right: 80,
                  fontSize: 11, color: "var(--text-dim)", letterSpacing: "0.15em",
                }}>
                  {String(i + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
                </div>
                {/* 콘텐츠 */}
                <div style={{ position: "relative", zIndex: 1, maxWidth: 720 }}>
                  <p style={{ fontSize: 11, color: "var(--accent)", fontWeight: 700, letterSpacing: "0.3em", marginBottom: 20 }}>
                    {svc.en.toUpperCase()}
                  </p>
                  <h2 style={{ fontSize: "clamp(44px, 6vw, 88px)", fontWeight: 900, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1.05, marginBottom: 20 }}>
                    {svc.ko}
                  </h2>
                  <div style={{ width: 48, height: 2, background: "var(--accent)", marginBottom: 24, opacity: 0.8 }} />
                  <p style={{ fontSize: 13, color: "rgba(204,0,34,0.85)", fontWeight: 600, letterSpacing: "0.06em", marginBottom: 20 }}>
                    {svc.sub}
                  </p>
                  <p style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.9, maxWidth: 520 }}>
                    {svc.desc}
                  </p>
                  <a href="#contact" style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    marginTop: 40, fontSize: 12, fontWeight: 700, color: "var(--accent)",
                    letterSpacing: "0.1em", borderBottom: "1px solid rgba(204,0,34,0.3)",
                    paddingBottom: 4, transition: "gap 0.2s, border-color 0.2s",
                  }}
                    onMouseOver={(e) => { e.currentTarget.style.gap = "16px"; e.currentTarget.style.borderColor = "var(--accent)"; }}
                    onMouseOut={(e) => { e.currentTarget.style.gap = "10px"; e.currentTarget.style.borderColor = "rgba(204,0,34,0.3)"; }}
                  >
                    문의하기 →
                  </a>
                </div>

                {/* 하단 진행 바 */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
                  background: "rgba(255,255,255,0.04)",
                }}>
                  <div style={{
                    height: "100%",
                    width: `${((i + 1) / SERVICES.length) * 100}%`,
                    background: "var(--accent)",
                    opacity: activePanel === i ? 1 : 0.25,
                    transition: "opacity 0.3s",
                  }} />
                </div>
              </div>
            ))}
          </div>

          {/* 패널 도트 네비게이션 (오버레이) */}
          <div style={{
            position: "absolute", bottom: 28, left: "50%",
            transform: "translateX(-50%)",
            display: "flex", gap: 10, zIndex: 10, pointerEvents: "none",
          }}>
            {SERVICES.map((_, i) => (
              <div key={i} style={{
                width: activePanel === i ? 28 : 6,
                height: 3,
                background: activePanel === i ? "var(--accent)" : "rgba(255,255,255,0.25)",
                borderRadius: 2,
                transition: "all 0.35s ease",
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
                position: "absolute",
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: "177.78vh", minWidth: "100%",
                height: "56.25vw", minHeight: "100%",
                border: "none", pointerEvents: "none",
              }}
            />
          </div>
          {/* 오버레이 */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 1,
            background: "linear-gradient(to right, rgba(8,18,30,0.85) 0%, rgba(8,18,30,0.4) 55%, rgba(8,18,30,0.15) 100%)",
          }} />
          <div style={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", alignItems: "center", padding: "0 80px" }}>
            <div className="video-label" style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
              <p style={{ fontSize: 11, color: "var(--accent)", fontWeight: 700, letterSpacing: "0.35em", marginBottom: 20 }}>
                {VIDEO_SHOWCASE[0].label}
              </p>
              <h3 style={{ fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", marginBottom: 16 }}>
                {VIDEO_SHOWCASE[0].title}
              </h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", letterSpacing: "0.04em" }}>
                {VIDEO_SHOWCASE[0].sub}
              </p>
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" style={{ padding: "120px 80px", background: "#06101a" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
              <div>
                <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.35em", color: "var(--accent)", marginBottom: 20 }}>WHO WE ARE</p>
                <h3 className="reveal" style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 28, lineHeight: 1.15 }}>
                  독일 자동차 기술의<br />기준을 국내에
                </h3>
                <p className="reveal" style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.9, marginBottom: 20 }}>
                  저먼코리아(주)는 독일의 자동차 시험·평가 기준과 노하우를 바탕으로
                  국내외 자동차 제조사·부품사에 전문 시험 서비스를 제공합니다.
                </p>
                <p className="reveal" style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 1.9 }}>
                  FCA·ADAS·자율주행 등 첨단 기술 시험부터 자기인증, 해외 시험 대행까지 —
                  국내에서 가장 독일과 가까운 자동차 평가 전문기업입니다.
                </p>
              </div>
              <div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--border)" }}>
                  {[
                    { label: "경기도 화성시", sub: "시험 거점" },
                    { label: "031-366-8808", sub: "대표 전화" },
                    { label: "5개 분야", sub: "핵심 사업영역" },
                    { label: "독일·유럽·미국·중국", sub: "해외 파트너 거점" },
                  ].map((item) => (
                    <div key={item.label} className="reveal" style={{ background: "var(--bg-3)", padding: "32px 28px" }}>
                      <p style={{ fontSize: "clamp(13px, 1.4vw, 17px)", fontWeight: 800, color: "#fff", marginBottom: 6 }}>{item.label}</p>
                      <p style={{ fontSize: 11, color: "var(--text-dim)", letterSpacing: "0.06em" }}>{item.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY GERMAN KOREA ── */}
        <section style={{ padding: "120px 80px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.35em", color: "var(--accent)", marginBottom: 20 }}>WHY GERMAN KOREA</p>
            <h3 className="reveal" style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 72, maxWidth: 600 }}>
              한 곳에서 끝나는<br />자동차 시험 파트너
            </h3>
            <div className="strengths-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {STRENGTHS.map((item) => (
                <div
                  key={item.n}
                  className="strength-card"
                  style={{
                    position: "relative", overflow: "hidden", padding: "52px 40px",
                    background: "rgba(13,27,42,0.55)", border: "1px solid rgba(204,0,34,0.1)",
                    backdropFilter: "blur(16px)", transition: "transform 0.35s, box-shadow 0.35s, border-color 0.35s, background 0.35s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = "0 24px 60px rgba(204,0,34,0.08), 0 0 0 1px rgba(204,0,34,0.2)";
                    e.currentTarget.style.borderColor = "rgba(204,0,34,0.25)";
                    e.currentTarget.style.background = "rgba(13,27,42,0.85)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "";
                    e.currentTarget.style.boxShadow = "";
                    e.currentTarget.style.borderColor = "rgba(204,0,34,0.1)";
                    e.currentTarget.style.background = "rgba(13,27,42,0.55)";
                  }}
                >
                  <span style={{
                    position: "absolute", top: -8, right: 20, fontSize: 120, fontWeight: 900, lineHeight: 1,
                    color: "rgba(204,0,34,0.04)", letterSpacing: "-0.05em", userSelect: "none", pointerEvents: "none",
                  }}>{item.n}</span>
                  <p style={{ fontSize: 11, color: "var(--accent)", fontWeight: 700, letterSpacing: "0.2em", marginBottom: 20 }}>{item.n}</p>
                  <h4 style={{ fontSize: 22, fontWeight: 800, marginBottom: 16, lineHeight: 1.3 }}>{item.title}</h4>
                  <div style={{ width: 32, height: 2, background: "linear-gradient(90deg, var(--accent), transparent)", marginBottom: 20 }} />
                  <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.85 }}>{item.desc}</p>
                </div>
              ))}
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
                position: "absolute",
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: "177.78vh", minWidth: "100%",
                height: "56.25vw", minHeight: "100%",
                border: "none", pointerEvents: "none",
              }}
            />
          </div>
          <div style={{
            position: "absolute", inset: 0, zIndex: 1,
            background: "linear-gradient(to left, rgba(8,18,30,0.85) 0%, rgba(8,18,30,0.4) 55%, rgba(8,18,30,0.15) 100%)",
          }} />
          <div style={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", alignItems: "center", justifyContent: "flex-end", padding: "0 80px" }}>
            <div className="video-label" style={{ textAlign: "right", maxWidth: 560 }}>
              <p style={{ fontSize: 11, color: "var(--accent)", fontWeight: 700, letterSpacing: "0.35em", marginBottom: 20 }}>
                {VIDEO_SHOWCASE[1].label}
              </p>
              <h3 style={{ fontSize: "clamp(28px, 4.5vw, 60px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", marginBottom: 16 }}>
                {VIDEO_SHOWCASE[1].title}
              </h3>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", letterSpacing: "0.04em" }}>
                {VIDEO_SHOWCASE[1].sub}
              </p>
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section id="process" style={{ padding: "120px 80px", background: "#06101a" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.35em", color: "var(--accent)", marginBottom: 20 }}>PROCESS</p>
            <h3 className="reveal" style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 16 }}>
              시험 의뢰부터<br />결과 보고까지
            </h3>
            <p className="reveal" style={{ fontSize: 15, color: "var(--text-muted)", marginBottom: 80, lineHeight: 1.8, maxWidth: 560 }}>
              체계적인 4단계 프로세스로 시험의 신뢰도와 정확성을 보장합니다.
            </p>
            <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, position: "relative" }}>
              <div style={{
                position: "absolute", top: 36, left: "12.5%", right: "12.5%",
                height: 1, background: "linear-gradient(90deg, transparent, rgba(204,0,34,0.4) 20%, rgba(204,0,34,0.4) 80%, transparent)",
                pointerEvents: "none", zIndex: 0,
              }} />
              {PROCESS.map((p, i) => (
                <div key={p.step} className="proc-step" style={{
                  padding: "0 32px 48px",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  position: "relative", zIndex: 1,
                }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: "50%",
                    border: "1px solid rgba(204,0,34,0.35)", background: "rgba(204,0,34,0.06)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 32, backdropFilter: "blur(8px)",
                  }}>
                    <span style={{ fontSize: 13, fontWeight: 800, color: "var(--accent)", letterSpacing: "0.08em" }}>{p.step}</span>
                  </div>
                  <h4 style={{ fontSize: 19, fontWeight: 800, marginBottom: 12 }}>{p.title}</h4>
                  <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.8 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT CTA ── */}
        <section id="contact" style={{ padding: "160px 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{
            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
            width: "80vw", height: "80vw", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(204,0,34,0.04) 0%, transparent 65%)",
            pointerEvents: "none",
          }} />
          <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
            <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.35em", color: "var(--accent)", marginBottom: 24 }}>CONTACT</p>
            <h3 className="reveal" style={{ fontSize: "clamp(32px, 5vw, 68px)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 24 }}>
              시험 의뢰 및<br />문의는 여기로
            </h3>
            <p className="reveal" style={{ fontSize: 15, color: "var(--text-muted)", marginBottom: 12, lineHeight: 1.8 }}>
              경기도 화성시 남양읍 화성로 1444-12
            </p>
            <p className="reveal" style={{ fontSize: 13, color: "var(--text-dim)", marginBottom: 52, letterSpacing: "0.02em" }}>
              영업일 기준 24시간 내 답변 드립니다.
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
        @keyframes gk-gradient-shift {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        .gk-gradient-text {
          background: linear-gradient(90deg, #CC0022 0%, #ff3344 40%, #CC0022 80%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gk-gradient-shift 5s linear infinite;
        }

        .gk-cta-btn {
          padding: 18px 48px; background: var(--accent); color: #fff;
          font-size: 14px; font-weight: 800; letter-spacing: 0.06em;
          transition: opacity 0.2s;
          animation: gk-glow 2.5s ease-in-out infinite;
        }
        .gk-cta-btn:hover { opacity: 0.85; }

        .gk-outline-btn {
          padding: 18px 48px; border: 1px solid var(--border); color: var(--text-muted);
          font-size: 14px; font-weight: 600; letter-spacing: 0.06em;
          transition: all 0.2s;
        }
        .gk-outline-btn:hover { border-color: rgba(255,255,255,0.3); color: #fff; }

        @keyframes gk-glow {
          0%,100% { box-shadow: 0 0 20px rgba(204,0,34,0.4), 0 4px 24px rgba(204,0,34,0.2); }
          50%      { box-shadow: 0 0 48px rgba(204,0,34,0.7), 0 4px 40px rgba(204,0,34,0.35); }
        }

        @media (max-width: 768px) {
          .hero-section { padding: 80px 20px 64px !important; min-height: 100svh !important; }
          .hero-buttons { flex-direction: column !important; }
          .hero-buttons a { width: 100% !important; text-align: center !important; }

          #about { padding: 64px 20px !important; }
          #about > div > div { grid-template-columns: 1fr !important; gap: 40px !important; }

          .strengths-grid { grid-template-columns: 1fr !important; }
          .strength-card { padding: 36px 24px !important; }

          .video-section { height: 56vw !important; min-height: 240px !important; }
          .video-section iframe { width: 100% !important; height: 100% !important; transform: none !important; top: 0 !important; left: 0 !important; }

          #process { padding: 64px 20px !important; }
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .proc-step { border-right: none !important; padding: 32px 16px !important; }
          .proc-step:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.05) !important; }

          #contact { padding: 80px 20px !important; }
          .cta-buttons { flex-direction: column !important; align-items: stretch !important; }
          .cta-buttons a { text-align: center !important; padding: 18px 24px !important; }
        }
      `}</style>
    </>
  );
}
