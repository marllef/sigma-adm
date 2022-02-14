import { Badge, Tag } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode, useEffect } from "react";
import { MdTerrain as IconError } from "react-icons/md";
import { IconType } from "react-icons";
import styles from "./NavItem.module.css";
import { useRouter } from "next/router";

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
  const router = useRouter();

  function isActive() {
    if (router.asPath === href) {
      return true;
    }
    return false;
  }

  return (
    <Link href={href} passHref>
      <div
        className={`${styles.navItem__container} ${
          isActive() && styles["active"]
        }`}
      >
        <Icon className="mr-3" size={18} />
        <div>{title}</div>
      </div>
    </Link>
  );
};
