import { FormHandles } from "@unform/core";
import type { NextPage } from "next";
import { useRef } from "react";
import { Button } from "../components/Button";
import { ClientList } from "../components/ClientList";
import { RegisterForm } from "../components/Form/RegisterClient";
import { BasicModal } from "../components/Modal/BasicModal";
import { SearchBar } from "../components/SearchBar";

const Clientes: NextPage = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <div className="h-full p-2">
      <div className="bg-white rounded border h-full">
        <div className="flex flex-row justify-between items-center">
          <SearchBar />
          <BasicModal
            title="Novo Cliente"
            footer={[
              <Button label="Cancelar" colorScheme="button-red" />,
              <Button
                label="Salvar"
                colorScheme="button-green"
                onClick={() => {
                  formRef.current?.submitForm();
                }}
              />,
            ]}
          >
            <RegisterForm ref={formRef} />
          </BasicModal>
        </div>
        <ClientList />
      </div>
    </div>
  );
};

export default Clientes;
