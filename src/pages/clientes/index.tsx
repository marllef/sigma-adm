import styles from "./clientes.module.css";
import type { NextPage } from "next";
import { List } from "~/components/List";

import { SearchBar } from "../../components/SearchBar";
import { AddCliente } from "~/components/Modal/NewCliente";
import { useFetchClientes } from "~/utils/fetcher";
import { ListItem } from "~/components/List/ListItem";
import { useEffect, useState } from "react";
import { Item } from "~/components/List/Item";

const Clientes: NextPage = () => {
  const { data, isValidating } = useFetchClientes("api/database/clientes");
  const [search, setSearch] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.paperBody}>
        <div className={styles.paperHeader}>
          <SearchBar onSearch={(value) => setSearch(value)} />
          <AddCliente />
        </div>

        <List
          source={{
            data: data,
            keys: ["NOME", "TELEFONE", "CIDADE", "ATUALIZAÇÃO", "AÇÕES"],
          }}
          search={search}
          isLoading={isValidating}
          renderItem={(item, index) => (
            <ListItem key={item.id} index={index} data={item} />
          )}
        />
      </div>
    </div>
  );
};

export default Clientes;
