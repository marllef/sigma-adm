import { Cliente } from "@prisma/client";
import { useEffect, useState } from "react";
import { useFetchClientes } from "~/utils/fetcher";
import { ListHead } from "./ListHead";
import { ListItem } from "./ListItem";
import styles from "./ListView.module.css";

export const ListView = () => {
  const { data, error } = useFetchClientes("api/database/get-clientes");
  const [itens, setItems] = useState<Cliente[]>([]);

  useEffect(() => {
    console.log(data);
    if (data?.length) {
      setItems(data);
    }
  }, [data]);

  function mapItens(item: Cliente, index: number) {
    return <ListItem key={item.id} index={index} data={item} />;
  }

  if (error) {
    return <h1>{error}</h1>;
  } else {
    return (
      <>
        <table className={styles.listTable}>
          <thead className={styles.listTHead}>
            <ListHead />
          </thead>
          <tbody className={styles.listTBody}>{itens?.map(mapItens)}</tbody>
        </table>
      </>
    );
  }
};
