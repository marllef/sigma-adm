import { HStack, useDisclosure, useToast, VStack } from "@chakra-ui/react";
import { Cliente } from "@prisma/client";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { useCallback, useEffect, useRef, useState } from "react";
import { ClienteDataTypes } from "~/interfaces/DataCliente";
import { Button } from "~/components/Button";
import { ActionButton } from "../Button/ActionButton";
import { TextInput } from "../Form/Input";
import { BasicModal } from "./BasicModal";

interface Props {
  cliente: ClienteDataTypes;
}

export const EditAction = ({ cliente }: Props) => {
  const { id, ...rest } = cliente;
  const { isOpen, onClose, onOpen } = useDisclosure();
  const formRef = useRef<FormHandles>(null);
  const toast = useToast();

  async function handleEdit(data: any) {
    const response = await fetch(`/api/database/clientes/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id,
        ...data,
      }),
    });

    if (response.ok) {
      toast({
        title: "Cadastro Atualizado Com Sucesso!",
        status: "success",
        position: "bottom-right",
        isClosable: true,
        duration: 5000,
      });
    } else {
      toast({
        title: "Erro ao Atualizar Cadastro!",
        description: response.statusText,
        status: "error",
        position: "bottom-right",
        isClosable: true,
        duration: 3000,
      });
    }
    onClose();
  }

  const submit = useCallback(() => {
    formRef.current?.submitForm();
  }, [formRef]);

  return (
    <BasicModal
      isOpen={isOpen}
      title="Editar Cadastro"
      onClose={onClose}
      footer={[
        <Button label="Cancelar" variant="red" onClick={onClose} />,
        <Button label="Salvar" variant="green" onClick={submit} />,
      ]}
      activator={[<ActionButton label="Editar" onClick={onOpen} />]}
    >
      <Form ref={formRef} onSubmit={handleEdit} initialData={{ ...rest }}>
        <VStack>
          <TextInput
            required
            name="name"
            label="Nome Completo"
            placeholder="Informe o nome..."
          />
          <HStack>
            <TextInput
              required
              disabled
              name="cpf"
              label="CPF"
              placeholder="Informe o CPF..."
            />
            <TextInput
              required
              type="number"
              name="tel"
              label="Telefone"
              placeholder="Informe o telefone..."
            />
          </HStack>
          <TextInput
            required
            name="location"
            label="Cidade"
            placeholder="Informe a cidade..."
          />
        </VStack>
      </Form>
    </BasicModal>
  );
};
