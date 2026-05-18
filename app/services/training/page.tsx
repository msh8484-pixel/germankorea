"use client";

import ServicePageLayout from "@/components/ServicePageLayout";

const TABS = [
  { label: "기술교육 개요", href: "/services/training" },
  { label: "시험차량 운전교육", href: "/services/training/driving" },
  { label: "상품성 평가방법 교육", href: "/services/training/evaluation" },
  { label: "차량 주행성능 시험법 교육", href: "/services/training/performance" },
];

export default function TrainingServicePage() {
  return (
    <ServicePageLayout
      heroTitle="기술교육"
      heroTitleAccent="Technical Training"
      heroSub="전문 강사진을 통한 시험차량 운전, 상품성 평가방법, 차량 주행성능 시험법 등 고객 맞춤형 기술교육을 제공합니다."
      heroTag="기술교육"
      videoId="Nkz6P5daADg"
      tabs={TABS}
      activeTab="/services/training"
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px clamp(24px,5vw,96px)" }}>

        {/* 개요 */}
        <div style={{ marginBottom: 80 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 16 }}>OVERVIEW</p>
          <h2 style={{ fontSize: "clamp(24px,3vw,40px)", fontWeight: 900, color: "#0A1628", letterSpacing: "-0.03em", marginBottom: 24, lineHeight: 1.2 }}>
            현장 경험 기반의<br />전문 자동차 기술교육
          </h2>
          <p style={{ fontSize: 17, color: "#3d5570", lineHeight: 2.0, maxWidth: 700 }}>
            저먼코리아(주)의 기술교육은 수십 년의 현장 경험을 보유한 전문 강사진이
            이론과 실습을 결합한 맞춤형 교육을 제공합니다.
            시험차량 운전, 상품성 평가, 차량 주행성능 시험법 등 실무에 바로 적용 가능한 교육과정으로 구성됩니다.
          </p>
        </div>

        {/* 교육 특징 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, marginBottom: 80 }}>
          {[
            { title: "현장 전문가", desc: "수십 년 현장 경험을 보유한 자동차 시험평가 전문가가 직접 교육" },
            { title: "이론 + 실습", desc: "이론 교육과 실제 시험 환경에서의 실습을 병행하는 교육 방식" },
            { title: "맞춤형 교육", desc: "고객사의 요구에 맞춘 커리큘럼으로 교육 효과 극대화" },
          ].map((item) => (
            <div key={item.title} style={{ background: "#0A1628", padding: "40px 32px" }}>
              <h4 style={{ fontSize: 18, fontWeight: 800, color: "#fff", marginBottom: 14 }}>{item.title}</h4>
              <p style={{ fontSize: 14, color: "rgba(200,218,240,0.65)", lineHeight: 1.8 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 교육 과정 */}
        <div style={{ marginBottom: 80 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 16 }}>CURRICULUM</p>
          <h3 style={{ fontSize: "clamp(20px,2.5vw,32px)", fontWeight: 900, color: "#0A1628", marginBottom: 48, letterSpacing: "-0.02em" }}>
            기술교육 과정
          </h3>

          {/* 과정 01: 시험차량 운전교육 */}
          <div style={{ background: "#fff", padding: "44px 48px", marginBottom: 2, borderLeft: "4px solid var(--accent)" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.16em", marginBottom: 12 }}>COURSE 01</p>
            <h4 style={{ fontSize: 22, fontWeight: 800, color: "#0A1628", marginBottom: 20 }}>시험차량 운전교육</h4>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#0A1628", marginBottom: 12, letterSpacing: "0.04em" }}>교육 내용</p>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {[
                    "자동차 시험장에서의 안전 수칙",
                    "공로(일반도로)에서의 시험 주행 방법",
                    "고속주회로, 직선로, 원선회로, 저마찰로 등 다양한 코스 주행",
                    "야간 주행 시험 방법",
                    "혹서지, 혹한지, 고지 등 특수 환경 주행",
                    "해외(중국 등)에서의 현지 운전 방법",
                  ].map((item) => (
                    <li key={item} style={{ fontSize: 14, color: "#3d5570", lineHeight: 1.9, paddingLeft: 16, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "var(--accent)" }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#0A1628", marginBottom: 12, letterSpacing: "0.04em" }}>교육 대상</p>
                <p style={{ fontSize: 14, color: "#3d5570", lineHeight: 1.9 }}>
                  자동차 시험 업무를 처음 담당하는 엔지니어, 해외 시험 업무 담당자, 시험차량 주행 경험 향상이 필요한 연구원
                </p>
              </div>
            </div>
          </div>

          {/* 과정 02: 상품성 평가방법 교육 */}
          <div style={{ background: "#fff", padding: "44px 48px", marginBottom: 2, borderLeft: "4px solid var(--accent)" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.16em", marginBottom: 12 }}>COURSE 02</p>
            <h4 style={{ fontSize: 22, fontWeight: 800, color: "#0A1628", marginBottom: 20 }}>상품성 평가방법 교육</h4>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#0A1628", marginBottom: 12, letterSpacing: "0.04em" }}>교육 내용</p>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {[
                    "VH(Vehicle Handling), 핸들링, 승차감, 제동(Brake) 등 6개 항목 평가 방법",
                    "주관(Subjective) 평가 방법: Rating 평가 방법",
                    "객관(Objective) 평가 방법: 계측 평가 방법",
                    "주관 평가와 객관 평가의 상관관계 분석",
                    "경쟁차 대비 상품성 평가 방법",
                  ].map((item) => (
                    <li key={item} style={{ fontSize: 14, color: "#3d5570", lineHeight: 1.9, paddingLeft: 16, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "var(--accent)" }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#0A1628", marginBottom: 12, letterSpacing: "0.04em" }}>교육 목표</p>
                <p style={{ fontSize: 14, color: "#3d5570", lineHeight: 1.9 }}>
                  차량 상품성의 주요 평가 항목에 대한 이해와 실제 평가 능력 향상. 주관 평가와 계측 평가를 접목한 종합적 상품성 평가 역량 확보.
                </p>
              </div>
            </div>
          </div>

          {/* 과정 03: 차량 주행성능 시험법 교육 */}
          <div style={{ background: "#fff", padding: "44px 48px", borderLeft: "4px solid var(--accent)" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.16em", marginBottom: 12 }}>COURSE 03</p>
            <h4 style={{ fontSize: 22, fontWeight: 800, color: "#0A1628", marginBottom: 20 }}>차량 주행성능 시험법 교육</h4>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#0A1628", marginBottom: 12, letterSpacing: "0.04em" }}>교육 내용</p>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {[
                    "승차감(Ride) & 조종안정성(Handling) 평가 방법",
                    "iTPMS 평가 및 Tire & Suspension Evaluation",
                    "제동장치(Brake) 시험 방법",
                    "MDPS, Steering 등 조향장치 시험 방법",
                    "X/Country 내구, Belgian 내구 등 차량 내구·신뢰성 시험 방법",
                    "국내, 북미, 유럽, 중국 등 법규 인증시험 방법",
                  ].map((item) => (
                    <li key={item} style={{ fontSize: 14, color: "#3d5570", lineHeight: 1.9, paddingLeft: 16, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "var(--accent)" }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#0A1628", marginBottom: 12, letterSpacing: "0.04em" }}>시험 환경</p>
                <p style={{ fontSize: 14, color: "#3d5570", lineHeight: 1.9, marginBottom: 16 }}>
                  주행시험장 시험: Ride & Handling 로, 고속주회로, 직선로, 원선회로, 저마찰로 등
                </p>
                <p style={{ fontSize: 14, color: "#3d5570", lineHeight: 1.9 }}>
                  공로 시험: 고속도로, 국도·시가지, 산악도로·비포장, 혹서지·혹한지·고지 현지 시험
                </p>
              </div>
            </div>
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
              기술교육 의뢰 및 커리큘럼 문의
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
