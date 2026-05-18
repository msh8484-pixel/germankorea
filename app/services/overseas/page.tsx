"use client";

import ServicePageLayout from "@/components/ServicePageLayout";

const TABS = [
  { label: "해외 실차시험 개요", href: "/services/overseas" },
  { label: "혹한지시험", href: "/services/overseas/cold" },
  { label: "혹서지시험", href: "/services/overseas/hot" },
  { label: "고지시험", href: "/services/overseas/altitude" },
  { label: "중국 성능·내구시험", href: "/services/overseas/china" },
];

export default function OverseasServicePage() {
  return (
    <ServicePageLayout
      heroTitle="해외 실차시험"
      heroTitleAccent="Overseas Vehicle Testing"
      heroSub="중국 현지 시험 인프라를 활용한 혹한지·혹서지·고지시험 및 성능·내구시험 서비스를 제공합니다."
      heroTag="해외 실차시험"
      videoId="fe887fACTL8"
      tabs={TABS}
      activeTab="/services/overseas"
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px clamp(24px,5vw,96px)" }}>

        {/* 개요 */}
        <div style={{ marginBottom: 80 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 16 }}>OVERVIEW</p>
          <h2 style={{ fontSize: "clamp(24px,3vw,40px)", fontWeight: 900, color: "#0A1628", letterSpacing: "-0.03em", marginBottom: 24, lineHeight: 1.2 }}>
            중국 현지 인프라를 활용한<br />전문 해외 실차시험
          </h2>
          <p style={{ fontSize: 17, color: "#3d5570", lineHeight: 2.0, maxWidth: 700 }}>
            저먼코리아(주)는 중국 현지 시험 인프라와 협력 네트워크를 통해
            혹한지·혹서지·고지시험 등 국내에서는 불가능한 극한 환경 실차시험을 제공합니다.
            현지 전문 인력과 장비를 통해 효율적이고 신속한 해외 시험 지원이 가능합니다.
          </p>
        </div>

        {/* 시험 특징 배너 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, marginBottom: 80 }}>
          {[
            { icon: "❄️", label: "혹한지", desc: "-30°C 이하 극한 저온 환경", detail: "중국 북부 하얼빈 지역" },
            { icon: "☀️", label: "혹서지", desc: "+40°C 이상 고온 환경", detail: "중국 남부 투루판 지역" },
            { icon: "⛰️", label: "고지", desc: "해발 4,000m 이상 고도", detail: "중국 서부 고원 지역" },
          ].map((item) => (
            <div key={item.label} style={{ background: "#0A1628", padding: "44px 32px", textAlign: "center" }}>
              <p style={{ fontSize: 36, marginBottom: 16 }}>{item.icon}</p>
              <p style={{ fontSize: 20, fontWeight: 900, color: "#fff", marginBottom: 8 }}>{item.label}</p>
              <p style={{ fontSize: 14, color: "rgba(200,218,240,0.65)", marginBottom: 8, lineHeight: 1.7 }}>{item.desc}</p>
              <p style={{ fontSize: 12, color: "var(--accent)", fontWeight: 700, letterSpacing: "0.06em" }}>{item.detail}</p>
            </div>
          ))}
        </div>

        {/* 시험 항목 */}
        <div style={{ marginBottom: 80 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 16 }}>SERVICES</p>
          <h3 style={{ fontSize: "clamp(20px,2.5vw,32px)", fontWeight: 900, color: "#0A1628", marginBottom: 48, letterSpacing: "-0.02em" }}>
            해외 실차시험 항목
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 2 }}>
            {[
              {
                num: "01",
                title: "혹한지시험",
                desc: "영하 30도 이하의 극한 저온 환경에서 차량의 시동성, 난방 성능, 배터리 성능, 연비 등을 평가합니다. 한랭지에서의 차량 신뢰성 및 내구성을 검증합니다.",
              },
              {
                num: "02",
                title: "혹서지시험",
                desc: "40도 이상의 고온 환경에서 차량의 냉각 시스템, 에어컨 성능, 배터리 열관리, 연비 등을 평가합니다. 고온 환경에서의 차량 성능 및 신뢰성을 검증합니다.",
              },
              {
                num: "03",
                title: "고지시험",
                desc: "해발 4,000m 이상의 고도에서 차량의 엔진 출력, 냉각 성능, 배기가스, 연비 등을 평가합니다. 저산소 환경에서의 차량 성능 변화를 분석합니다.",
              },
              {
                num: "04",
                title: "성능 및 내구시험 (중국)",
                desc: "중국 현지 주행시험장 및 공로를 활용한 차량 성능·내구시험을 제공합니다. 중국 시장 출시를 위한 법규 대응 및 품질 검증을 지원합니다.",
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

        {/* 중국 파트너 정보 */}
        <div style={{ background: "#fff", padding: "48px", marginBottom: 80, borderLeft: "4px solid var(--accent)" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 16 }}>PARTNER INFO</p>
          <h3 style={{ fontSize: 22, fontWeight: 800, color: "#0A1628", marginBottom: 20 }}>중국 현지 시험 인프라</h3>
          <p style={{ fontSize: 15, color: "#3d5570", lineHeight: 2.0 }}>
            저먼코리아는 중국 현지 주행시험장 및 전문 기관과의 협력 네트워크를 통해
            혹한지(하얼빈), 혹서지(투루판), 고지(티베트 고원) 등 다양한 환경 조건의 시험을 지원합니다.
            현지 전문 인력과 계측 장비를 활용하여 국내 엔지니어가 현지에서 직접 시험을 수행할 수 있도록 지원합니다.
          </p>
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
              해외 시험 의뢰 및 견적 문의
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
