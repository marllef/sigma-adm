import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { MdKeyboardArrowRight as Arrow } from "react-icons/md";

interface Props {
  previous?: {
    title: string;
    href: string;
  };
  current?: {
    title: string;
    href: string;
  };
}

export const Navigator = ({
  current = {
    title: "Dashboard",
    href: "/#",
  },
}: Props) => {
  const router = useRouter();
  const { route } = router;

  return (
    <div className="flex w-full h-10 border-b p-2 px-5 text-gray-500 items-center bg-white">
      <Breadcrumb separator={<Arrow className="text-sky-500" size={18} />}>
        <BreadcrumbItem className="font-bold text-gray-700">
          <BreadcrumbLink as={Link} href="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem className="font-bold" isCurrentPage>
          <Link href={current.href}>{current?.title}</Link>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};
