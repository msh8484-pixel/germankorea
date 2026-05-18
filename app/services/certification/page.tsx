"use client";

import ServicePageLayout from "@/components/ServicePageLayout";

const TABS = [
  { label: "자기인증 개요", href: "/services/certification" },
  { label: "인증 컨설팅", href: "/services/certification/consulting" },
  { label: "자동차안전시험", href: "/services/certification/safety-test" },
  { label: "Recall 대응", href: "/services/certification/recall" },
];

export default function CertificationServicePage() {
  return (
    <ServicePageLayout
      heroTitle="자기인증"
      heroTitleAccent="Self-Certification"
      heroSub="자동차 및 자동차부품 인증컨설팅, 자동차안전시험, Recall 대응 등 최적의 인증 솔루션을 제공합니다."
      heroTag="자기인증"
      videoId="8qfjxohxBNs"
      tabs={TABS}
      activeTab="/services/certification"
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px clamp(24px,5vw,96px)" }}>

        {/* 개요 */}
        <div style={{ marginBottom: 80 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 16 }}>OVERVIEW</p>
          <h2 style={{ fontSize: "clamp(24px,3vw,40px)", fontWeight: 900, color: "#0A1628", letterSpacing: "-0.03em", marginBottom: 24, lineHeight: 1.2 }}>
            신속하고 성공적인<br />국내시장 진출을 지원합니다
          </h2>
          <p style={{ fontSize: 17, color: "#3d5570", lineHeight: 2.0, maxWidth: 700 }}>
            자동차 및 자동차부품 자기인증이 어렵습니까? 저먼코리아(주)와 상의하세요.
            자기인증 초기(제작자등록)부터 단계적인 최적의 컨설팅을 통해
            성공적으로 국내시장에 진출할 수 있도록 지원합니다.
          </p>
        </div>

        {/* Total Service */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2, marginBottom: 80 }}>
          {[
            { title: "제작자등록", desc: "자기인증능력 확인 및 제작자 등록 지원" },
            { title: "시험항목 방법검토", desc: "안전기준별 시험 항목 및 방법 검토" },
            { title: "부품인증 사후관리", desc: "인증 후 지속적인 사후관리 지원" },
            { title: "인증시험 시행방안", desc: "최적의 인증시험 계획 수립 및 시행" },
          ].map((item) => (
            <div key={item.title} style={{ background: "#0A1628", padding: "36px 28px" }}>
              <h4 style={{ fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 12 }}>{item.title}</h4>
              <p style={{ fontSize: 13, color: "rgba(200,218,240,0.6)", lineHeight: 1.8 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 컨설팅 프로세스 */}
        <div style={{ marginBottom: 80 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 16 }}>PROCESS</p>
          <h3 style={{ fontSize: "clamp(20px,2.5vw,32px)", fontWeight: 900, color: "#0A1628", marginBottom: 48, letterSpacing: "-0.02em" }}>
            자기인증 컨설팅 프로세스
          </h3>
          <div style={{ display: "flex", gap: 0, overflowX: "auto" }}>
            {[
              { step: "①", title: "컨설팅 상담 및 계약" },
              { step: "②", title: "제작자등록 준비 및 등록", sub: "자기인증능력 확인" },
              { step: "③", title: "자기인증능력 검증", sub: "시설확인 / 시험항목 도출" },
              { step: "④", title: "안전시험 성적서 확보", sub: "안전시험 시행" },
              { step: "⑤", title: "자기인증 완료", sub: "안전검사 / 자기인증라벨 부착" },
            ].map((item, i) => (
              <div key={item.step} style={{
                flex: "1 0 180px",
                background: i % 2 === 0 ? "#0A1628" : "#112035",
                padding: "36px 24px",
                position: "relative",
              }}>
                <p style={{ fontSize: 28, fontWeight: 900, color: "var(--accent)", marginBottom: 12, opacity: 0.8 }}>{item.step}</p>
                <p style={{ fontSize: 15, fontWeight: 700, color: "#fff", lineHeight: 1.5, marginBottom: item.sub ? 8 : 0 }}>{item.title}</p>
                {item.sub && <p style={{ fontSize: 12, color: "rgba(200,218,240,0.5)", lineHeight: 1.7 }}>{item.sub}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* 자동차안전시험 9개 항목 */}
        <div style={{ marginBottom: 80 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 16 }}>SAFETY TEST</p>
          <h3 style={{ fontSize: "clamp(20px,2.5vw,32px)", fontWeight: 900, color: "#0A1628", marginBottom: 16, letterSpacing: "-0.02em" }}>
            저먼코리아 자체시행 자동차안전시험 항목
          </h3>
          <p style={{ fontSize: 15, color: "#3d5570", marginBottom: 40, lineHeight: 1.9 }}>
            자동차안전시험 9개 항목의 시험시설 및 전문기술인력을 확보하여 직접 시행함으로써
            자기인증 기간 및 비용을 최소화합니다.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 2 }}>
            {[
              { no: "21-1", title: "등화장치 설치기준" },
              { no: "28", title: "승용자동차의 제동능력시험" },
              { no: "29", title: "승합·화물·특수자동차 제동능력시험" },
              { no: "31", title: "ABS설치자동차 제동능력시험" },
              { no: "35", title: "조향성능시험" },
              { no: "36", title: "최고속도제한장치시험" },
              { no: "37", title: "속도계시험" },
              { no: "58", title: "좌석안전띠경고장치시험" },
              { no: "64", title: "도난방지장치시험" },
            ].map((item) => (
              <div key={item.no} style={{
                background: "#fff",
                padding: "24px 28px",
                display: "flex",
                alignItems: "center",
                gap: 16,
                borderBottom: "1px solid rgba(10,22,40,0.06)",
                borderRight: "1px solid rgba(10,22,40,0.06)",
              }}>
                <span style={{
                  minWidth: 44, height: 44,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "#0A1628",
                  fontSize: 13, fontWeight: 800, color: "#fff",
                  borderRadius: 4,
                }}>{item.no}</span>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#0A1628", lineHeight: 1.5 }}>{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recall 대응 */}
        <div style={{ background: "#fff", padding: "52px 48px", marginBottom: 80, borderLeft: "4px solid var(--accent)" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 16 }}>RECALL SUPPORT</p>
          <h3 style={{ fontSize: 24, fontWeight: 800, color: "#0A1628", marginBottom: 20 }}>Recall 대응 컨설팅</h3>
          <div style={{ background: "#F3F7FC", padding: "20px 24px", marginBottom: 28, borderRadius: 4 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#0A1628", marginBottom: 8 }}>"제작 결함(Recall)" 이란?</p>
            <p style={{ fontSize: 14, color: "#3d5570", lineHeight: 1.9 }}>
              제작자등록을 한 자동차 또는 자동차부품이 자동차안전기준 또는 부품안전기준에 적합하지 아니하거나
              안전운행에 지장을 주는 등의 결함 [자동차관리법 제31조제1항]
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              "Recall 발생에 따른 대응절차 및 방안 컨설팅 (시정조치계획 수립 및 통지, 공고)",
              "자기인증한 자동차의 사후관리 방안 컨설팅 (판매 차량 사후관리, 부품가격 공개)",
              "자동차 또는 부품의 자료 제공 컨설팅 (국토부 보고사항, 구매자 정보제공)",
              "Recall 조사에 대한 대응방안 컨설팅 (성능시험대행자 조사 대응, 제출자료)",
              "Recall 발생 방지를 위한 사전 컨설팅",
              "자동차 교환·환불건 발생에 대한 대응 컨설팅",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: "var(--accent)", fontWeight: 700, fontSize: 16, lineHeight: 1.6, flexShrink: 0 }}>·</span>
                <p style={{ fontSize: 14, color: "#3d5570", lineHeight: 1.9 }}>{item}</p>
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
              인증 컨설팅 의뢰 및 문의
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
