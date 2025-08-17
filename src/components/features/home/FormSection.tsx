"use client";

import React from "react";

import { Card } from "@/components/base/Card";
import { FormRow } from "@/components/base/form/FormRow";
import { Input } from "@/components/base/form/Input";
import { Label } from "@/components/base/form/Label";
import { TextArea } from "@/components/base/form/TextArea";
import { Button } from "@/components/ui/button";

export const FormSection = () => {
  return (
    <div className="mt-10">
      <Card>
        <h2 className="font-bold text-[20px]">運命のトリガー フレンドを募集</h2>
        <form>
          <FormRow>
            <Label>Discord ID</Label>
            <Input placeholder="例: GameMate#1234" />
          </FormRow>
          <FormRow>
            <Label>表示期間</Label>
          </FormRow>
          <FormRow>
            <Label>募集内容</Label>
            <TextArea placeholder="一緒に楽しく遊べる方、気軽にVCできる方を募集中です！" />
          </FormRow>
          <Button type="submit" className="w-full mt-6">
            投稿する
          </Button>
        </form>
      </Card>
    </div>
  );
};
