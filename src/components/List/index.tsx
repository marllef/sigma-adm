import { Skeleton, Spacer, Spinner, useToast } from "@chakra-ui/react";
import { Cliente } from "@prisma/client";
import { useEffect, useState } from "react";
import { TypeOf } from "yup";
import { useFetchClientes } from "~/utils/fetcher";
import { Loading } from "../Loading";
import { Pagination } from "../Pagination";
import { EmptyList } from "./EmptyList";
import { Item } from "./Item";
import { ListHead } from "./ListHead";
import { ItemList, ListItem } from "./ListItem";
import styles from "./ListView.module.css";

export interface Source {
  data: any[];
  keys: string[];
}
export interface ListProps {
  source: Source;
  isLoading?: boolean;
  search?: string;
  sort?: { (a: any, b: any): number };
  filter?: { (item: any): boolean };
  isEmpty?: boolean;
  renderItem?: { (item: any, index: number): JSX.Element };
}

export const List = ({
  renderItem,
  source,
  search = "",
  sort = (a, b) => (a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0),
  filter = (item: Cliente) =>
    item.name?.toLowerCase().includes(search.toLocaleLowerCase()),
}: ListProps) => {
  const [data, setData] = useState(source.data);
  const [itens, setItems] = useState<any[]>([]);
  const [itensPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (source.data?.length) {
      setData(source.data.sort(sort).filter(filter));
    }
  }, [source]);

  useEffect(() => {
    if (data?.length) {
      const indexOfLastItem = currentPage * itensPerPage;
      const indexOfFirstItem = indexOfLastItem - itensPerPage;
      setItems(data.slice(indexOfFirstItem, indexOfLastItem));
    }
  }, [data, currentPage]);

  function render(item: any, index: number) {
    if (typeof renderItem !== "undefined") {
      return renderItem(item, index);
    }
    return <Item key={item} keys={source?.keys} data={item} />;
  }

  return (
    <>
      <table className={`${styles.listTable}`}>
        <thead className={styles.listTHead}>
          <ListHead colsName={source.keys} />
        </thead>

        <tbody className={styles.listTBody}>
          {!data?.length ? <EmptyList /> : (itens || []).map(render)}
        </tbody>
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
};
