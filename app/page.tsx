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
    desc: "국내 법규 및 고객 요구사항에 따른 실차 종합 성능 시험. NVH·내구성·주행성능·안전기능·연비 측정 등 전 항목 평가 서비스.",
  },
  {
    num: "02",
    ko: "해외 실차시험",
    en: "Overseas Vehicle Testing",
    desc: "유럽·독일·북미 현지 시험장을 활용한 해외 실차시험 대행. ADAC·TÜV 등 글로벌 파트너십 기반 현지 인증 지원.",
  },
  {
    num: "03",
    ko: "기술시험",
    en: "Technical Testing",
    desc: "FCA(전방추돌경고·자동비상제동), ADAS 센서 퓨전, 자율주행 기술 시험·평가. Euro NCAP·C-NCAP 대응 첨단 안전기능 검증.",
  },
  {
    num: "04",
    ko: "기술교육",
    en: "Technical Training",
    desc: "자동차 시험·평가 전문 교육 프로그램. 국내외 자동차 법규·시험 방법론 및 FCA·ADAS·자율주행 기술 실무 교육.",
  },
  {
    num: "05",
    ko: "자기인증",
    en: "Self-Certification",
    desc: "국토교통부 자동차 자기인증 전 과정 지원. 형식승인·안전기준 적합성 검증, 인증 절차 컨설팅 및 서류 대응.",
  },
];

const PROCESS = [
  { step: "01", title: "요건 분석", desc: "법규·고객 요구사항 분석, 시험 항목 및 범위 정의" },
  { step: "02", title: "시험 계획", desc: "시험 방법·일정·장소·비용 수립 및 사전 협의" },
  { step: "03", title: "실차 시험", desc: "현장 시험 수행, 정밀 데이터 계측·기록" },
  { step: "04", title: "결과 보고", desc: "분석 리포트, 인증 대응 권고안 및 후속 지원" },
];

const STRENGTHS = [
  {
    n: "01",
    title: "독일 기반 네트워크",
    desc: "독일 현지 시험기관 및 글로벌 자동차 메이커와의 직접 협력 네트워크. 유럽 시험 기준을 가장 빠르게 국내에 도입합니다.",
  },
  {
    n: "02",
    title: "FCA · ADAS 전문성",
    desc: "전방추돌경고·자동비상제동·차선유지 등 첨단 안전기능 시험에 특화. Euro NCAP 기준 적용 가능한 국내 몇 안 되는 전문 기관.",
  },
  {
    n: "03",
    title: "원스톱 인증 지원",
    desc: "시험 계획부터 실차 평가, 자기인증 서류 작성·제출까지 전 과정 대행. 불필요한 외주 없이 한 팀이 책임집니다.",
  },
];

export default function Home() {
  const introRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const siteRef = useRef<HTMLDivElement>(null);
  const [introVisible, setIntroVisible] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(logoRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .to(logoRef.current, { duration: 0.9 })
    .to(logoRef.current, { opacity: 0, y: -40, duration: 0.6, ease: "power2.in" })
    .to(introRef.current, { opacity: 0, duration: 0.4, ease: "power2.in" }, "-=0.3")
    .add(() => {
      setIntroVisible(false);
      gsap.fromTo(siteRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.out" }
      );
    });
  }, []);

  useEffect(() => {
    if (introVisible) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-line", { y: 80, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.13, ease: "power3.out", delay: 0.1,
      });
      gsap.fromTo(".hero-sub", { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.6,
      });
      gsap.fromTo(".hero-buttons", { opacity: 0, y: 16 }, {
        opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.85,
      });
      gsap.fromTo(".reveal", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power2.out",
        scrollTrigger: { trigger: ".reveal", start: "top 80%", once: true },
      });
      gsap.fromTo(".service-item", { opacity: 0, y: 24 }, {
        opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: ".services-grid", start: "top 75%", once: true },
      });
      gsap.fromTo(".strength-card", { opacity: 0, y: 28 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out",
        scrollTrigger: { trigger: ".strengths-grid", start: "top 75%", once: true },
      });
      gsap.fromTo(".proc-step", { opacity: 0, x: -24 }, {
        opacity: 1, x: 0, duration: 0.6, stagger: 0.15, ease: "power2.out",
        scrollTrigger: { trigger: ".process-grid", start: "top 75%", once: true },
      });
    });
    return () => ctx.revert();
  }, [introVisible]);

  return (
    <>
      {introVisible && (
        <div ref={introRef} style={{
          position: "fixed", inset: 0, zIndex: 100,
          background: "#08121E",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div ref={logoRef} style={{ opacity: 0, textAlign: "center" }}>
            <p style={{ fontSize: 11, letterSpacing: "0.4em", color: "var(--accent)", fontWeight: 600, marginBottom: 16 }}>
              AUTOMOTIVE TESTING &amp; EVALUATION
            </p>
            <h1 style={{ fontSize: "clamp(40px, 7vw, 88px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1 }}>
              GERMAN<span style={{ color: "var(--accent)" }}>KOREA</span>
            </h1>
            <p style={{ marginTop: 14, fontSize: 13, color: "var(--text-muted)", letterSpacing: "0.12em" }}>
              저먼코리아(주)
            </p>
          </div>
        </div>
      )}

      <div ref={siteRef} style={{ opacity: 0 }}>

        <Navbar />

        {/* HERO */}
        <section className="hero-section" style={{
          minHeight: "100vh",
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "64px 80px 80px",
          position: "relative", overflow: "hidden",
        }}>
          {/* 배경 — 기술 그리드 */}
          <div className="gk-grid-bg" style={{
            position: "absolute", inset: 0, zIndex: 0,
          }} />
          {/* 대각선 액센트 라인 */}
          <div style={{
            position: "absolute", inset: 0, zIndex: 0,
            background: "radial-gradient(ellipse 80% 60% at 65% 50%, rgba(8,18,30,0) 0%, #08121E 70%)",
          }} />
          {/* 좌측 빛 */}
          <div style={{
            position: "absolute", top: "10%", left: "-10%",
            width: "60vw", height: "80vh",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(204,0,34,0.07) 0%, transparent 65%)",
            pointerEvents: "none", zIndex: 0,
          }} />
          {/* 우측 장식 — 타이어 링 */}
          <div style={{
            position: "absolute", right: "6%", top: "50%",
            transform: "translateY(-50%)",
            width: 340, height: 340,
            borderRadius: "50%",
            border: "1px solid rgba(204,0,34,0.12)",
            boxShadow: "0 0 0 40px rgba(204,0,34,0.04), 0 0 0 80px rgba(204,0,34,0.02)",
            zIndex: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{ width: 220, height: 220, borderRadius: "50%", border: "1px solid rgba(204,0,34,0.08)" }}>
              <div style={{ width: "100%", height: "100%", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 100, height: 100, borderRadius: "50%", border: "1px solid rgba(204,0,34,0.06)" }} />
              </div>
            </div>
          </div>

          <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>
            <div style={{ marginBottom: 24 }}>
              <p className="hero-line" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.35em", color: "var(--accent)" }}>
                GERMAN KOREA — 저먼코리아(주)
              </p>
            </div>
            <div style={{ marginBottom: 36 }}>
              <div className="hero-line-wrap">
                <h2 className="hero-line" style={{ fontSize: "clamp(38px, 7vw, 92px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#fff" }}>
                  자동차 성능 시험,
                </h2>
              </div>
              <div className="hero-line-wrap">
                <h2 className="hero-line" style={{ fontSize: "clamp(38px, 7vw, 92px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#fff" }}>
                  <span className="gk-gradient-text">독일 기준</span>으로.
                </h2>
              </div>
            </div>
            <p className="hero-sub" style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.9, maxWidth: 500, marginBottom: 48, opacity: 0 }}>
              국내·해외 실차시험부터 FCA·ADAS 기술시험,<br />
              자기인증까지 — 자동차 평가 전 영역을 다룹니다.
            </p>
            <div className="hero-buttons" style={{ display: "flex", gap: 16, flexWrap: "wrap", opacity: 0 }}>
              <a href="#contact" style={{
                padding: "16px 40px", background: "var(--accent)", color: "#fff",
                fontSize: 13, fontWeight: 800, letterSpacing: "0.06em",
                transition: "opacity 0.2s",
              }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
              >시험 문의</a>
              <a href="#services" style={{
                padding: "16px 40px", border: "1px solid var(--border)", color: "var(--text-muted)",
                fontSize: 13, fontWeight: 600, letterSpacing: "0.06em",
                transition: "all 0.2s",
              }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#fff"; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
              >사업분야 보기</a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
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
                {/* 데이터 패널 */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--border)" }}>
                  {[
                    { label: "경기도 화성시", sub: "시험 거점" },
                    { label: "031-366-8808", sub: "대표 전화" },
                    { label: "5개 분야", sub: "핵심 사업영역" },
                    { label: "독일·유럽 네트워크", sub: "해외 파트너십" },
                  ].map((item) => (
                    <div key={item.label} className="reveal" style={{
                      background: "var(--bg-3)", padding: "32px 28px",
                    }}>
                      <p style={{ fontSize: "clamp(14px, 1.5vw, 18px)", fontWeight: 800, color: "#fff", marginBottom: 6 }}>{item.label}</p>
                      <p style={{ fontSize: 11, color: "var(--text-dim)", letterSpacing: "0.06em" }}>{item.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STRENGTHS */}
        <section style={{ padding: "120px 80px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.35em", color: "var(--accent)", marginBottom: 20 }}>WHY GERMAN KOREA</p>
            <h3 className="reveal" style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 72, maxWidth: 600 }}>
              한 곳에서 끝나는<br />자동차 시험 파트너
            </h3>
            <div className="strengths-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {STRENGTHS.map((item) => (
                <div key={item.n} className="strength-card" style={{
                  position: "relative", overflow: "hidden",
                  padding: "52px 40px",
                  background: "rgba(13,27,42,0.55)",
                  border: "1px solid rgba(204,0,34,0.1)",
                  transition: "transform 0.35s, box-shadow 0.35s, border-color 0.35s, background 0.35s",
                  backdropFilter: "blur(16px)",
                }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = "0 24px 60px rgba(204,0,34,0.08), 0 0 0 1px rgba(204,0,34,0.2)";
                    e.currentTarget.style.borderColor = "rgba(204,0,34,0.25)";
                    e.currentTarget.style.background = "rgba(13,27,42,0.8)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "";
                    e.currentTarget.style.boxShadow = "";
                    e.currentTarget.style.borderColor = "rgba(204,0,34,0.1)";
                    e.currentTarget.style.background = "rgba(13,27,42,0.55)";
                  }}
                >
                  <span style={{
                    position: "absolute", top: -8, right: 20,
                    fontSize: 120, fontWeight: 900, lineHeight: 1,
                    color: "rgba(204,0,34,0.04)", letterSpacing: "-0.05em",
                    userSelect: "none", pointerEvents: "none",
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

        {/* SERVICES */}
        <section id="services" style={{ padding: "120px 80px", background: "var(--bg-2)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.35em", color: "var(--accent)", marginBottom: 20 }}>SERVICES</p>
            <h3 className="reveal" style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 64 }}>
              5개 핵심 사업분야
            </h3>
            <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--border)" }}>
              {SERVICES.map((svc, i) => (
                <div key={svc.num} className="service-item" style={{
                  background: "var(--bg-3)", padding: "48px 40px",
                  transition: "background 0.2s, box-shadow 0.2s",
                  gridColumn: i === 4 ? "1 / -1" : "auto",
                }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "#1a2435";
                    e.currentTarget.style.boxShadow = "inset 0 0 0 1px rgba(204,0,34,0.2)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "var(--bg-3)";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 24 }}>
                    <p style={{ fontSize: 11, color: "var(--accent)", fontWeight: 700, letterSpacing: "0.15em" }}>{svc.num}</p>
                    <p style={{ fontSize: 10, color: "var(--text-dim)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 2 }}>{svc.en}</p>
                  </div>
                  <h4 style={{ fontSize: 24, fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}>{svc.ko}</h4>
                  <div style={{ width: 28, height: 2, background: "linear-gradient(90deg, var(--accent), transparent)", marginBottom: 20 }} />
                  <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.85, maxWidth: i === 4 ? 640 : "none" }}>{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
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
                height: 1,
                background: "linear-gradient(90deg, transparent, rgba(204,0,34,0.4) 20%, rgba(204,0,34,0.4) 80%, transparent)",
                pointerEvents: "none", zIndex: 0,
              }} />
              {PROCESS.map((p, i) => (
                <div key={p.step} className="proc-step" style={{
                  padding: "0 32px 48px",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  position: "relative", zIndex: 1,
                }}>
                  <div style={{
                    width: 72, height: 72,
                    borderRadius: "50%",
                    border: "1px solid rgba(204,0,34,0.35)",
                    background: "rgba(204,0,34,0.06)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 32,
                    backdropFilter: "blur(8px)",
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

        {/* CONTACT CTA */}
        <section id="contact" style={{ padding: "160px 80px", textAlign: "center" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.35em", color: "var(--accent)", marginBottom: 24 }}>CONTACT</p>
            <h3 className="reveal" style={{ fontSize: "clamp(32px, 5vw, 68px)", fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 24 }}>
              시험 의뢰 및<br />문의는 여기로
            </h3>
            <p className="reveal" style={{ fontSize: 16, color: "var(--text-muted)", marginBottom: 12, lineHeight: 1.8 }}>
              경기도 화성시 남양읍 화성로 1444-12
            </p>
            <p className="reveal" style={{ fontSize: 14, color: "var(--text-dim)", marginBottom: 48 }}>
              영업일 기준 24시간 내 답변 드립니다.
            </p>
            <div className="reveal cta-buttons" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:031-366-8808" style={{
                padding: "18px 48px", background: "var(--accent)", color: "#fff",
                fontSize: 14, fontWeight: 800, letterSpacing: "0.06em",
                transition: "opacity 0.2s",
                animation: "gk-glow 2.5s ease-in-out infinite",
              }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
              >031-366-8808 전화하기</a>
              <a href="mailto:contact@germankorea.co.kr" style={{
                padding: "18px 48px", border: "1px solid var(--border)", color: "var(--text-muted)",
                fontSize: 14, fontWeight: 600, letterSpacing: "0.06em",
                transition: "all 0.2s",
              }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#fff"; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
              >이메일 문의</a>
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
          background: linear-gradient(90deg, #CC0022 0%, #ff4455 40%, #CC0022 80%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gk-gradient-shift 5s linear infinite;
        }

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

          #services { padding: 64px 20px !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .service-item { padding: 36px 24px !important; grid-column: auto !important; }

          #process { padding: 64px 20px !important; }
          .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .proc-step { border-right: none !important; padding: 32px 16px !important; }
          .proc-step:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.05) !important; }
          .process-grid > div:first-child { display: none !important; }

          #contact { padding: 80px 20px !important; }
          .cta-buttons { flex-direction: column !important; align-items: stretch !important; }
          .cta-buttons a { text-align: center !important; padding: 18px 24px !important; }
        }
      `}</style>
    </>
  );
}
