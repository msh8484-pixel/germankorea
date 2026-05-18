"use client";

import ServicePageLayout from "@/components/ServicePageLayout";

const TABS = [
  { label: "국내 실차시험 개요", href: "/services/domestic" },
  { label: "필드 내구시험", href: "/services/domestic/field-endurance" },
  { label: "필드 모니터링", href: "/services/domestic/field-monitoring" },
  { label: "PEMS 시험", href: "/services/domestic/pems" },
  { label: "친환경자동차시험", href: "/services/domestic/eco" },
  { label: "제동시험", href: "/services/domestic/brake" },
  { label: "조향시험", href: "/services/domestic/steering" },
  { label: "연비성능시험", href: "/services/domestic/fuel-economy" },
];

export default function DomesticServicePage() {
  return (
    <ServicePageLayout
      heroTitle="국내 실차시험"
      heroTitleAccent="Domestic Vehicle Testing"
      heroSub="개발차량 또는 품질확인 차량의 내구신뢰성 시험, 각종 시스템 시험, 친환경자동차 시험 등 실차시험 서비스를 제공합니다."
      heroTag="국내 실차시험"
      videoId="zRWq7hstgL4"
      tabs={TABS}
      activeTab="/services/domestic"
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px clamp(24px,5vw,96px)" }}>

        {/* 개요 */}
        <div style={{ marginBottom: 80 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 16 }}>OVERVIEW</p>
          <h2 style={{ fontSize: "clamp(24px,3vw,40px)", fontWeight: 900, color: "#0A1628", letterSpacing: "-0.03em", marginBottom: 24, lineHeight: 1.2 }}>
            개발차량부터 품질확인 차량까지<br />다양한 국내 실차시험 제공
          </h2>
          <p style={{ fontSize: 17, color: "#3d5570", lineHeight: 2.0, maxWidth: 700 }}>
            저먼코리아(주)는 자동차 제조사 및 부품사에서 개발 중인 차량 또는 품질확인이 필요한 차량에 대해
            체계적이고 전문적인 실차시험 서비스를 제공합니다.
            내구신뢰성 시험, 시스템 시험, 친환경자동차 시험 등 다양한 분야에서
            최고 수준의 시험 전문인력과 장비를 갖추고 있습니다.
          </p>
        </div>

        {/* 시험 항목 */}
        <div style={{ marginBottom: 80 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 16 }}>SERVICES</p>
          <h3 style={{ fontSize: "clamp(20px,2.5vw,32px)", fontWeight: 900, color: "#0A1628", marginBottom: 48, letterSpacing: "-0.02em" }}>
            국내 실차시험 항목
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 2 }}>
            {[
              {
                num: "01",
                title: "필드 내구시험",
                desc: "공로(일반도로) 또는 주행시험장에서 장거리 주행을 통해 차량의 내구성 및 신뢰성을 평가합니다. 장거리 주행에서 발생하는 결함 항목을 조기에 발견하여 품질을 향상시킵니다.",
                href: "/services/domestic/field-endurance",
              },
              {
                num: "02",
                title: "필드 모니터링",
                desc: "계측 장비를 활용하여 차량 주행 중 발생하는 각종 데이터를 수집·분석합니다. 실제 도로 환경에서의 차량 거동 특성을 파악하여 개발에 활용합니다.",
                href: "/services/domestic/field-monitoring",
              },
              {
                num: "03",
                title: "PEMS 시험",
                desc: "실도로에서 차량이 실제로 배출하는 오염물질을 측정합니다. 배출가스 저감장치의 성능 확인 및 실주행 배출가스(RDE: Real Driving Emissions) 법규 대응을 지원합니다.",
                href: "/services/domestic/pems",
              },
              {
                num: "04",
                title: "친환경자동차시험",
                desc: "전기차, 수소차, 하이브리드 등 친환경 차량의 성능을 평가합니다. 충전성능, 항속거리, 에너지효율 등 친환경 차량에 특화된 시험 항목을 수행합니다.",
                href: "/services/domestic/eco",
              },
              {
                num: "05",
                title: "제동시험",
                desc: "제동거리, ABS 성능, 제동안정성 등 차량 제동 시스템의 성능을 평가합니다. 법규 요건 및 성능 기준에 맞춘 체계적인 시험을 수행합니다.",
                href: "/services/domestic/brake",
              },
              {
                num: "06",
                title: "조향시험",
                desc: "조향력, 복원력, 조향감 등 차량 조향 시스템의 성능을 평가합니다. 주관 평가와 계측 평가를 병행하여 객관적인 데이터를 제공합니다.",
                href: "/services/domestic/steering",
              },
              {
                num: "07",
                title: "연비성능시험",
                desc: "실제 도로 조건에서 차량의 연료 소비량을 측정합니다. 공인 연비 인증 시험 및 개발 단계의 연비 개선을 위한 데이터를 제공합니다.",
                href: "/services/domestic/fuel-economy",
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
              시험 의뢰 및 견적 문의
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
