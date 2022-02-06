import { HStack, useDisclosure, useToast, VStack } from "@chakra-ui/react";
import { Cliente } from "@prisma/client";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { useCallback, useEffect, useRef, useState } from "react";
import { ClienteDataTypes } from "~/interfaces/DataCliente";
import { Button } from "~/components/Button";
import { ActionButton } from "../Button/ActionButton";
import { InputMask, TextInput } from "../Form/Input";
import { BasicModal } from "./BasicModal";
import { ValidationError } from "yup";
import { validate } from "~/utils/validation";

interface Props {
  cliente: Cliente;
}

export const EditAction = ({ cliente }: Props) => {
  const { id, ...rest } = cliente;
  const { isOpen, onClose, onOpen } = useDisclosure();
  const formRef = useRef<FormHandles>(null);

  const error = useToast({
    title: "Erro ao atualizar cadastro.",
    status: "error",
    variant: "solid",
    position: "bottom-right",
    isClosable: true,
    duration: 3000,
  });

  const success = useToast({
    title: "Cadastro atualizado!",
    status: "success",
    variant: "solid",
    position: "bottom-right",
    isClosable: true,
    duration: 3000,
  });

  async function handleEdit(data: any) {
    try {
      const validatedCliente = await validate.cliente(data);
      const response = await fetch(`/api/database/clientes/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          id,
          ...validatedCliente,
        }),
      });

      if (response.ok) {
        success();
      } else {
        error({
          description: response.statusText,
        });
      }
      onClose();
    } catch (err) {
      const validationErrors: any = {};

      if (err instanceof ValidationError) {
        err.inner.forEach((mError) => {
          const { path } = mError;
          error({
            title: mError.name,
            description: mError.message,
          });
          validationErrors[path!] = mError.message;
        });

        formRef.current!.setErrors(validationErrors);
      }
    }
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
            <InputMask
              mask={"999.999.999-99"}
              required
              disabled
              name="cpf"
              label="CPF"
              placeholder="Informe o CPF..."
            />
            <InputMask
              mask="(99) 99999-9999"
              required
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
