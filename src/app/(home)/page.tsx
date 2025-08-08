import { FormSection } from "@/components/features/home/FormSection";
import { FriendRequestList } from "@/components/features/home/FriendRequestList";

import { Pagination } from "../../components/base/Pagination";

type Props = {
  searchParams: {
    page?: string;
  };
};

export default async function Home({ searchParams }: Props) {
  const page = Number(searchParams.page) || 1;

  return (
    <>
      <FormSection />
      <FriendRequestList />
      <Pagination currentPage={page} totalPages={3} />
    </>
  );
}
