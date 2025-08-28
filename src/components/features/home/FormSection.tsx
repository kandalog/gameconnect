"use client";

import React, { useState } from "react";

import { Card } from "@/components/base/Card";
import { BaseSelect } from "@/components/base/form/BaseSelect";
import { FormRow } from "@/components/base/form/FormRow";
import { Input } from "@/components/base/form/Input";
import { Label } from "@/components/base/form/Label";
import { TextArea } from "@/components/base/form/TextArea";
import { Button } from "@/components/ui/button";
import { FormData } from "@/types/home";

const displayDurationOptions = [
  { label: "24時間", value: String(60 * 24) },
  { label: "3日", value: String(60 * 24 * 3) },
  { label: "1週間", value: String(60 * 24 * 7) },
  { label: "1ヶ月", value: String(60 * 24 * 30) },
];

export const FormSection = () => {
  // hooks
  const [formData, setFormData] = useState<FormData>({
    discordId: "",
    displayDuration: "",
    content: "",
  });

  // handlers
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="mt-10">
      <Card>
        <h2 className="font-bold text-[20px]">運命のトリガー フレンドを募集</h2>
        <form>
          <FormRow>
            <Label>Discord ID</Label>
            <Input
              value={formData.discordId}
              name="discordId"
              onChange={handleChange}
              placeholder="例: GameMate#1234"
            />
          </FormRow>
          <FormRow>
            <Label>表示期間</Label>
            <BaseSelect
              options={displayDurationOptions}
              value={formData.displayDuration}
              name="displayDuration"
              onChange={handleChange}
            />
          </FormRow>
          <FormRow>
            <Label>募集内容</Label>
            <TextArea
              value={formData.content}
              name="content"
              onChange={handleChange}
              placeholder="一緒に楽しく遊べる方、気軽にVCできる方を募集中です！"
            />
          </FormRow>
          <Button type="submit" className="w-full mt-6">
            投稿する
          </Button>
        </form>
      </Card>
    </div>
  );
};
