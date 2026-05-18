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
    desc: "개발차량 또는 품질확인 차량 내구신뢰성 시험 / 각종 시스템 시험 / 친환경자동차 시험 등의 실차시험 제공",
    items: ["필드 내구시험", "필드 모니터링", "PEMS 시험", "친환경자동차시험", "제동시험", "조향시험", "연비성능시험"],
    video: "zRWq7hstgL4",
    side: "left",
  },
  {
    num: "02",
    ko: "해외 실차시험",
    en: "Overseas Vehicle Testing",
    desc: "중국 현지 시험인프라를 이용한 혹한지·혹서지·고지시험 / 중국 현지 성능 및 내구시험 등의 실차시험 제공",
    items: ["혹한지시험", "혹서지시험", "고지시험", "성능 및 내구시험 (중국)"],
    video: "fe887fACTL8",
    side: "right",
  },
  {
    num: "03",
    ko: "기술시험",
    en: "Technical Testing",
    desc: "신기술(FCA·ADAS·자율주행) 시험 / 실주행 Data Base 취득 및 모니터링 / 차량 상품성 평가 등 기술시험 제공",
    items: ["FCA시험", "실주행 D/B 및 Monitoring", "System 특성시험", "상품성평가", "군집주행"],
    video: "xUtQ8hKQeFo",
    side: "left",
  },
  {
    num: "04",
    ko: "기술교육",
    en: "Technical Training",
    desc: "전문 강사진을 통한 고객 맞춤형 시험차량 운전 / 상품성 평가방법 / 차량 주행성능 시험법 등의 기술교육 제공",
    items: ["시험차량 운전교육", "상품성 평가방법 교육", "차량 주행성능 시험법 교육"],
    video: "Nkz6P5daADg",
    side: "right",
  },
  {
    num: "05",
    ko: "자기인증",
    en: "Self-Certification",
    desc: "자동차 및 자동차부품 인증 / 자동차 안전시험 / RECALL 대응 등 최적의 인증컨설팅 제공",
    items: ["자동차 및 부품 인증컨설팅", "자동차안전시험", "Recall 대응 컨설팅"],
    video: "8qfjxohxBNs",
    side: "left",
  },
];

const MARQUEE_ITEMS = [
  "국내 실차시험", "·", "해외 실차시험", "·", "FCA · AEB · ADAS", "·",
  "자율주행 검증", "·", "기술교육", "·", "자기인증", "·",
  "혹한지 · 혹서지", "·", "고지시험", "·", "PEMS 시험", "·",
];

const HERO_VIDEO = "1KO2v_hcM9g";

export default function Home() {
  const introRef = useRef<HTMLDivElement>(null);
  const logoRef  = useRef<HTMLDivElement>(null);
  const siteRef  = useRef<HTMLDivElement>(null);
  const [introVisible, setIntroVisible] = useState(true);

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

  useEffect(() => {
    if (introVisible) return;
    const ctx = gsap.context(() => {
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
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 28, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.75, ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 86%", once: true } }
        );
      });
      gsap.utils.toArray<HTMLElement>(".svc-content").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 75%", once: true } }
        );
      });
    });
    return () => ctx.revert();
  }, [introVisible]);

  return (
    <>
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

        {/* ── HERO ── */}
        <section style={{
          position: "relative", height: "100dvh",
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          padding: "0 clamp(24px,5vw,96px) 96px",
          background: "#060e1a", overflow: "hidden",
        }}>
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
          <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to right, rgba(6,14,26,0.92) 0%, rgba(6,14,26,0.55) 55%, rgba(6,14,26,0.18) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(to top, #060e1a 0%, transparent 50%)" }} />

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
              저먼코리아는 실차시험의 경험과 노하우로<br />다양한 해외시험을 수행 및 지원합니다
            </p>
            <div className="hero-ctas" style={{ display: "flex", gap: 14, flexWrap: "wrap", opacity: 0 }}>
              <a href="#contact" className="gk-cta-btn">시험 의뢰하기</a>
              <a href="#services" className="gk-ghost-btn">사업분야 보기 ↓</a>
            </div>
          </div>

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

        {/* ── 사업분야 헤더 ── */}
        <section id="services" style={{ padding: "80px clamp(24px,5vw,96px) 64px", background: "#0A1628" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 16 }}>SERVICES</p>
            <h2 className="reveal" style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.15 }}>
              5개 사업분야
            </h2>
          </div>
        </section>

        {/* ── 서비스 섹션 × 5 ── */}
        {SERVICES.map((svc) => {
          const left = svc.side === "left";
          return (
            <section key={svc.num} style={{ position: "relative", height: "80vh", minHeight: 500, overflow: "hidden" }}>
              {/* 영상 배경 */}
              <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                <iframe
                  src={`https://www.youtube.com/embed/${svc.video}?autoplay=1&mute=1&loop=1&playlist=${svc.video}&controls=0&disablekb=1&modestbranding=1&playsinline=1&rel=0&showinfo=0`}
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
              {/* 그라디언트 */}
              <div style={{
                position: "absolute", inset: 0, zIndex: 1,
                background: left
                  ? "linear-gradient(to right, rgba(6,14,26,0.95) 0%, rgba(6,14,26,0.75) 42%, rgba(6,14,26,0.15) 100%)"
                  : "linear-gradient(to left,  rgba(6,14,26,0.95) 0%, rgba(6,14,26,0.75) 42%, rgba(6,14,26,0.15) 100%)",
              }} />

              {/* 콘텐츠 */}
              <div className="svc-content" style={{
                position: "absolute", inset: 0, zIndex: 2,
                display: "flex", alignItems: "center",
                padding: "0 clamp(24px,5vw,96px)",
                justifyContent: left ? "flex-start" : "flex-end",
              }}>
                <div style={{ maxWidth: 540 }}>
                  <p style={{ fontSize: 11, color: "var(--accent)", fontWeight: 700, letterSpacing: "0.38em", marginBottom: 14 }}>
                    {svc.num} &nbsp;—&nbsp; {svc.en}
                  </p>
                  <h3 style={{ fontSize: "clamp(28px,4vw,54px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.08, marginBottom: 16 }}>
                    {svc.ko}
                  </h3>
                  <div style={{ width: 36, height: 2, background: "var(--accent)", marginBottom: 22, opacity: 0.85 }} />
                  <p style={{ fontSize: 15, color: "rgba(200,220,240,0.62)", lineHeight: 1.9, marginBottom: 28 }}>
                    {svc.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {svc.items.map((item) => (
                      <span key={item} style={{
                        fontSize: 12, fontWeight: 600,
                        padding: "7px 16px",
                        border: "1px solid rgba(255,255,255,0.18)",
                        color: "rgba(210,228,248,0.80)",
                        borderRadius: 100,
                        letterSpacing: "0.04em",
                        backdropFilter: "blur(4px)",
                      }}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 배경 번호 워터마크 */}
              <div style={{
                position: "absolute",
                bottom: -16,
                ...(left ? { right: 24 } : { left: 24 }),
                zIndex: 1,
                fontSize: "clamp(100px,16vw,220px)", fontWeight: 900, lineHeight: 1,
                color: "rgba(255,255,255,0.025)",
                letterSpacing: "-0.06em", userSelect: "none", pointerEvents: "none",
              }}>{svc.num}</div>
            </section>
          );
        })}

        {/* ── 회사소개 ── */}
        <section id="about" style={{ padding: "120px clamp(24px,5vw,96px)", background: "#F3F7FC" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 88, alignItems: "center" }}>
            <div>
              <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 18 }}>WHO WE ARE</p>
              <h2 className="reveal" style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#0A1628", lineHeight: 1.15, marginBottom: 32 }}>
                현재 및 미래 자동차의<br />중심, 저먼코리아
              </h2>
              <p className="reveal" style={{ fontSize: 17, color: "#3d5570", lineHeight: 2.0, marginBottom: 20 }}>
                저먼코리아(주)는 자동차 시험·평가 전문기업으로,
                국내외 자동차 제조사 및 부품사에 전문 시험 서비스를 제공합니다.
              </p>
              <p className="reveal" style={{ fontSize: 17, color: "#3d5570", lineHeight: 2.0 }}>
                미래, 환경을 생각하는 저먼코리아는 실차시험의 경험과 노하우로
                다양한 해외시험을 수행 및 지원합니다.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "rgba(10,22,40,0.08)" }}>
              {[
                { val: "5개 분야", sub: "핵심 사업영역" },
                { val: "031-366-8808", sub: "대표 전화" },
                { val: "경기도 화성시", sub: "국내 거점" },
                { val: "중국 현지", sub: "해외 시험 인프라" },
              ].map((item) => (
                <div key={item.val} className="reveal" style={{ background: "#F3F7FC", padding: "36px 28px" }}>
                  <p style={{ fontSize: "clamp(13px,1.4vw,17px)", fontWeight: 800, color: "#0A1628", marginBottom: 8 }}>{item.val}</p>
                  <p style={{ fontSize: 11, color: "#7090b0", letterSpacing: "0.08em" }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 문의 CTA ── */}
        <section id="contact" style={{ padding: "148px clamp(24px,5vw,96px)", background: "#0A1628", position: "relative", overflow: "hidden" }}>
          <div className="gk-grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.55 }} />
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "70vw", height: "70vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(204,0,34,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative" }}>
            <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 24 }}>CONTACT</p>
            <h2 className="reveal" style={{ fontSize: "clamp(32px,5vw,68px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.1, marginBottom: 28 }}>
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
          section[id="about"] > div { grid-template-columns: 1fr !important; gap: 56px !important; }
        }
        @media (max-width: 600px) {
          .hero-ctas { flex-direction: column !important; }
          .hero-ctas a { text-align: center !important; }
          .svc-content > div { max-width: 100% !important; }
        }
      `}</style>
    </>
  );
}
