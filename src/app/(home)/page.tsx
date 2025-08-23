import { Suspense } from "react";

import { FormSection } from "@/components/features/home/FormSection";
import { FriendRequestList } from "@/components/features/home/FriendRequestList";

import { Pagination } from "../../components/base/Pagination";

type Props = {
  searchParams: Promise<{ page?: string; game?: string }>;
};

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const game = params.game || "apex";

  return (
    <>
      <FormSection />
      <Suspense key={page} fallback={<div>Loading...</div>}>
        <FriendRequestList page={page} game={game} />
      </Suspense>
      <Pagination className="mt-4" currentPage={page} totalPages={3} />
    </>
  );
}
