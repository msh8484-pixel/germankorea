"use client";

import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

const EQUIPMENT = [
  {
    no: 11,
    name: "속도계 (V-BOX3i)",
    maker: "Racelogic",
    spec: "—",
    purpose: "속도/위치 측정",
    qty: "—",
  },
  {
    no: 10,
    name: "DAQ (DEWE2-M4)",
    maker: "Dewetron",
    spec: "센서 8채널, 카운터 6채널, CAN 3채널, 온도 8채널, GPS 100Hz",
    purpose: "범용 데이터 수집",
    qty: "7 set",
  },
  {
    no: 9,
    name: "Power Analyzer (PW3390)",
    maker: "HIOKI",
    spec: "전압 4채널, 전류 4채널, 전압범위 15V~1500V, 전류범위 0.1A~8000A, 고도 2000m까지 사용 가능",
    purpose: "전력량 측정",
    qty: "1 set",
  },
  {
    no: 8,
    name: "Steering Effort Sensor & Display (CLSx)",
    maker: "imc",
    spec: "측정범위 ±100Nm, 측정오차 0.1%FS, 측정각도 ±1440도, 측정오차 0.045도, 주파수대역 0~800Hz",
    purpose: "조향성능 계측",
    qty: "1 set",
  },
  {
    no: 7,
    name: "연료장비 (MF-3200)",
    maker: "ONOI SOKKI",
    spec: "Measuring range 0.3~120 L/h, Accuracy ±0.2% of reading, Operating temp 0~60℃",
    purpose: "연료 소모량 측정",
    qty: "2 set",
  },
  {
    no: 6,
    name: "속도계 (VBOX2)",
    maker: "Racelogic",
    spec: "Velocity accuracy 0.1km/h, Update rate 20Hz, Max velocity 1000MPH, Resolution 0.01km/h",
    purpose: "속도/고도/위치 측정",
    qty: "1 set",
  },
  {
    no: 5,
    name: "Data Logger (GL240)",
    maker: "GRAPHTEC",
    spec: "기본 10채널, 전 채널 isolated, 외부전원 12~24V, 샘플링 최고 10ms, K/J/E/T/R/S/B/N/W 열전대 지원",
    purpose: "온도/전압 측정",
    qty: "3 set",
  },
  {
    no: 4,
    name: "소음측정기 (ENS CHECK NVI-101)",
    maker: "ENS",
    spec: "270×247×91mm, 1100g, 12V, 배터리 3.7V/3000mAh(≥4h), 0~60℃, SD카드 8GB",
    purpose: "진동/소음 측정",
    qty: "1 set",
  },
  {
    no: 3,
    name: "스캐너 (G-SCAN2)",
    maker: "GIT",
    spec: "고장코드 검색, 코드별 진단가이드, 센서데이터 점검, 주행데이터 분석, 차량 통신라인 점검",
    purpose: "차량 정비 및 점검",
    qty: "1 set",
  },
  {
    no: 2,
    name: "드론 (Inspire 2)",
    maker: "DJI Professional",
    spec: "비행시간 23~27분, 제어범위 7km, 영상해상도 6K/5.2K, 최대속도 94kph, Live View 1080P",
    purpose: "홍보영상 및 수직고도 촬영",
    qty: "1 set",
  },
  {
    no: 1,
    name: "전자정밀저울 (MSE36200s-000-DO)",
    maker: "Sartorius",
    spec: "최대 측정용량 36.2kg, 정밀도 1000mg, 저울판 400×300mm, isoCAL (환경·온도 변화 자동 감지 후 자동 보정)",
    purpose: "중량 측정 / DPF Soot 무게 변화 계측",
    qty: "1 set",
  },
];

export default function EquipmentPage() {
  return (
    <>
      <Navbar />

      {/* 헤더 */}
      <section style={{
        position: "relative",
        padding: "160px clamp(24px,5vw,96px) 80px",
        background: "#0A1628",
        overflow: "hidden",
      }}>
        <div className="gk-grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.45 }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <Link href="/" style={{ fontSize: 12, color: "rgba(200,218,240,0.4)", letterSpacing: "0.06em" }}>홈</Link>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.18)" }}>›</span>
            <span style={{ fontSize: 12, color: "var(--accent)", fontWeight: 700, letterSpacing: "0.06em" }}>보유장비</span>
          </div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 16 }}>EQUIPMENT</p>
          <h1 style={{ fontSize: "clamp(32px,5vw,64px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.05, marginBottom: 20 }}>
            보유 시험장비
          </h1>
          <p style={{ fontSize: 16, color: "rgba(200,218,240,0.65)", lineHeight: 1.8, maxWidth: 560 }}>
            최신 계측 장비와 전문 시험 장비를 통해 정확하고 신뢰성 높은 시험 데이터를 제공합니다.
          </p>
        </div>
      </section>

      {/* 장비 테이블 */}
      <main style={{ background: "#F3F7FC" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px clamp(24px,5vw,96px)" }}>

          {/* 장비 카드 목록 */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 2 }}>
            {EQUIPMENT.map((item) => (
              <div key={item.no} style={{
                background: "#fff",
                padding: "32px 28px",
                borderBottom: "1px solid rgba(10,22,40,0.06)",
                borderRight: "1px solid rgba(10,22,40,0.06)",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <span style={{
                    fontSize: 11, fontWeight: 800, color: "var(--accent)",
                    letterSpacing: "0.12em",
                  }}>NO. {String(item.no).padStart(2, "0")}</span>
                  {item.qty !== "—" && (
                    <span style={{
                      fontSize: 11, fontWeight: 700,
                      padding: "4px 10px",
                      background: "#0A1628",
                      color: "#fff",
                      borderRadius: 100,
                      letterSpacing: "0.06em",
                    }}>{item.qty}</span>
                  )}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: "#0A1628", marginBottom: 8, lineHeight: 1.4 }}>{item.name}</h3>
                <p style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", marginBottom: 12, letterSpacing: "0.06em" }}>{item.maker}</p>
                {item.spec !== "—" && (
                  <p style={{ fontSize: 13, color: "#3d5570", lineHeight: 1.8, marginBottom: 12, borderTop: "1px solid rgba(10,22,40,0.06)", paddingTop: 12 }}>
                    {item.spec}
                  </p>
                )}
                <p style={{
                  fontSize: 12, fontWeight: 600,
                  color: "#7090b0",
                  borderTop: "1px solid rgba(10,22,40,0.06)", paddingTop: 12,
                  letterSpacing: "0.04em",
                }}>{item.purpose}</p>
              </div>
            ))}
          </div>

          {/* 문의 CTA */}
          <div style={{
            background: "#0A1628",
            padding: "52px 48px",
            marginTop: 48,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 28,
          }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 10 }}>CONTACT US</p>
              <h3 style={{ fontSize: "clamp(18px,2.5vw,28px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em" }}>
                장비 활용 시험 문의
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
      </main>

      <SiteFooter />
    </>
  );
}
