import type { Metadata } from "next";
import "./globals.css";
import { Jua, Gowun_Dodum } from "next/font/google";

const jua = Jua({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jua",
  preload: true,
});

const gowunDodum = Gowun_Dodum({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gowun-dodum",
  preload: true,
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
    <html lang="ko" className={`${jua.variable} ${gowunDodum.variable}`}>
      <body>{children}</body>
    </html>
  );
}
