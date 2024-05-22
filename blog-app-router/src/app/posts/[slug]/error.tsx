"use client";

import { Button } from "@/components/Button";
import { PageMain } from "@/components/PageMain";
import { PageTitle } from "@/components/PageTitle";

export default function ErrorDelete({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <PageMain>
      <PageTitle>削除に失敗しました。</PageTitle>
      <Button onClick={() => reset()}>リセット</Button>
    </PageMain>
  );
}
