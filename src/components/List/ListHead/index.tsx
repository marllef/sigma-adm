import styles from "./ListHead.module.css";

interface ListHeadProps {
  colsName: string[];
}

export const ListHead = ({ colsName }: ListHeadProps) => {
  return (
    <>
      <tr className={styles.head}>
        {colsName.map((item) => (
          <th key={item} scope="col" className={styles.headItem}>
            {item}
          </th>
        ))}
      </tr>
    </>
  );
};
