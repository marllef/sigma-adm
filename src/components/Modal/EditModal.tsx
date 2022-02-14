import {
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
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
import { SelectBox } from "../Form/Select";

interface Props {
  cliente: Cliente;
}

export const EditAction = ({ cliente }: Props) => {
  const { id, ...rest } = cliente;
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [tabIndex, setTabIndex] = useState(0);
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

  function handleClose() {
    setTabIndex(0);
    onClose();
  }

  function handleCancel() {
    setTabIndex(0);
    formRef.current?.reset();
    onClose();
  }

  function handleSubmit() {
    if (tabIndex === 1) {
      formRef.current?.submitForm();
    } else {
      setTabIndex((value) => value + 1);
    }
  }

  return (
    <>
      <Button
        variant="unstyled"
        colorScheme="blue"
        label="Editar"
        onClick={onOpen}
      />
      <Modal closeOnEsc={false} isOpen={isOpen} onClose={handleClose} size="lg">
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />

          <ModalBody>
            <Form ref={formRef} onSubmit={handleEdit} initialData={{ ...rest }}>
              <Tabs variant={"enclosed"} index={tabIndex}>
                <TabList>
                  <Tab onClick={() => setTabIndex(0)}>Identificação</Tab>
                  <Tab onClick={() => setTabIndex(1)}>Endereço</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <VStack>
                      <TextInput
                        name="name"
                        label="Nome Completo"
                        placeholder="Informe o nome"
                      />
                      <HStack w="full">
                        <InputMask
                          mask="999.999.999-99"
                          name="cpf"
                          label="CPF"
                          placeholder="Informe o CPF"
                        />
                        <InputMask
                          mask="(99) 99999-9999"
                          name="tel"
                          label="Telefone"
                          placeholder="Informe o telefone"
                        />
                      </HStack>
                      <HStack w={"full"}>
                        <TextInput
                          name="email"
                          label="E-mail"
                          type="email"
                          placeholder="Informe o e-mail"
                        />
                        <SelectBox
                          name="gender"
                          label="Gênero"
                          placeholder="Selecione"
                        />
                      </HStack>
                    </VStack>
                  </TabPanel>

                  <TabPanel>
                    <VStack>
                      <TextInput
                        required
                        name="address.street"
                        label="Logradouro"
                        placeholder="Informe o logradouro"
                      />

                      <HStack w="full">
                        <TextInput
                          required
                          name="address.number"
                          type={"number"}
                          label="Número"
                          placeholder="Número"
                        />
                        <TextInput
                          required
                          name="address.district"
                          label="Bairro"
                          placeholder="Bairro"
                        />
                        <InputMask
                          mask="99999-999"
                          required
                          name="address.postalcode"
                          label="CEP"
                          placeholder="CEP"
                        />
                      </HStack>

                      <HStack w="full">
                        <TextInput
                          required
                          name="address.city"
                          label="Cidade"
                          placeholder="Cidade"
                        />

                        <TextInput
                          required
                          name="address.state"
                          label="Estado"
                          placeholder="Estado"
                        />
                      </HStack>

                      <TextInput
                        required
                        name="address.complement"
                        label="Complemento"
                        placeholder="Complemento"
                      />
                    </VStack>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button variant="red" onClick={handleCancel}>
              Cancelar
            </Button>
            <Button variant="green" onClick={handleSubmit}>
              {tabIndex === 0 ? "Próximo" : "Salvar"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
