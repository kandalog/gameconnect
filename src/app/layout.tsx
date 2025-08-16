import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Noto_Sans_JP } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";

import "../stylesheets/reset.css";
import "../stylesheets/globals.css";
import "../stylesheets/custom.css";

const notoSansJp = Noto_Sans_JP({
  weight: ["400", "700"],
  display: "swap",
  preload: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Game Connect",
  description: "ゲーム仲間を探せるサイトです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.className} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
