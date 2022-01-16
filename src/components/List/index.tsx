import { ButtonHTMLAttributes } from "react";
import styles from "./list.module.css";
import { ListHeader } from "./ListHeader";
import { ListItem } from "./ListItem";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: "red" | "blue" | "green" | "unstyled";
}

export const List = ({ ...rest }: Props) => {
  const lista: number[] = [];

  for (let i = 0; i < 10; i++) {
    lista.push(0);
  }

  function listagem(item: any, index: number) {
    return <ListItem key={index} item={item} />;
  }

  return (
    <>
      <div className={styles.list}>
        <ul className={styles.listBody}>
          <ListHeader />
          {lista.map(listagem)}
          <li className="bg-gray-500">Footer</li>
        </ul>
      </div>
    </>
  );
};
