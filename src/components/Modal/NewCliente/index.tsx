import {
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { Cliente } from "@prisma/client";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { useRef } from "react";
import { Button } from "~/components/Button";
import { TextInput, InputMask } from "~/components/Form/Input";
import { validate } from "~/utils/validation";
import { ValidationError } from "yup";

export const AddCliente = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const success = useToast({
    title: "Sucesso ao realizar cadastro!",
    status: "success",
    duration: 4000,
    isClosable: true,
    position: "bottom-right",
  });

  const error = useToast({
    title: "Erro ao realizar cadastro.",
    status: "error",
    duration: 4000,
    isClosable: true,
    position: "bottom-right",
  });

  const formRef = useRef<FormHandles>(null);

  function handleSubmit() {
    formRef.current?.submitForm();
  }

  async function onSubmit(data: Cliente, { reset }: { reset: Function }) {
    try {
      const validatedData = await validate.cliente(data);

      const response = await fetch("/api/database/create-cliente", {
        method: "POST",
        body: JSON.stringify(validatedData),
      });

      if (response.ok) {
        success({
          description: `Cliente cadastrado com exito!`,
        });

        onClose();
      }
    } catch (err: any) {
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
    reset();
  }

  return (
    <>
      <Button label="Adicionar" onClick={onOpen} />
      <Modal closeOnEsc isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Adicionar Cliente</ModalHeader>
          <ModalBody>
            <Form ref={formRef} onSubmit={onSubmit}>
              <VStack>
                <TextInput
                  required
                  name="name"
                  label="Nome Completo"
                  placeholder="Informe o nome"
                />
                <HStack>
                  <InputMask
                    mask="999.999.999-99"
                    required
                    name="cpf"
                    label="CPF"
                    placeholder="Informe o CPF"
                  />
                  <InputMask
                    mask="(99) 99999-9999"
                    required
                    name="tel"
                    label="Telefone"
                    placeholder="Informe o telefone"
                  />
                </HStack>
                <TextInput
                  required
                  name="location"
                  label="Cidade"
                  placeholder="Informe a cidade"
                />
              </VStack>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button variant="red">Cancelar</Button>
            <Button variant="green" onClick={handleSubmit}>
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
