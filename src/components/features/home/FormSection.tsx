import React from "react";

import { Card } from "@/components/base/Card";
import { FormRow } from "@/components/base/form/FormRow";
import { Input } from "@/components/base/form/Input";
import { Label } from "@/components/base/form/Label";
import { Radio } from "@/components/base/form/Radio";
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
            <Label>性別</Label>
            <Radio icon="♂" label="男性" />
            <Radio className="ml-2" icon="♀" checkedBorderColor="red" label="女性" />
          </FormRow>
          <FormRow>
            <Label>表示期間</Label>
            <Input />
          </FormRow>
          <FormRow>
            <Label>募集内容</Label>
            <TextArea placeholder="一緒に楽しく遊べる方、気軽にVCできる方を募集中です！" />
          </FormRow>
        </form>
        <Button className="w-full mt-6">投稿する</Button>
      </Card>
    </div>
  );
};
