import styles from "./ListHead.module.css";

interface ListHeadProps {
  colsName: string[];
  spacing?: string;
}

export const ListHead = ({ colsName, spacing }: ListHeadProps) => {
  return (
    <>
      <tr className={styles.head}>
        {colsName.map((item) => (
          <th
            key={item}
            scope="col"
            className={`${styles.item} ${spacing || styles.spacing}`}
          >
            {item}
          </th>
        ))}
      </tr>
    </>
  );
};
