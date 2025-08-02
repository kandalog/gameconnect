import type { Metadata } from "next";

import { Header } from "@/components/common/Header";
import { MainLayout } from "@/components/layout/MainLayout";

export const metadata: Metadata = {
  title: "GameMate | 運命のトリガー",
  description: "運命のトリガーを一緒にプレイする仲間を募集しよう!",
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <MainLayout>{children}</MainLayout>
    </div>
  );
}
