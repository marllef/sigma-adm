import { Badge, Tag } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";
import { MdTerrain as IconError } from "react-icons/md";
import { IconType } from "react-icons";

interface Props {
  href?: string;
  title?: string;
  Icon?: IconType;
}

export const NavItem = ({
  href = "#",
  title = "Dashboard",
  Icon = IconError,
}: Props) => {
  return (
    <Link href={href}>
      <div className="flex w-full text-sm font-open-sans h-10 p-5 text-gray-100 bg-slate-800 justify-start items-center select-none cursor-pointer hover:bg-slate-700">
        <Icon className="mr-3" size={18} />
        <div>{title}</div>
      </div>
    </Link>
  );
};
