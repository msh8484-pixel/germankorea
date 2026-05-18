"use client";

import ServicePageLayout from "@/components/ServicePageLayout";

const TABS = [
  { label: "시험지원 개요", href: "/services/test-support" },
  { label: "완성차 수입", href: "/services/test-support/import" },
  { label: "시험차 개조·정비", href: "/services/test-support/modification" },
];

export default function TestSupportPage() {
  return (
    <ServicePageLayout
      heroTitle="시험지원"
      heroTitleAccent="Test Support"
      heroSub="완성차 수입 통관부터 시험차량 개조·정비까지 시험에 필요한 모든 지원 서비스를 제공합니다."
      heroTag="시험지원"
      videoId="zRWq7hstgL4"
      tabs={TABS}
      activeTab="/services/test-support"
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px clamp(24px,5vw,96px)" }}>

        {/* 개요 */}
        <div style={{ marginBottom: 80 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 16 }}>OVERVIEW</p>
          <h2 style={{ fontSize: "clamp(24px,3vw,40px)", fontWeight: 900, color: "#0A1628", letterSpacing: "-0.03em", marginBottom: 24, lineHeight: 1.2 }}>
            시험 전 과정을<br />원스톱으로 지원합니다
          </h2>
          <p style={{ fontSize: 17, color: "#3d5570", lineHeight: 2.0, maxWidth: 700 }}>
            저먼코리아(주)는 완성차 수입 통관 대행부터 시험차량 개조·정비까지
            시험에 필요한 사전 준비 업무를 전문적으로 지원합니다.
            고객사가 본연의 시험 업무에 집중할 수 있도록 행정·기술 지원을 담당합니다.
          </p>
        </div>

        {/* 2개 서비스 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginBottom: 80 }}>
          {/* 완성차 수입 */}
          <div style={{ background: "#0A1628", padding: "52px 44px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.16em", marginBottom: 16 }}>SERVICE 01</p>
            <h3 style={{ fontSize: "clamp(20px,2.5vw,30px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", marginBottom: 20, lineHeight: 1.3 }}>
              완성차 수입
            </h3>
            <p style={{ fontSize: 14, color: "rgba(200,218,240,0.65)", lineHeight: 1.9, marginBottom: 28 }}>
              해외 OEM 완성차의 국내 시험을 위한 수입 통관 및 임시 운행 허가 취득을 지원합니다.
              시험 목적 차량의 수입에 필요한 제반 절차를 대행합니다.
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                "시험 목적 완성차 수입 통관 대행",
                "임시 운행 허가 취득 지원",
                "차량 수송 및 현장 인도",
                "수입 차량 등록·서류 처리",
              ].map((item) => (
                <li key={item} style={{
                  fontSize: 13, color: "rgba(200,218,240,0.6)", lineHeight: 1.9,
                  paddingLeft: 16, position: "relative",
                }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--accent)" }}>·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 시험차 개조/정비 */}
          <div style={{ background: "#112035", padding: "52px 44px" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.16em", marginBottom: 16 }}>SERVICE 02</p>
            <h3 style={{ fontSize: "clamp(20px,2.5vw,30px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", marginBottom: 20, lineHeight: 1.3 }}>
              시험차 개조·정비
            </h3>
            <p style={{ fontSize: 14, color: "rgba(200,218,240,0.65)", lineHeight: 1.9, marginBottom: 28 }}>
              시험에 필요한 계측 장비 장착 개조 및 시험차량의 정기 정비·관리 서비스를 제공합니다.
              최적의 시험 조건을 유지할 수 있도록 전문 기술인력이 지원합니다.
            </p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                "계측 장비 장착을 위한 차량 개조",
                "시험 조건에 맞는 차량 사양 변경",
                "시험차량 정기 점검 및 정비",
                "고장 진단 및 긴급 수리 대응",
              ].map((item) => (
                <li key={item} style={{
                  fontSize: 13, color: "rgba(200,218,240,0.6)", lineHeight: 1.9,
                  paddingLeft: 16, position: "relative",
                }}>
                  <span style={{ position: "absolute", left: 0, color: "var(--accent)" }}>·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 지원 프로세스 */}
        <div style={{ marginBottom: 80 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 16 }}>PROCESS</p>
          <h3 style={{ fontSize: "clamp(20px,2.5vw,32px)", fontWeight: 900, color: "#0A1628", marginBottom: 48, letterSpacing: "-0.02em" }}>
            시험지원 진행 절차
          </h3>
          <div style={{ display: "flex", gap: 0, overflowX: "auto" }}>
            {[
              { step: "①", title: "지원 의뢰", sub: "차량 정보 및 시험 일정 확인" },
              { step: "②", title: "수입 통관", sub: "서류 준비 및 세관 통관" },
              { step: "③", title: "차량 개조", sub: "계측 장비 장착 및 사양 변경" },
              { step: "④", title: "차량 검수", sub: "개조 완료 후 상태 확인" },
              { step: "⑤", title: "시험 현장 지원", sub: "시험 기간 중 차량 정비" },
            ].map((item, i) => (
              <div key={item.step} style={{
                flex: "1 0 180px",
                background: i % 2 === 0 ? "#0A1628" : "#112035",
                padding: "36px 24px",
              }}>
                <p style={{ fontSize: 28, fontWeight: 900, color: "var(--accent)", marginBottom: 12, opacity: 0.8 }}>{item.step}</p>
                <p style={{ fontSize: 15, fontWeight: 700, color: "#fff", lineHeight: 1.5, marginBottom: 8 }}>{item.title}</p>
                <p style={{ fontSize: 12, color: "rgba(200,218,240,0.5)", lineHeight: 1.7 }}>{item.sub}</p>
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
              시험지원 의뢰 및 문의
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
