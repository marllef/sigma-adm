import { Badge, Tag } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";
import { MdTerrain as IconError } from "react-icons/md";
import { IconType } from "react-icons";
import styles from "./NavItem.module.css";

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
      <div className={styles.navItem__container}>
        <Icon className="mr-3" size={18} />
        <div>{title}</div>
      </div>
    </Link>
  );
};
