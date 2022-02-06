import styles from "./clientes.module.css";
import { Spacer, useDisclosure, VStack } from "@chakra-ui/react";
import { FormHandles } from "@unform/core";
import type { NextPage } from "next";
import { ListView } from "~/components/ListView";

import { SearchBar } from "../../components/SearchBar";
import { AddCliente } from "~/components/Modal/NewCliente";

const Clientes: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.paperBody}>
        <div className={styles.paperHeader}>
          <SearchBar />
          <AddCliente />
        </div>

        <ListView />
      </div>
    </div>
  );
};

export default Clientes;
