import { ReactNode, useCallback, useEffect } from "react";
import { Avatar } from "~/components/Avatar";
import { EditAction } from "~/components/Modal/EditModal";
import { ExcludeAction } from "~/components/Modal/ExcludeModal";
import styles from "./Item.module.css";
import { ClienteWithAddress as Cliente } from "~/interfaces/Prisma";

interface ListItemData {
  data: any;
  index?: number;
  keys?: string[];
}

export const Item = ({ data, index, keys = ["name", ""] }: ListItemData) => {
  const getBackgroundColor = useCallback(() => {
    return index! % 2 == 0 ? styles.listItem_color : "";
  }, [index]);

  useEffect(() => {}, []);

  return (
    <tr className={`${styles.listItem} ${getBackgroundColor()}`}>
      {keys?.map((key: string) => (
        <td key={data[key]} className={styles.item}>
          {data[key]}
        </td>
      ))}
    </tr>
  );
};
