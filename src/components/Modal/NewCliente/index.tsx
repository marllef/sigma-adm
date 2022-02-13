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
import { ClienteWithAddress as Cliente } from "~/interfaces/Prisma";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { useRef, useState } from "react";
import { Button } from "~/components/Button";
import { TextInput, InputMask } from "~/components/Form/Input";
import { validate } from "~/utils/validation";
import { ValidationError } from "yup";

export const AddCliente = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [tabIndex, setTabIndex] = useState(0);
  const formRef = useRef<FormHandles>(null);

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

  function handleSubmit() {
    if (tabIndex === 1) {
      formRef.current?.submitForm();
    } else {
      setTabIndex((value) => value + 1);
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

  async function onSubmit(data: Cliente, { reset }: { reset: Function }) {
    try {
      const validatedData = await validate.cliente(data);

      const response = await fetch("/api/database/clientes", {
        method: "POST",
        body: JSON.stringify(validatedData),
      });

      if (response.ok) {
        success({
          description: `Cliente cadastrado com exito!`,
        });

        handleClose();
      }
    } catch (err: any) {
      const validationErrors: any = {};

      console.log(err);
      if (err instanceof ValidationError) {
        error({
          title: err.name,
          description: "Os campos indicados são obrigatórios.",
        });

        err.inner.forEach((mError) => {
          const { path } = mError;
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
      <Modal closeOnEsc={false} isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />

        <ModalContent>
          <ModalCloseButton />

          <ModalBody>
            <Form ref={formRef} onSubmit={onSubmit}>
              <Tabs variant={"enclosed"} index={tabIndex}>
                <TabList>
                  <Tab onClick={() => setTabIndex(0)}>Identificação</Tab>
                  <Tab onClick={() => setTabIndex(1)}>Endereço</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
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
                        name="email"
                        label="E-mail"
                        type={"email"}
                        placeholder="Informe o e-mail"
                      />
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

                      <HStack>
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

                      <HStack>
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
