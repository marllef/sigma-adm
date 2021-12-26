import { HStack, useToast, VStack } from "@chakra-ui/react";
import { Cliente } from "@prisma/client";
import { FormHandles, FormProps } from "@unform/core";
import { Form } from "@unform/web";
import { useEffect, forwardRef, MutableRefObject, useState } from "react";
import { TextInput } from "../Input";
import yup from "yup";

interface Props {
  name?: string;
}

export const RegisterForm = forwardRef<FormHandles, Props>(
  (props: Props, ref) => {
    const [formRef, setFormRef] =
      useState<MutableRefObject<FormHandles> | null>(null);
    const toast = useToast();

    useEffect(() => {
      setFormRef(ref as MutableRefObject<FormHandles>);
    }, [ref]);

    async function handleSubmit(data: any, { reset }: { reset: Function }) {
      try {
        const response = await fetch("/api/database/create-cliente", {
          method: "POST",
          body: JSON.stringify(data),
        });

        if (response.ok) {
          const clienteData: Cliente = await response.json();

          toast({
            title: "Cliente Cadastrado",
            description: `O cliente ${
              clienteData.name.split(" ")[0]
            } foi cadastrado com sucesso!`,
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        } else {
          const error = await response.json();
          if (error?.type && error.code === "P2002") {
            throw new Error(`${error.type} inválido!`);
          } else {
            throw new Error(error.message);
          }
        }
      } catch (err: any) {
        toast({
          title: "Falha Ao Cadastrar Cliente.",
          description: err?.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        console.log(err);
      }
      reset();
    }

    return (
      <Form ref={formRef} onSubmit={handleSubmit} {...props}>
        <VStack>
          <TextInput required name="name" placeholder="Nome completo" />
          <HStack>
            <TextInput required name="cpf" placeholder="CPF" />
            <TextInput required name="tel" placeholder="Telefone" />
          </HStack>
          <TextInput required name="location" placeholder="Cidade" />
        </VStack>
      </Form>
    );
  }
);
