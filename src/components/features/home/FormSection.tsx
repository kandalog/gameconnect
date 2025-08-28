"use client";

import React from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { Card } from "@/components/base/Card";
import { BaseSelect } from "@/components/base/form/BaseSelect";
import { FormRow } from "@/components/base/form/FormRow";
import { Input } from "@/components/base/form/Input";
import { Label } from "@/components/base/form/Label";
import { TextArea } from "@/components/base/form/TextArea";
import { FormErrorMessage } from "@/components/common/FormErrorMessage";
import { Button } from "@/components/ui/button";

const displayDurationOptions = [
  { label: "24時間", value: String(60 * 24) },
  { label: "3日", value: String(60 * 24 * 3) },
  { label: "1週間", value: String(60 * 24 * 7) },
  { label: "1ヶ月", value: String(60 * 24 * 30) },
];

const schema = zod.object({
  discordId: zod.string().min(1, { message: "必須項目です" }),
  displayDuration: zod.string().min(1, { message: "必須項目です" }),
  content: zod.string().min(1, { message: "必須項目です" }),
});

type FormData = zod.infer<typeof schema>;

export const FormSection = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema), // 読み込む
    defaultValues: {
      discordId: "",
      displayDuration: "",
      content: "",
    },
  });

  const onSubmit = (formData: FormData) => {
    // リクエストを投げる
    // 遷移する
  };

  return (
    <div className="mt-10">
      <Card>
        <h2 className="font-bold text-[20px]">運命のトリガー フレンドを募集</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormRow>
            <Label>Discord ID</Label>
            <Input {...register("discordId")} placeholder="例: GameMate#1234" />
            <FormErrorMessage message={errors.discordId?.message} />
          </FormRow>
          <FormRow>
            <Label>表示期間</Label>
            {/* ライブラリなのでControllerで制御 */}
            <Controller
              name="displayDuration"
              control={control}
              render={({ field }) => (
                <BaseSelect
                  options={displayDurationOptions}
                  value={field.value}
                  name={field.name}
                  onChange={field.onChange}
                />
              )}
            />
            <FormErrorMessage message={errors.displayDuration?.message} />
          </FormRow>
          <FormRow>
            <Label>募集内容</Label>
            <TextArea
              {...register("content")}
              placeholder="一緒に楽しく遊べる方、気軽にVCできる方を募集中です！"
            />
            <FormErrorMessage message={errors.content?.message} className="mt-0" />
          </FormRow>
          <Button type="submit" className="w-full mt-6 cursor-pointer">
            投稿する
          </Button>
        </form>
      </Card>
    </div>
  );
};
