import { HStack, TabPanel, VStack } from "@chakra-ui/react";
import { InputMask, TextInput } from "~/components/Form/Input";

export const AddressPanel = () => {
  return (
    <>
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
    </>
  );
};
