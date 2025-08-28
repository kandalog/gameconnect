import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  options: { label: string; value: string }[];
  className?: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function BaseSelect({ options, className, value, name, onChange }: Props) {
  const handleValueChange = (newValue: string) => {
    // 共通更新関数を使いたいので疑似的なChangeEventオブジェクトを作成
    const syntheticEvent = {
      target: {
        name,
        value: newValue,
      },
      currentTarget: {
        name,
        value: newValue,
      },
    } as React.ChangeEvent<HTMLSelectElement>;

    onChange(syntheticEvent);
  };

  return (
    <div className={`mt-2${className ? ` ${className}` : ""}`}>
      <Select value={value} onValueChange={handleValueChange} name={name}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="--- ---" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
