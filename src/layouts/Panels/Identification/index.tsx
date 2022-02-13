import { HStack, TabPanel, VStack } from "@chakra-ui/react";
import { InputMask, TextInput } from "~/components/Form/Input";

export const IdPanel = () => {
  return (
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
  );
};
