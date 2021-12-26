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
import { ReactNode } from "react";
import { Button } from "../Button";
import { TextInput } from "../Form/Input/TextInput";
import { RegisterForm } from "../Form/RegisterClient";

interface Props {
  title?: string;
  children?: ReactNode;
  footer?: ReactNode[];
}

export const BasicModal = ({
  title = "Modal",
  children,
  footer = [],
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button label="Cadastrar" onClick={onOpen} />
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            {footer.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
