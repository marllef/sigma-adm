import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
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
  return (
    <div className="flex w-full h-10 border-b fixed p-2 px-5 text-gray-500 items-center bg-white">
      <Breadcrumb separator={<Arrow className="text-sky-500" size={18} />}>
        <BreadcrumbItem className="font-bold text-gray-700">
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink className="font-bold" href="#">
            {current.title}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};
