"use client";

import ServicePageLayout from "@/components/ServicePageLayout";

const TABS = [
  { label: "기술시험 개요", href: "/services/technical" },
  { label: "FCA 시험", href: "/services/technical/fca" },
  { label: "실주행 D/B 및 모니터링", href: "/services/technical/monitoring" },
  { label: "System 특성시험", href: "/services/technical/system" },
  { label: "상품성평가", href: "/services/technical/evaluation" },
  { label: "군집주행", href: "/services/technical/platooning" },
];

export default function TechnicalServicePage() {
  return (
    <ServicePageLayout
      heroTitle="기술시험"
      heroTitleAccent="Technical Testing"
      heroSub="신기술(FCA·ADAS·자율주행) 시험, 실주행 데이터 취득 및 모니터링, 차량 상품성 평가 등 첨단 기술시험 서비스를 제공합니다."
      heroTag="기술시험"
      videoId="xUtQ8hKQeFo"
      tabs={TABS}
      activeTab="/services/technical"
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px clamp(24px,5vw,96px)" }}>

        {/* 개요 */}
        <div style={{ marginBottom: 80 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 16 }}>OVERVIEW</p>
          <h2 style={{ fontSize: "clamp(24px,3vw,40px)", fontWeight: 900, color: "#0A1628", letterSpacing: "-0.03em", marginBottom: 24, lineHeight: 1.2 }}>
            미래 자동차 기술을 위한<br />전문 기술시험 서비스
          </h2>
          <p style={{ fontSize: 17, color: "#3d5570", lineHeight: 2.0, maxWidth: 700 }}>
            저먼코리아(주)는 FCA(Forward Collision Avoidance), ADAS(첨단운전자지원시스템),
            자율주행 기술 등 미래 자동차의 핵심 기술에 대한 전문 시험 서비스를 제공합니다.
            실주행 환경에서의 데이터 취득부터 상품성 평가까지 종합적인 기술시험을 지원합니다.
          </p>
        </div>

        {/* 기술 키워드 */}
        <div style={{ background: "#0A1628", padding: "52px 48px", marginBottom: 80 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 24 }}>KEY TECHNOLOGIES</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {["FCA (Forward Collision Avoidance)", "AEB (Autonomous Emergency Braking)", "ADAS", "자율주행", "군집주행", "실주행 D/B", "상품성 평가", "System 특성시험", "Lane Keeping Assist", "Adaptive Cruise Control"].map((tag) => (
              <span key={tag} style={{
                padding: "9px 20px",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(200,218,240,0.75)",
                fontSize: 13, fontWeight: 600,
                letterSpacing: "0.03em",
                borderRadius: 100,
              }}>{tag}</span>
            ))}
          </div>
        </div>

        {/* 시험 항목 */}
        <div style={{ marginBottom: 80 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 16 }}>SERVICES</p>
          <h3 style={{ fontSize: "clamp(20px,2.5vw,32px)", fontWeight: 900, color: "#0A1628", marginBottom: 48, letterSpacing: "-0.02em" }}>
            기술시험 항목
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 2 }}>
            {[
              {
                num: "01",
                title: "FCA 시험",
                desc: "전방충돌방지보조(FCA) 시스템의 성능을 검증합니다. 국내외 법규 요건에 따른 AEB(자동긴급제동) 성능 평가 및 ADAS 시스템의 인식·판단·제어 성능을 종합적으로 시험합니다.",
              },
              {
                num: "02",
                title: "실주행 D/B 및 Monitoring",
                desc: "실제 도로에서의 주행 데이터를 체계적으로 수집·분석합니다. GPS, 가속도, 조향각, CAN 데이터 등 다채널 계측을 통해 차량 거동 특성 데이터베이스를 구축합니다.",
              },
              {
                num: "03",
                title: "System 특성시험",
                desc: "차량의 각종 시스템(현가장치, 제동장치, 조향장치 등)의 특성을 정밀하게 평가합니다. 주관 평가와 계측 평가를 결합하여 시스템 성능의 객관적 데이터를 제공합니다.",
              },
              {
                num: "04",
                title: "상품성평가",
                desc: "차량의 전반적인 상품성(승차감, 핸들링, 소음·진동, 편의성 등)을 전문 평가자가 체계적으로 평가합니다. Rating 방법과 계측 데이터를 융합하여 종합적인 상품성 보고서를 제공합니다.",
              },
              {
                num: "05",
                title: "군집주행",
                desc: "복수의 차량이 대열을 이루어 주행하는 군집주행(Platooning) 기술을 시험합니다. V2V 통신 기반의 차량 간 협조 제어 성능을 실제 도로 환경에서 검증합니다.",
              },
            ].map((item) => (
              <div key={item.num} style={{
                background: "#fff",
                padding: "36px 32px",
                borderBottom: "1px solid rgba(10,22,40,0.06)",
                borderRight: "1px solid rgba(10,22,40,0.06)",
              }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.16em", marginBottom: 12 }}>{item.num}</p>
                <h4 style={{ fontSize: 18, fontWeight: 800, color: "#0A1628", marginBottom: 14, letterSpacing: "-0.01em" }}>{item.title}</h4>
                <p style={{ fontSize: 14, color: "#3d5570", lineHeight: 1.9 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 문의 CTA */}
        <div style={{
          background: "#0A1628",
          padding: "52px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 28,
        }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 10 }}>CONTACT US</p>
            <h3 style={{ fontSize: "clamp(20px,2.5vw,30px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>
              기술시험 의뢰 및 견적 문의
            </h3>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="tel:031-366-8808" style={{
              padding: "14px 32px", background: "var(--accent)", color: "#fff",
              fontSize: 14, fontWeight: 800, letterSpacing: "0.06em",
            }}>031-366-8808</a>
            <a href="mailto:contact@germankorea.co.kr" style={{
              padding: "14px 32px", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)",
              fontSize: 14, fontWeight: 600, letterSpacing: "0.06em",
            }}>이메일 문의</a>
          </div>
        </div>

      </div>
    </ServicePageLayout>
  );
}
