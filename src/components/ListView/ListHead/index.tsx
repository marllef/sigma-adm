import styles from "../ListView.module.css";

export const ListHead = () => {
  return (
    <>
      <tr className={styles.head}>
        <th scope="col" className={styles.headItem}>
          NOME
        </th>
        <th scope="col" className={styles.headItem}>
          TELEFONE
        </th>
        <th scope="col" className={styles.headItem}>
          CIDADE
        </th>
        <th className={styles.headItem}>AÇÕES</th>
      </tr>
    </>
  );
};
