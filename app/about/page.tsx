"use client";

import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

const HISTORY = [
  {
    year: "2023",
    events: [
      "한국자동차연구원 — 자기인증 적합조사 (조향성능, 속도계, 최고속도제한장치, TPMS 등)",
      "현대모비스㈜ ADAS 및 자율주행차량 성능개발 및 인증 시스템 NCAP 평가",
    ],
  },
  {
    year: "2019",
    events: [
      "자율주행 기반 트랙터 군집주행 국책사업 참여 (2019~2021)",
    ],
  },
  {
    year: "2016",
    events: [
      "중국(연태) 지사 설립 및 중국 필드내구시험·동계시험 실시",
    ],
  },
  {
    year: "2014",
    events: [
      "중국 필드내구시험 및 동계시험 실시",
      "중국지사 설립 (상해 / 사천성 자양)",
    ],
  },
  {
    year: "2013",
    events: [
      "북미 현지시험 수행 (현대모비스 의뢰)",
    ],
  },
  {
    year: "2008",
    events: [
      "이노비즈(INNO-BIZ) 인증 취득",
      "ISO 9001 품질경영시스템 인증 취득",
    ],
  },
  {
    year: "2007",
    events: [
      "화성시 북양동 현재 사옥 이전",
    ],
  },
  {
    year: "2006",
    events: [
      "기업부설연구소 설립",
      "일본 미쓰비시후소로부터 감사패 수여",
    ],
  },
  {
    year: "2005",
    events: [
      "일본 미쓰비시후소 필드내구시험 수주 (국내시험)",
      "벤처기업 지정 (신기술기업)",
    ],
  },
  {
    year: "2003",
    events: [
      "현대자동차 필드내구시험 업무 수주",
      "다임러현대상용차㈜와 기술용역 체결",
    ],
  },
  {
    year: "2001",
    events: [
      "3월 29일 — 저먼코리아㈜ 설립 (대표이사 최찬)",
      "국내 자동차 5개사 및 부품사 실차시험 전문 수행업체로 출발",
    ],
  },
];

const CERTS = [
  { title: "이노비즈(INNO-BIZ) 인증", sub: "기술혁신형 중소기업", year: "2008" },
  { title: "ISO 9001", sub: "품질경영시스템 인증", year: "2008" },
  { title: "벤처기업 지정", sub: "신기술기업", year: "2005" },
  { title: "기업부설연구소", sub: "한국산업기술진흥협회", year: "2006" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* 헤더 */}
      <section style={{
        position: "relative",
        padding: "160px clamp(24px,5vw,96px) 96px",
        background: "#0A1628",
        overflow: "hidden",
      }}>
        <div className="gk-grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
        <div style={{ position: "absolute", top: "50%", left: "60%", transform: "translate(-50%,-50%)", width: "60vw", height: "60vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(204,0,34,0.05) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
            <Link href="/" style={{ fontSize: 12, color: "rgba(200,218,240,0.4)", letterSpacing: "0.06em" }}>홈</Link>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.18)" }}>›</span>
            <span style={{ fontSize: 12, color: "var(--accent)", fontWeight: 700, letterSpacing: "0.06em" }}>회사소개</span>
          </div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 18 }}>ABOUT US</p>
          <h1 style={{ fontSize: "clamp(36px,5.5vw,72px)", fontWeight: 900, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1.05, marginBottom: 28 }}>
            현재 및 미래 자동차의<br />중심, 저먼코리아
          </h1>
          <p style={{ fontSize: 17, color: "rgba(200,218,240,0.65)", lineHeight: 2.0, maxWidth: 580 }}>
            한국 최초 국내 자동차 5개사 및 부품사의 실차시험 전문 수행업체로
            2001년 설립되어 실차시험 분야의 선두주자로 자리매김하고 있습니다.
          </p>
        </div>
      </section>

      <main style={{ background: "#F3F7FC" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px clamp(24px,5vw,96px)" }}>

          {/* 회사 개요 */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start", marginBottom: 96 }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 18 }}>COMPANY OVERVIEW</p>
              <h2 style={{ fontSize: "clamp(24px,3vw,38px)", fontWeight: 900, color: "#0A1628", letterSpacing: "-0.03em", marginBottom: 28, lineHeight: 1.2 }}>
                자동차 시험에 대한<br />최상의 솔루션
              </h2>
              <p style={{ fontSize: 16, color: "#3d5570", lineHeight: 2.0, marginBottom: 20 }}>
                저먼코리아㈜는 자동차 시험·평가 전문기업으로, 2001년 설립 이래 국내외 자동차 제조사 및 부품사에
                전문 시험 서비스를 제공해 왔습니다.
              </p>
              <p style={{ fontSize: 16, color: "#3d5570", lineHeight: 2.0, marginBottom: 20 }}>
                필드 내구시험, 성능시험, 필드 모니터링 시험 등 실차시험 분야의 선두주자로서
                각종 시험의 경험과 노하우로 다양한 해외시험을 수행 및 지원합니다.
              </p>
              <p style={{ fontSize: 16, color: "#3d5570", lineHeight: 2.0 }}>
                미래, 환경을 생각하는 저먼코리아는 FCA·ADAS·자율주행 등 신기술 시험과
                자기인증 컨설팅까지 종합 자동차 시험 솔루션을 제공합니다.
              </p>
            </div>

            {/* 회사 정보 테이블 */}
            <div style={{ background: "#fff", border: "1px solid rgba(10,22,40,0.06)" }}>
              {[
                { label: "회사명", value: "저먼코리아㈜ / GERMAN KOREA CO., LTD." },
                { label: "대표이사", value: "최 찬" },
                { label: "설립일", value: "2001년 3월 29일" },
                { label: "임직원", value: "39명" },
                { label: "소재지", value: "경기도 화성시 남양읍 화성로 1444-12" },
                { label: "전화", value: "031-366-8808" },
                { label: "팩스", value: "031-366-8809" },
                { label: "이메일", value: "contact@germankorea.co.kr" },
                { label: "주요 사업", value: "실차시험, 기술시험, 기술교육, 자기인증" },
              ].map((row, i) => (
                <div key={row.label} style={{
                  display: "grid", gridTemplateColumns: "110px 1fr",
                  borderBottom: i < 8 ? "1px solid rgba(10,22,40,0.06)" : "none",
                  padding: "14px 24px",
                  alignItems: "start",
                }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#7090b0", letterSpacing: "0.04em" }}>{row.label}</span>
                  <span style={{ fontSize: 13, color: "#0A1628", lineHeight: 1.7 }}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 인증 현황 */}
          <div style={{ marginBottom: 96 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 16 }}>CERTIFICATIONS</p>
            <h2 style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 900, color: "#0A1628", letterSpacing: "-0.03em", marginBottom: 48 }}>
              인증 현황
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 2 }}>
              {CERTS.map((c) => (
                <div key={c.title} style={{ background: "#0A1628", padding: "36px 32px" }}>
                  <p style={{ fontSize: 10, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.16em", marginBottom: 14 }}>{c.year}</p>
                  <h4 style={{ fontSize: 17, fontWeight: 800, color: "#fff", marginBottom: 10, lineHeight: 1.4 }}>{c.title}</h4>
                  <p style={{ fontSize: 13, color: "rgba(200,218,240,0.5)" }}>{c.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 연혁 */}
          <div id="history" style={{ marginBottom: 96 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 16 }}>HISTORY</p>
            <h2 style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 900, color: "#0A1628", letterSpacing: "-0.03em", marginBottom: 64 }}>
              회사 연혁
            </h2>
            <div style={{ position: "relative", paddingLeft: 32 }}>
              {/* 세로선 */}
              <div style={{
                position: "absolute", left: 0, top: 8, bottom: 8,
                width: 2, background: "rgba(10,22,40,0.1)",
              }} />

              {HISTORY.map((h) => (
                <div key={h.year} style={{ position: "relative", marginBottom: 48 }}>
                  {/* 연도 도트 */}
                  <div style={{
                    position: "absolute", left: -38, top: 4,
                    width: 12, height: 12, borderRadius: "50%",
                    background: "var(--accent)",
                    boxShadow: "0 0 0 4px rgba(204,0,34,0.12)",
                  }} />

                  <h3 style={{
                    fontSize: 22, fontWeight: 900, color: "#0A1628",
                    letterSpacing: "-0.02em", marginBottom: 16,
                  }}>{h.year}</h3>

                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {h.events.map((ev) => (
                      <div key={ev} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <span style={{ color: "var(--accent)", fontWeight: 700, fontSize: 14, lineHeight: 1.7, flexShrink: 0 }}>—</span>
                        <p style={{ fontSize: 14, color: "#3d5570", lineHeight: 1.8 }}>{ev}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 찾아오시는 길 */}
          <div id="location" style={{ background: "#0A1628", padding: "64px 56px", marginBottom: 0 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.38em", color: "var(--accent)", marginBottom: 16 }}>LOCATION</p>
            <h2 style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", marginBottom: 40 }}>
              찾아오시는 길
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
              <div>
                {[
                  { label: "주소", value: "경기도 화성시 남양읍 화성로 1444-12" },
                  { label: "전화", value: "031-366-8808" },
                  { label: "팩스", value: "031-366-8809" },
                  { label: "이메일", value: "contact@germankorea.co.kr" },
                ].map((row) => (
                  <div key={row.label} style={{ display: "flex", gap: 20, marginBottom: 18, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.08em", minWidth: 44 }}>{row.label}</span>
                    <span style={{ fontSize: 14, color: "rgba(200,218,240,0.75)", lineHeight: 1.8 }}>{row.value}</span>
                  </div>
                ))}
                <div style={{ marginTop: 32 }}>
                  <a href="tel:031-366-8808" style={{
                    display: "inline-block",
                    padding: "14px 32px", background: "var(--accent)", color: "#fff",
                    fontSize: 14, fontWeight: 800, letterSpacing: "0.06em",
                  }}>031-366-8808 전화하기</a>
                </div>
              </div>
              <div style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                height: 200,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <a
                  href="https://map.naver.com/v5/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%ED%99%94%EC%84%B1%EC%8B%9C%20%EB%82%A8%EC%96%91%EC%9D%8D%20%ED%99%94%EC%84%B1%EB%A1%9C%201444-12"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
                    color: "rgba(200,218,240,0.5)", fontSize: 13, textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "rgba(200,218,240,0.85)")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "rgba(200,218,240,0.5)")}
                >
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  네이버 지도로 보기 →
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>

      <SiteFooter />

      <style>{`
        @media (max-width: 900px) {
          #about-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          #location > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
