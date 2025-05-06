import type { Metadata } from "next";
import "./globals.css";
import { Gaegu, Nanum_Pen_Script } from "next/font/google";

// 폰트 설정
const gaegu = Gaegu({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gaegu", // 여기서 CSS 변수를 등록합니다
});

const nanumPenScript = Nanum_Pen_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nanum-pen", // 여기서 CSS 변수를 등록합니다
});
export const metadata: Metadata = {
  title: "시험판다",
  description: "똑똑한 시험 관리 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gaegu.variable} ${nanumPenScript.variable}`}>
      <body>{children}</body>
    </html>
  );
}
