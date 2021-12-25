import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ModalProps,
} from "@chakra-ui/react";
import { Button } from "../Button";
import { TextInput } from "../Form/Input/TextInput";
import { RegisterClientForm } from "../Form/RegisterClientForm";

interface Props {
  title?: string;
}

export const BasicModal = ({ title = "Modal" }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button label="Cadastrar" onClick={onOpen} />
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RegisterClientForm />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="button-red" label="Cancelar" onClick={onClose} />

            <Button label="Salvar" colorScheme="button-green" />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
