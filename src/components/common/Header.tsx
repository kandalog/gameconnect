import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="px-4 border">
      <div className="container mx-auto h-16 flex items-center">
        <h1 className="text-primary text-2xl font-bold">GameMate</h1>
        <nav>
          <ul className="flex text-[#4B5563]">
            <li className="ml-6">
              <Link href="/" className="text-primary">
                掲示板
              </Link>
            </li>
            <li className="ml-6">
              <Link href="/">ゲーム一覧</Link>
            </li>
            <li className="ml-6">
              <Link href="/">使い方</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
