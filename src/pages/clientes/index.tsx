import styles from "./clientes.module.css";
import { useDisclosure } from "@chakra-ui/react";
import { FormHandles } from "@unform/core";
import type { NextPage } from "next";
import { useRef } from "react";
import { ListView } from "~/components/ListView";
import { Button } from "../../components/Button";
import { ClientList } from "../../components/ClientList";
import { RegisterForm } from "../../components/Form/RegisterClient";
import { BasicModal } from "../../components/Modal/BasicModal";
import { SearchBar } from "../../components/SearchBar";
import { AddCliente } from "~/components/Modal/NewCliente";

const Clientes: NextPage = () => {
  const formRef = useRef<FormHandles>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={styles.container}>
      <div className={styles.paperBody}>
        <div className={styles.paperHeader}>
          <SearchBar />
          <AddCliente/>
          {/*<BasicModal
            title="Novo Cliente"
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            footer={[
              <Button label="Cancelar" variant="red" />,
              <Button
                label="Salvar"
                variant="green"
                onClick={() => {
                  formRef.current?.submitForm();
                  onClose();
                }}
              />,
            ]}
          >
            <RegisterForm ref={formRef} />
          </BasicModal>*/}
        </div>

        <ListView />
      </div>
    </div>
  );
};

export default Clientes;
