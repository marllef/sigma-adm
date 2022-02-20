import { ReactNode, useCallback, useEffect } from "react";
import { Avatar } from "~/components/Avatar";
import { EditAction } from "~/components/Modal/EditModal";
import { ExcludeAction } from "~/components/Modal/ExcludeModal";
import styles from "./BudgetItem.module.css";
import { ClienteWithAddress as Cliente } from "~/interfaces/Prisma";

interface ListItemData {
  order: any;
  index?: number;
  keys?: string[];
}

export const BudgetItem = ({ order, index }: ListItemData) => {
  const getBackgroundColor = useCallback(() => {
    return index! % 2 == 0 ? styles.listItem_color : "";
  }, [index]);

  return (
    <tr className={`${styles.listItem} ${getBackgroundColor()}`}>
      <td className={styles.item}>#{order.id}</td>
      <td className={styles.item}>{order.name}</td>
      <td className={styles.item}>{order.status}</td>
      <td className={styles.item}>{order.updated_at}</td>
    </tr>
  );
};
