import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "夏树 · Notes from the woods",
    template: "%s · 夏树",
  },
  description: "夏树的个人博客：工程笔记、AIGC 实践与持续建造。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${display.variable} ${sans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
