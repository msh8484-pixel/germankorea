"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

gsap.registerPlugin(ScrollTrigger);

/* ── 기존 germankorea.com 콘텐츠 그대로 ── */
const SERVICES = [
  {
    num: "01",
    ko: "국내 실차시험",
    en: "Domestic Vehicle Testing",
    desc: "개발차량 또는 품질확인 차량의 내구신뢰성 시험, 각종 시스템 시험, 친환경자동차 시험 등의 실차시험 제공",
    items: ["필드 내구시험", "필드 모니터링", "PEMS 시험", "친환경자동차시험", "제동·조향시험", "연비성능시험"],
  },
  {
    num: "02",
    ko: "해외 실차시험",
    en: "Overseas Vehicle Testing",
    desc: "중국 현지 시험인프라를 이용한 혹한지·혹서지·고지시험, 중국 현지 성능 및 내구시험 등 실차시험 제공",
    items: ["혹한지시험", "혹서지시험", "고지시험", "성능 및 내구시험(중국)"],
  },
  {
    num: "03",
    ko: "기술시험",
    en: "Technical Testing",
    desc: "신기술(FCA·ADAS·자율주행) 시험, 실주행 데이터베이스 취득 및 모니터링, 차량 상품성 평가 등 기술시험 제공",
    items: ["FCA 시험", "실주행 D/B 및 Monitoring", "System 특성시험", "상품성 평가", "군집주행"],
  },
  {
    num: "04",
    ko: "기술교육",
    en: "Technical Training",
    desc: "전문 강사진을 통한 고객 맞춤형 시험차량 운전, 상품성 평가방법, 차량 주행성능 시험법 등의 기술교육 제공",
    items: ["시험차량 운전교육", "상품성 평가방법 교육", "차량 주행성능 시험법 교육"],
  },
  {
    num: "05",
    ko: "자기인증",
    en: "Self-Certification",
    desc: "자동차 및 자동차부품 인증, 자동차 안전시험, RECALL 대응 등 최적의 인증컨설팅 제공",
    items: ["자동차 및 부품 인증컨설팅", "자동차 안전시험", "Recall 대응 컨설팅"],
  },
];

const STRENGTHS = [
  { n: "01", title: "독일 기반 글로벌 네트워크", desc: "독일 현지 시험기관·완성차 메이커와의 직접 협력 네트워크. 유럽 최신 시험 기준을 국내에서 가장 빠르게 도입합니다." },
  { n: "02", title: "FCA · ADAS 전문성",        desc: "전방추돌경고·자동비상제동(FCA/AEB) 및 ADAS 시험 특화. Euro NCAP·C-NCAP 기준 적용 가능한 국내 민간 전문기관." },
  { n: "03", title: "원스톱 인증 지원",          desc: "시험 계획부터 실차 평가, 자기인증 서류 제출까지 전 과정을 한 팀이 책임집니다." },
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
  "Euro NCAP", "·", "C-NCAP", "·", "혹한지 · 혹서지", "·",
];

/* 히어로 배경 영상: Euro NCAP BMW 5 Series 2023 */
const HERO_VIDEO = "1KO2v_hcM9g";
/* 중간 영상: 스웨덴 아르예플로그 겨울 주행시험 */
const MID_VIDEO  = "xFrMzrTZ8Uk";

export default function Home() {
  const introRef = useRef<HTMLDivElement>(null);
  const logoRef  = useRef<HTMLDivElement>(null);
  const siteRef  = useRef<HTMLDivElement>(null);
  const [introVisible, setIntroVisible] = useState(true);

  /* ── 인트로 ── */
  useEffect(() => {
    gsap.timeline()
      .fromTo(logoRef.current,
        { opacity: 0, y: 40, filter: "blur(12px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power3.out" }
      )
      .to(logoRef.current, { duration: 0.6 })
      .to(logoRef.current, { opacity: 0, y: -24, duration: 0.4, ease: "power2.in" })
      .to(introRef.current, { opacity: 0, duration: 0.3 }, "-=0.2")
      .add(() => {
        setIntroVisible(false);
        gsap.fromTo(siteRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: "power2.out" }
        );
      });
  }, []);

  /* ── 스크롤 reveal (단순 fade+translate, pin 없음) ── */
  useEffect(() => {
    if (introVisible) return;
    const ctx = gsap.context(() => {

      /* 히어로 */
      gsap.fromTo(".hero-line",
        { y: 60, opacity: 0, filter: "blur(14px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.0, stagger: 0.14, ease: "power3.out", delay: 0.1 }
      );
      gsap.fromTo(".hero-sub",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.55 }
      );
      gsap.fromTo(".hero-ctas",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.8 }
      );

      /* 모든 .reveal 요소 */
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 28, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.75, ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 86%", once: true } }
        );
      });

      /* 서비스 카드 */
      gsap.fromTo(".svc-card",
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: ".services-grid", start: "top 80%", once: true } }
      );

      /* 강점 카드 */
      gsap.fromTo(".str-card",
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.55, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: ".strengths-row", start: "top 80%", once: true } }
      );

      /* 프로세스 */
      gsap.fromTo(".proc-step",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: ".process-row", start: "top 80%", once: true } }
      );
    });
    return () => ctx.revert();
  }, [introVisible]);

  return (
    <>
      {/* ── 인트로 오버레이 ── */}
      {introVisible && (
        <div ref={introRef} style={{
          position: "fixed", inset: 0, zIndex: 100, background: "#0A1628",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div ref={logoRef} style={{ opacity: 0, textAlign: "center" }}>
            <p style={{ fontSize: 11, letterSpacing: "0.48em", color: "var(--accent)", fontWeight: 700, marginBottom: 20 }}>
              AUTOMOTIVE TESTING &amp; EVALUATION
            </p>
            <h1 style={{ fontSize: "clamp(40px, 7vw, 90px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1 }}>
              GERMAN<span style={{ color: "var(--accent)" }}>KOREA</span>
            </h1>
            <div style={{ height: 1, background: "linear-gradient(90deg, transparent, var(--accent), transparent)", marginTop: 24, opacity: 0.4 }} />
            <p style={{ marginTop: 14, fontSize: 13, color: "rgba(200,218,240,0.45)", letterSpacing: "0.14em" }}>저먼코리아(주)</p>
          </div>
        </div>
      )}

      <div ref={siteRef} style={{ opacity: 0 }}>
        <Navbar />

        {/* ════════════════════════════════════
            HERO — 풀스크린 영상 배경
        ════════════════════════════════════ */}
        <section style={{
          position: "relative", height: "100dvh",
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          padding: "0 clamp(24px,5vw,96px) 96px",
          background: "#060e1a", overflow: "hidden",
        }}>
          {/* YouTube 배경 영상 */}
          <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
            <iframe
              src={`https://www.youtube.com/embed/${HERO_VIDEO}?autoplay=1&mute=1&loop=1&playlist=${HERO_VIDEO}&controls=0&disablekb=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&start=20`}
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
          {/* 그라디언트 오버레이 */}
          <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to right, rgba(6,14,26,0.90) 0%, rgba(6,14,26,0.55) 55%, rgba(6,14,26,0.18) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to top, #060e1a 0%, transparent 50%)" }} />

          {/* 텍스트 */}
          <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", width: "100%" }}>
            <p className="hero-line" style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 28, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ display: "inline-block", width: 28, height: 1, background: "var(--accent)" }} />
              자동차 시험에 대한 최상의 솔루션을 제공합니다
            </p>
            <div className="hero-line-wrap">
              <h2 className="hero-line" style={{ fontSize: "clamp(44px, 7.5vw, 108px)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-0.04em", color: "#fff" }}>
                자동차의 시험,
              </h2>
            </div>
            <div className="hero-line-wrap">
              <h2 className="hero-line" style={{ fontSize: "clamp(44px, 7.5vw, 108px)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-0.04em", marginBottom: 40 }}>
                <span style={{ color: "var(--accent)" }}>평가는&nbsp;</span>
                <span style={{ color: "#fff" }}>저먼코리아.</span>
              </h2>
            </div>
            <p className="hero-sub" style={{ fontSize: 18, color: "rgba(210,228,248,0.75)", lineHeight: 1.9, maxWidth: 480, marginBottom: 52, opacity: 0 }}>
              국내·해외 실차시험 · FCA/ADAS 기술시험<br />기술교육 · 자기인증 — 5개 분야 원스톱 파트너
            </p>
            <div className="hero-ctas" style={{ display: "flex", gap: 14, flexWrap: "wrap", opacity: 0 }}>
              <a href="#contact" className="gk-cta-btn">시험 의뢰하기</a>
              <a href="#services" className="gk-ghost-btn">사업분야 보기 ↓</a>
            </div>
          </div>

          {/* 스크롤 인디케이터 */}
          <div style={{ position: "absolute", bottom: 36, right: 48, zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 9, letterSpacing: "0.22em", color: "rgba(255,255,255,0.28)", fontWeight: 700, writingMode: "vertical-rl" }}>SCROLL</span>
            <div style={{ width: 1, height: 52, background: "linear-gradient(to bottom, var(--accent), transparent)", opacity: 0.5 }} />
          </div>
        </section>

        {/* ── 마퀴 ── */}
        <div style={{ overflow: "hidden", background: "#F3F7FC", borderTop: "1px solid rgba(10,22,40,0.07)", borderBottom: "1px solid rgba(10,22,40,0.07)", padding: "13px 0" }}>
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} style={{
                padding: item === "·" ? "0 14px" : "0 26px",
                fontSize: 10, fontWeight: item === "·" ? 400 : 700, letterSpacing: "0.22em",
                color: item === "·" ? "rgba(204,0,34,0.45)" : "rgba(10,22,40,0.36)",
                whiteSpace: "nowrap",
              }}>{item}</span>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════
            사업분야 — 5개 서비스 카드
        ════════════════════════════════════ */}
        <section id="services" style={{ padding: "120px clamp(24px,5vw,96px)", background: "#FFFFFF" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 18 }}>SERVICES</p>
            <h2 className="reveal" style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#0A1628", marginBottom: 72, lineHeight: 1.15 }}>
              5개 분야 원스톱<br />자동차 시험 서비스
            </h2>

            <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, background: "rgba(10,22,40,0.07)" }}>
              {SERVICES.map((svc, i) => (
                <div key={svc.num} className="svc-card" style={{
                  background: i % 2 === 0 ? "#FFFFFF" : "#F8FAFD",
                  padding: "48px 40px",
                  position: "relative",
                  transition: "box-shadow 0.25s",
                  cursor: "default",
                }}
                  onMouseOver={(e) => { e.currentTarget.style.boxShadow = "0 4px 32px rgba(0,45,114,0.08)"; e.currentTarget.style.zIndex = "1"; }}
                  onMouseOut={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.zIndex = "0"; }}
                >
                  <p style={{ fontSize: 11, color: "var(--accent)", fontWeight: 700, letterSpacing: "0.28em", marginBottom: 20 }}>{svc.num}</p>
                  <h3 style={{ fontSize: "clamp(18px, 1.8vw, 22px)", fontWeight: 800, color: "#0A1628", marginBottom: 10, lineHeight: 1.3 }}>{svc.ko}</h3>
                  <p style={{ fontSize: 12, color: "#7090b0", letterSpacing: "0.06em", marginBottom: 20 }}>{svc.en}</p>
                  <div style={{ width: 32, height: 2, background: "var(--accent)", marginBottom: 22, opacity: 0.7 }} />
                  <p style={{ fontSize: 14, color: "#3d5570", lineHeight: 1.85, marginBottom: 28 }}>{svc.desc}</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {svc.items.map((item) => (
                      <li key={item} style={{ fontSize: 13, color: "#7090b0", display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--accent)", flexShrink: 0, opacity: 0.6 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {/* 5번째 카드 후 빈 셀 채우기 */}
              <div style={{ background: "#0A1628", padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
                <p style={{ fontSize: 14, color: "rgba(200,218,240,0.55)", lineHeight: 1.9, marginBottom: 32 }}>
                  현재 및 미래 자동차의<br />중심, 저먼코리아
                </p>
                <a href="#contact" style={{
                  fontSize: 13, fontWeight: 700, color: "#fff",
                  background: "var(--accent)", padding: "14px 28px",
                  letterSpacing: "0.06em",
                  transition: "opacity 0.2s",
                }}
                  onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
                  onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                >
                  문의하기 →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            회사소개 (ABOUT)
        ════════════════════════════════════ */}
        <section id="about" style={{ padding: "120px clamp(24px,5vw,96px)", background: "#F3F7FC" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 88, alignItems: "center" }}>
            <div>
              <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 18 }}>WHO WE ARE</p>
              <h2 className="reveal" style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#0A1628", lineHeight: 1.15, marginBottom: 32 }}>
                독일 기술 기준으로<br />한국 자동차를 검증합니다
              </h2>
              <p className="reveal" style={{ fontSize: 17, color: "#3d5570", lineHeight: 2.0, marginBottom: 20 }}>
                저먼코리아(주)는 독일의 자동차 시험·평가 기준과 노하우를 바탕으로
                국내외 자동차 제조사 및 부품사에 전문 시험 서비스를 제공합니다.
              </p>
              <p className="reveal" style={{ fontSize: 17, color: "#3d5570", lineHeight: 2.0 }}>
                FCA·ADAS·자율주행 등 첨단 안전기술 시험부터 해외 극한환경 시험 대행,
                자기인증까지 — 자동차 시험의 전 영역을 한 팀에서 책임집니다.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "rgba(10,22,40,0.08)" }}>
              {[
                { val: "5개 분야", sub: "핵심 사업영역" },
                { val: "031-366-8808", sub: "대표 전화" },
                { val: "경기도 화성시", sub: "국내 시험 거점" },
                { val: "독일·유럽·중국", sub: "해외 파트너 거점" },
              ].map((item) => (
                <div key={item.val} className="reveal" style={{ background: "#F3F7FC", padding: "36px 28px" }}>
                  <p style={{ fontSize: "clamp(14px, 1.4vw, 17px)", fontWeight: 800, color: "#0A1628", marginBottom: 8 }}>{item.val}</p>
                  <p style={{ fontSize: 11, color: "#7090b0", letterSpacing: "0.08em" }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            영상 섹션 — 혹한지·혹서지 시험
            단순 풀블리드, 트릭 없음
        ════════════════════════════════════ */}
        <section style={{
          position: "relative", width: "100%", height: "72vh", minHeight: 400,
          background: "#030609", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <iframe
              src={`https://www.youtube.com/embed/${MID_VIDEO}?autoplay=1&mute=1&loop=1&playlist=${MID_VIDEO}&controls=0&disablekb=1&modestbranding=1&playsinline=1&rel=0&showinfo=0`}
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
          <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to right, rgba(6,14,26,0.82) 0%, rgba(6,14,26,0.38) 60%, rgba(6,14,26,0.10) 100%)" }} />
          <div className="reveal" style={{
            position: "absolute", inset: 0, zIndex: 2,
            display: "flex", alignItems: "center",
            padding: "0 clamp(24px,5vw,96px)",
          }}>
            <div>
              <p style={{ fontSize: 11, color: "var(--accent)", fontWeight: 700, letterSpacing: "0.38em", marginBottom: 20 }}>
                해외 실차시험
              </p>
              <h3 style={{ fontSize: "clamp(28px, 4.5vw, 62px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 16 }}>
                혹한지 · 혹서지<br />극한 환경 시험
              </h3>
              <p style={{ fontSize: 15, color: "rgba(200,220,240,0.55)" }}>
                스웨덴 아르예플로그 · 중국 연태 현지 시험장 직접 대행
              </p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            WHY GERMAN KOREA — 강점
        ════════════════════════════════════ */}
        <section style={{ padding: "120px clamp(24px,5vw,96px)", background: "#FFFFFF" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 18 }}>WHY GERMAN KOREA</p>
            <h2 className="reveal" style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#0A1628", marginBottom: 64, lineHeight: 1.15 }}>
              한 곳에서 끝나는<br />자동차 시험 파트너
            </h2>
            <div className="strengths-row" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, background: "rgba(10,22,40,0.07)" }}>
              {STRENGTHS.map((s, i) => (
                <div key={s.n} className="str-card" style={{
                  padding: "52px 44px",
                  background: i === 2 ? "#0A1628" : (i === 1 ? "#EBF0F8" : "#FFFFFF"),
                  position: "relative", overflow: "hidden",
                }}>
                  <span style={{
                    position: "absolute", bottom: -8, right: 12,
                    fontSize: 110, fontWeight: 900, lineHeight: 1,
                    color: i === 2 ? "rgba(255,255,255,0.04)" : "rgba(0,45,114,0.04)",
                    letterSpacing: "-0.06em", userSelect: "none", pointerEvents: "none",
                  }}>{s.n}</span>
                  <p style={{ fontSize: 11, color: "var(--accent)", fontWeight: 700, letterSpacing: "0.28em", marginBottom: 20 }}>{s.n}</p>
                  <div style={{ width: 28, height: 2, background: "var(--accent)", marginBottom: 22, opacity: 0.7 }} />
                  <h3 style={{ fontSize: "clamp(17px, 1.8vw, 21px)", fontWeight: 800, color: i === 2 ? "#fff" : "#0A1628", lineHeight: 1.3, marginBottom: 18 }}>{s.title}</h3>
                  <p style={{ fontSize: 15, color: i === 2 ? "rgba(200,218,240,0.7)" : "#3d5570", lineHeight: 1.9 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            시험 프로세스
        ════════════════════════════════════ */}
        <section id="process" style={{ padding: "120px clamp(24px,5vw,96px)", background: "#F3F7FC" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 18 }}>PROCESS</p>
            <h2 className="reveal" style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#0A1628", marginBottom: 72, lineHeight: 1.15 }}>
              의뢰부터 보고까지<br />4단계 프로세스
            </h2>
            <div className="process-row" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, position: "relative" }}>
              <div style={{
                position: "absolute", top: 35, left: "12.5%", right: "12.5%",
                height: 1, background: "linear-gradient(90deg, transparent, rgba(204,0,34,0.25) 25%, rgba(204,0,34,0.25) 75%, transparent)",
                pointerEvents: "none",
              }} />
              {PROCESS.map((p, i) => (
                <div key={p.step} className="proc-step" style={{
                  padding: "0 32px 48px",
                  borderRight: i < 3 ? "1px solid rgba(10,22,40,0.08)" : "none",
                  position: "relative",
                }}>
                  <div style={{
                    width: 70, height: 70, borderRadius: "50%",
                    border: "1px solid rgba(204,0,34,0.28)",
                    background: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 32,
                  }}>
                    <span style={{ fontSize: 12, fontWeight: 800, color: "var(--accent)", letterSpacing: "0.08em" }}>{p.step}</span>
                  </div>
                  <h4 style={{ fontSize: 19, fontWeight: 800, marginBottom: 12, color: "#0A1628" }}>{p.title}</h4>
                  <p style={{ fontSize: 14, color: "#3d5570", lineHeight: 1.85 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════
            CONTACT CTA
        ════════════════════════════════════ */}
        <section id="contact" style={{ padding: "148px clamp(24px,5vw,96px)", background: "#0A1628", position: "relative", overflow: "hidden" }}>
          <div className="gk-grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.55 }} />
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "70vw", height: "70vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(204,0,34,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative" }}>
            <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 24 }}>CONTACT</p>
            <h2 className="reveal" style={{ fontSize: "clamp(32px, 5vw, 68px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.1, marginBottom: 28 }}>
              시험 의뢰 및<br />문의는 여기로
            </h2>
            <p className="reveal" style={{ fontSize: 16, color: "rgba(200,218,240,0.6)", marginBottom: 10, lineHeight: 1.9 }}>
              경기도 화성시 남양읍 화성로 1444-12
            </p>
            <p className="reveal" style={{ fontSize: 14, color: "rgba(200,218,240,0.38)", marginBottom: 8 }}>
              Tel. 031-366-8808 &nbsp;|&nbsp; Fax. 031-366-8809
            </p>
            <p className="reveal" style={{ fontSize: 14, color: "rgba(200,218,240,0.38)", marginBottom: 56 }}>
              info@germankorea.com
            </p>
            <div className="reveal" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:031-366-8808" className="gk-cta-btn">031-366-8808 전화하기</a>
              <a href="mailto:info@germankorea.com" className="gk-ghost-btn">이메일 문의</a>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>

      <style>{`
        .gk-cta-btn {
          display: inline-block;
          padding: 16px 44px; background: var(--accent); color: #fff;
          font-size: 14px; font-weight: 800; letter-spacing: 0.07em;
          box-shadow: 0 4px 20px rgba(204,0,34,0.20);
          transition: transform 0.22s cubic-bezier(0.16,1,0.3,1), box-shadow 0.22s;
        }
        .gk-cta-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 32px rgba(204,0,34,0.30); }
        .gk-cta-btn:active { transform: scale(0.97); }

        .gk-ghost-btn {
          display: inline-block;
          padding: 16px 44px; border: 1px solid rgba(255,255,255,0.2); color: rgba(255,255,255,0.65);
          font-size: 14px; font-weight: 600; letter-spacing: 0.07em;
          transition: all 0.22s cubic-bezier(0.16,1,0.3,1);
        }
        .gk-ghost-btn:hover { border-color: rgba(255,255,255,0.4); color: #fff; transform: translateY(-1px); }
        .gk-ghost-btn:active { transform: scale(0.97); }

        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
          section[id="about"] > div { grid-template-columns: 1fr !important; gap: 56px !important; }
          .strengths-row { grid-template-columns: 1fr !important; }
          .process-row { grid-template-columns: repeat(2, 1fr) !important; }
          .proc-step { border-right: none !important; padding: 0 24px 40px !important; }
          .proc-step:nth-child(odd) { border-right: 1px solid rgba(10,22,40,0.08) !important; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .hero-ctas { flex-direction: column !important; }
          .hero-ctas a { text-align: center !important; }
          .process-row { grid-template-columns: 1fr !important; }
          .proc-step { border-right: none !important; border-bottom: 1px solid rgba(10,22,40,0.08) !important; padding: 0 0 36px !important; }
        }
      `}</style>
    </>
  );
}
