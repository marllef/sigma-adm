import { useDisclosure, useToast } from "@chakra-ui/react";
import { Button } from "../Button";
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
        <Button label="Cancelar" onClick={onClose} />,
        <Button
          colorScheme="red"
          label="Deletar"
          onClick={handleDelete}
        />,
      ]}
      activator={[
        <span
          className="group w-4 flex flex-col items-center text-sm mx-10 font-semibold text-red-500 hover:text-red-600 cursor-pointer"
          onClick={onOpen}
        >
          <span>Exluir</span>
        </span>,
      ]}
    >
      Deseja exluir o cadastro de {name}? Essa ação é irreversível.
    </BasicModal>
  );
};
