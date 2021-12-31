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
  UseModalProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { Button } from "../Button";
import { TextInput } from "../Form/Input/TextInput";
import { RegisterForm } from "../Form/RegisterClient";

interface Props extends UseModalProps {
  title?: string;
  children?: ReactNode;
  footer?: ReactNode[];
  activator?: ReactNode[];
  onOpen?: { (): void };
}

export const BasicModal = ({
  title = "Modal",
  children,
  footer = [],
  activator = [],
  isOpen,
  onClose,
  onOpen,
  ...rest
}: Props) => {
  return (
    <>
      {activator?.length ? (
        activator.map((item, index) => <div key={index + "Btn"}>{item}</div>)
      ) : (
        <Button label="Cadastrar" onClick={onOpen} />
      )}

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        {...rest}
      >
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
