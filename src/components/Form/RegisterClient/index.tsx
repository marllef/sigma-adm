import {
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { Cliente } from "@prisma/client";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { useEffect, forwardRef, MutableRefObject, useState } from "react";
import { TextInput } from "../Input";

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
        <Tabs>
          <TabList>
            <Tab>Identificaçao</Tab>
            <Tab>Dois</Tab>
            <Tab>Três</Tab>
          </TabList>
        </Tabs>

        <TabPanels>
          <TabPanel>
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
          </TabPanel>
        </TabPanels>
      </Form>
    );
  }
);
