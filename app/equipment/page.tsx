"use client";

import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import Image from "next/image";

const EQUIPMENT = [
  {
    no: 11,
    name: "속도계 (V-BOX3i)",
    maker: "Racelogic",
    spec: "—",
    purpose: "속도/위치 측정",
    qty: "—",
    img: "/images/equipment/vbox3i.jpg",
  },
  {
    no: 10,
    name: "DAQ (DEWE2-M4)",
    maker: "Dewetron",
    spec: "센서 8채널, 카운터 6채널, CAN 3채널, 온도 8채널, GPS 100Hz",
    purpose: "범용 데이터 수집",
    qty: "7 set",
    img: "/images/equipment/dewe2m4.jpg",
  },
  {
    no: 9,
    name: "Power Analyzer (PW3390)",
    maker: "HIOKI",
    spec: "전압 4채널, 전류 4채널, 전압범위 15V~1500V, 전류범위 0.1A~8000A",
    purpose: "전력량 측정",
    qty: "1 set",
    img: "/images/equipment/pw3390.jpg",
  },
  {
    no: 8,
    name: "Steering Effort Sensor & Display (CLSx)",
    maker: "imc",
    spec: "측정범위 ±100Nm, 측정오차 0.1%FS, 측정각도 ±1440도",
    purpose: "조향성능 계측",
    qty: "1 set",
    img: "/images/equipment/clsx.jpg",
  },
  {
    no: 7,
    name: "연료장비 (MF-3200)",
    maker: "ONO SOKKI",
    spec: "Measuring range 0.3~120 L/h, Accuracy ±0.2% of reading",
    purpose: "연료 소모량 측정",
    qty: "2 set",
    img: "/images/equipment/mf3200.jpg",
  },
  {
    no: 6,
    name: "속도계 (VBOX2)",
    maker: "Racelogic",
    spec: "Velocity accuracy 0.1km/h, Update rate 20Hz, Resolution 0.01km/h",
    purpose: "속도/고도/위치 측정",
    qty: "1 set",
    img: "/images/equipment/vbox2.jpg",
  },
  {
    no: 5,
    name: "Data Logger (GL240)",
    maker: "GRAPHTEC",
    spec: "기본 10채널, 전 채널 isolated, 샘플링 최고 10ms",
    purpose: "온도/전압 측정",
    qty: "3 set",
    img: "/images/equipment/gl240.webp",
  },
  {
    no: 4,
    name: "소음측정기 (ENS CHECK NVI-101)",
    maker: "ENS",
    spec: "270×247×91mm, 12V, SD카드 8GB, 배터리 3.7V/3000mAh",
    purpose: "진동/소음 측정",
    qty: "1 set",
    img: "/images/equipment/nvi101.jpg",
  },
  {
    no: 3,
    name: "스캐너 (G-SCAN2)",
    maker: "GIT",
    spec: "고장코드 검색, 센서데이터 점검, 주행데이터 분석, 차량 통신라인 점검",
    purpose: "차량 정비 및 점검",
    qty: "1 set",
    img: "/images/equipment/gscan2.jpg",
  },
  {
    no: 2,
    name: "드론 (Inspire 2)",
    maker: "DJI Professional",
    spec: "비행시간 23~27분, 제어범위 7km, 영상해상도 6K/5.2K, 최대속도 94kph",
    purpose: "홍보영상 및 수직고도 촬영",
    qty: "1 set",
    img: "/images/equipment/inspire2.jpg",
  },
  {
    no: 1,
    name: "전자정밀저울 (MSE36200s-000-DO)",
    maker: "Sartorius",
    spec: "최대 측정용량 36.2kg, 정밀도 1000mg, 저울판 400×300mm",
    purpose: "중량 측정 / DPF Soot 무게 변화 계측",
    qty: "1 set",
    img: "/images/equipment/mse36200s.jpg",
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

      {/* 장비 그리드 */}
      <main style={{ background: "#0A1628" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px clamp(24px,5vw,96px) 96px" }}>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 3 }}>
            {EQUIPMENT.map((item, idx) => (
              <div
                key={item.no}
                className="eq-card"
                style={{
                  position: "relative",
                  height: 340,
                  overflow: "hidden",
                }}
              >
                {/* Next.js Image — 자동 WebP 변환 + lazy loading */}
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "contain", objectPosition: "center", backgroundColor: "#0d1e33" }}
                  className="eq-img"
                  priority={idx < 3}
                  quality={80}
                />

                {/* 그라디언트 오버레이 */}
                <div style={{
                  position: "absolute", inset: 0, zIndex: 1,
                  background: "linear-gradient(to top, rgba(6,14,26,0.97) 0%, rgba(6,14,26,0.6) 50%, rgba(6,14,26,0.15) 100%)",
                }} />

                {/* 텍스트 */}
                <div style={{
                  position: "absolute", inset: 0, zIndex: 2,
                  display: "flex", flexDirection: "column", justifyContent: "flex-end",
                  padding: "24px 28px",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <span style={{ fontSize: 10, fontWeight: 800, color: "var(--accent)", letterSpacing: "0.16em" }}>
                      NO. {String(item.no).padStart(2, "0")}
                    </span>
                    {item.qty !== "—" && (
                      <span style={{
                        fontSize: 10, fontWeight: 700,
                        padding: "3px 10px",
                        border: "1px solid rgba(255,255,255,0.25)",
                        color: "rgba(255,255,255,0.65)",
                        borderRadius: 100,
                        letterSpacing: "0.06em",
                      }}>{item.qty}</span>
                    )}
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 6, lineHeight: 1.4 }}>{item.name}</h3>
                  <p style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", marginBottom: 10, letterSpacing: "0.08em" }}>{item.maker}</p>
                  {item.spec !== "—" && (
                    <p style={{
                      fontSize: 12, color: "rgba(200,218,240,0.5)", lineHeight: 1.7, marginBottom: 10,
                      borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 10,
                      display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
                    }}>
                      {item.spec}
                    </p>
                  )}
                  <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(200,218,240,0.4)", letterSpacing: "0.06em" }}>
                    {item.purpose}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 문의 CTA */}
          <div style={{
            background: "#112035",
            border: "1px solid rgba(255,255,255,0.06)",
            padding: "52px 48px",
            marginTop: 3,
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

      <style>{`
        .eq-img { transition: transform 0.55s cubic-bezier(0.16,1,0.3,1); }
        .eq-card:hover .eq-img { transform: scale(1.06); }
      `}</style>
    </>
  );
}
