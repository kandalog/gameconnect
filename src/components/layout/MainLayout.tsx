import React from "react";

type Props = {
  children: React.ReactNode;
};
export const MainLayout = ({ children }: Props) => {
  return (
    <div className="px-4 max-w-[1200px] mx-auto">
      <div className="container mx-auto flex">
        <div className="min-w-0 flex-1 break-words">{children}</div>
        <div className="w-[200px]">PR</div>
      </div>
    </div>
  );
};
