import styles from "~/components/List/list.module.css";

interface ListItemProps<T> {
  item: T;
}

export const ListItem = (props: ListItemProps<any>) => {
  const { item } = props;
  

  return (
    <>
      <li className={styles.listItem}>{item}</li>
    </>
  );
};
