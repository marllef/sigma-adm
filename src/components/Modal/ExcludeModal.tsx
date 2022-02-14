import { useDisclosure, useToast } from "@chakra-ui/react";
import { Button } from "../Button";
import { ActionButton } from "../Button/ActionButton";
import { BasicModal } from "./BasicModal";

interface Props {
  id: number;
  name: string;
}

export const ExcludeAction = ({ id, name }: Props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const toast = useToast();

  async function handleDelete() {
    const response = await fetch(`/api/database/clientes/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      toast({
        title: "Cliente Deletado Com Sucesso!",
        status: "success",
        position: "bottom-right",
        isClosable: true,
        duration: 5000,
      });
    } else {
      toast({
        title: "Erro ao Deletar Cadastro!",
        description: response.statusText,
        status: "error",
        position: "bottom-right",
        isClosable: true,
        duration: 3000,
      });
    }
    onClose();
  }

  return (
    <BasicModal
      isOpen={isOpen}
      title="Exluir Cadastro"
      onClose={onClose}
      footer={[
        <Button key={Math.random()} label="Cancelar" onClick={onClose} />,
        <Button
          key={Math.random()}
          variant="red"
          label="Deletar"
          onClick={handleDelete}
        />,
      ]}
      activator={[
        <ActionButton
          key={Math.random()}
          label="Excluir"
          variant="red"
          onClick={onOpen}
        />,
      ]}
    >
      Deseja exluir o cadastro de {name}? Essa ação é irreversível.
    </BasicModal>
  );
};
