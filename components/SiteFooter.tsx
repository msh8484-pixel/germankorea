export default function SiteFooter() {
  return (
    <footer style={{ padding: "48px 80px 36px", borderTop: "1px solid var(--border)", background: "#060c14" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32, marginBottom: 32 }}>
          <div>
            <p style={{ fontSize: 17, fontWeight: 900, color: "#fff", marginBottom: 4 }}>
              GERMAN<span style={{ color: "var(--accent)", marginLeft: 4 }}>KOREA</span>
            </p>
            <p style={{ fontSize: 12, color: "var(--text-dim)", marginBottom: 14, letterSpacing: "0.06em" }}>저먼코리아(주)</p>
            <p style={{ fontSize: 12, color: "var(--text-dim)", lineHeight: 1.9 }}>
              경기도 화성시 남양읍 화성로 1444-12<br />
              031-366-8808 · contact@germankorea.co.kr
            </p>
          </div>
          <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", letterSpacing: "0.1em", marginBottom: 12 }}>SERVICES</p>
              {["국내 실차시험", "해외 실차시험", "기술시험 (FCA·ADAS)", "기술교육", "자기인증"].map((s) => (
                <a key={s} href="#services" style={{ display: "block", fontSize: 12, color: "var(--text-dim)", marginBottom: 8, transition: "color 0.2s" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
                >{s}</a>
              ))}
            </div>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", letterSpacing: "0.1em", marginBottom: 12 }}>CONTACT</p>
              <p style={{ fontSize: 12, color: "var(--text-dim)", lineHeight: 1.9 }}>
                Tel: 031-366-8808<br />
                Email: contact@germankorea.co.kr
              </p>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 20 }}>
          <p style={{ fontSize: 11, color: "var(--text-dim)" }}>© 2026 German Korea Co., Ltd. All Rights Reserved.</p>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          footer { padding: 36px 20px 28px !important; }
        }
      `}</style>
    </footer>
  );
}
