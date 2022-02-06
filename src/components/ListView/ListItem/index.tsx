import { Cliente } from "@prisma/client";
import { ExcludeAction } from "~/components/Modal/ExcludeModal";
import styles from "../ListView.module.css";

interface ListItemData {
  data: Cliente;
  index?: number;
}

export const ListItem = ({ data, index }: ListItemData) => {
  function getBackgroundColor() {
    return index! % 2 == 1 ? styles.listItem_color : "";
  }

  return (
    <tr className={`${styles.listItem} ${getBackgroundColor()}`}>
      <td className={`${styles.item} ${styles.name}`}>{data.name}</td>
      <td className={styles.item}>{data.tel}</td>
      <td className={styles.item}>{data.location}</td>
      <td className={styles.item}>
        <ExcludeAction id={data.id} name={data.name} />
      </td>
    </tr>
  );
};
