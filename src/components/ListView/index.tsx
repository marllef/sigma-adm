import { Spacer } from "@chakra-ui/react";
import { Cliente } from "@prisma/client";
import { useEffect, useState } from "react";
import { useFetchClientes } from "~/utils/fetcher";
import { Pagination } from "../Pagination";
import { ListHead } from "./ListHead";
import { ListItem } from "./ListItem";
import styles from "./ListView.module.css";

export const ListView = () => {
  const { data, error } = useFetchClientes("api/database/get-clientes");
  const [itens, setItems] = useState<Cliente[]>([]);
  const [itensPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (data?.length) {
      const indexOfLastItem = currentPage * itensPerPage;
      const indexOfFirstItem = indexOfLastItem - itensPerPage;
      setItems(data.slice(indexOfFirstItem, indexOfLastItem));
    }
  }, [data, currentPage]);

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
        <div className={styles.listFooter}>
          <Pagination
            count={itensPerPage}
            totalItems={data?.length!}
            currentPage={currentPage}
            paginate={(page) => setCurrentPage(page)}
          />
        </div>
      </>
    );
  }
};
