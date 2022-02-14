import { ReactNode } from "react";
import { Avatar } from "~/components/Avatar";
import { EditAction } from "~/components/Modal/EditModal";
import { ExcludeAction } from "~/components/Modal/ExcludeModal";
import styles from "./ListItem.module.css";
import { ClienteWithAddress as Cliente } from "~/interfaces/Prisma";

interface ListItemData {
  data: Cliente;
  index?: number;
}

export const ListItem = ({ data, index }: ListItemData) => {
  function getBackgroundColor() {
    return index! % 2 == 0 ? styles.listItem_color : "";
  }

  return (
    <tr className={`${styles.listItem} ${getBackgroundColor()}`}>
      <td className={`${styles.item} ${styles.name}`}>
        <Avatar name={data.name} />
        {data.name}
      </td>
      <td className={styles.item}>{data.tel}</td>
      <td className={styles.item}>{data.address.city}</td>
      <td className={styles.item}>
        {new Date(data.updated_at).toLocaleDateString("pt-Br", {
          dateStyle: "medium",
        })}
      </td>

      <td className={styles.item}>
        <ExcludeAction id={data.id} name={data.name} />
        <EditAction cliente={data} />
      </td>
    </tr>
  );
};

interface ItemListProps {
  children: ReactNode;
}

export const ItemList = ({ children }: ItemListProps) => {
  return (
    <tr className={`${styles.listItem}`}>
      <div className={`${styles.item} ${styles.name}`}>{children}</div>
    </tr>
  );
};
