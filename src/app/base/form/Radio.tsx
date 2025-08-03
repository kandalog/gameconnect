import React from "react";

type ColorName = "blue" | "red";
type Props = {
  label: React.ReactNode;
  className?: string;
  checkedBorderColor?: keyof typeof colorMap;
  icon?: React.ReactNode;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">;

const colorMap: Record<ColorName, string> = {
  blue: "#5865F2",
  red: "#FF4D4F",
};

export const Radio = ({ label, className, checkedBorderColor = "blue", icon, ...props }: Props) => {
  // BorderColorの計算
  let resolveBorderColor = "#5865F2";
  if (checkedBorderColor in colorMap) {
    resolveBorderColor = colorMap[checkedBorderColor as ColorName];
  }

  return (
    <label className={`relative inline-block mt-2 ${className ? className : ""}`}>
      <input
        type="radio"
        name="entry.2127910070"
        value="法人"
        className="absolute top-0 left-0 opacity-0 peer"
        {...props}
      />
      <div
        className={`
          rounded-2xl border-3 border-[#dddddd] flex items-center justify-center
          text-[#2c2a2a] h-12 w-32 text-center text-sm
          peer-checked:border-[${resolveBorderColor}]
          bg-white
          ${checkedBorderColor === "blue" ? "peer-checked:bg-[#5865F21A]" : ""}
          ${checkedBorderColor === "red" ? "peer-checked:bg-[#FF4D4F1A]" : ""}
        `}
      >
        {icon && <span className="mr-2 font-bold text-[#bbbbbb]">{icon}</span>}
        <p>{label}</p>
      </div>
    </label>
  );
};
