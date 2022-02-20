import { ReactNode, useCallback, useEffect } from "react";
import { Avatar } from "~/components/Avatar";
import { EditAction } from "~/components/Modal/EditModal";
import { ExcludeAction } from "~/components/Modal/ExcludeModal";
import styles from "./BudgetItem.module.css";
import { toLocaleDate } from "~/utils/datetime/parser";

interface ListItemData {
  order: any;
  spacing?: string;
  index?: number;
  keys?: string[];
}

export const BudgetItem = ({ order, index, spacing }: ListItemData) => {
  const getBackgroundColor = useCallback(() => {
    return index! % 2 == 0 ? styles.listItem_color : "";
  }, [index]);

  return (
    <tr className={`${styles.listItem} ${getBackgroundColor()}`}>
      <td className={styles.item}>###############{order.id}</td>
      <td className={styles.item}>{order.name}</td>
      <td className={styles.item}>{order.status}</td>
      <td className={styles.item}>{toLocaleDate(order.updated_at)}</td>
      <td className={styles.item}>{}</td>
    </tr>
  );
};
