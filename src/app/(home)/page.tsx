import { FormSection } from "@/components/features/home/FormSection";
import { FriendRequestList } from "@/components/features/home/FriendRequestList";
import { fetchFriendRequest } from "@/lib/api/fateFriendRequest";

import { Pagination } from "../../components/base/Pagination";

type Props = {
  searchParams: Promise<{ page?: string }>;
};

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const page = Number(params.page) || 1;

  console.log("hello page.tsx. the page number", page);

  const data = await fetchFriendRequest(page);

  return (
    <>
      <FormSection />
      <FriendRequestList friendRequests={data} />
      <Pagination currentPage={page} totalPages={3} />
    </>
  );
}
