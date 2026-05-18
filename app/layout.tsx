import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://germankorea.com"),
  title: "저먼코리아 | 자동차 시험·평가 전문기업",
  description: "국내·해외 실차시험, FCA/ADAS/자율주행 기술시험, 기술교육, 자기인증. 독일 기반 자동차 시험·평가 전문기업 저먼코리아(주). 031-366-8808",
  openGraph: {
    title: "저먼코리아 | 자동차 시험·평가 전문기업",
    description: "국내·해외 실차시험, FCA/ADAS/자율주행 기술시험, 기술교육, 자기인증. 031-366-8808",
    url: "https://germankorea.com",
    siteName: "저먼코리아",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
