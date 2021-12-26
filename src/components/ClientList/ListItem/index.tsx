import { Avatar, AvatarBadge, useToast } from "@chakra-ui/react";
import { MdEdit as Edit, MdDelete as Delete } from "react-icons/md";

interface Props {
  id: number;
  name: string;
  tel: string | null;
  location: string;
  updated_at: Date;
}

export const ClientListItem = ({
  id,
  name,
  tel,
  location,
  updated_at,
  ...props
}: Props) => {
  const toast = useToast();

  function parseDate(date: Date) {
    const strDate = date.toString();

    const newDate = strDate.replace(
      /(\d\d\d\d)[-](\d\d)[-](\d\d)[T](\d\d)[:](\d\d)[:]\S{0,}/g,
      "$3/$2/$1 $4:$5"
    );

    return newDate;
  }

  async function handleDelete() {
    const response = await fetch("/api/database/delete-cliente", {
      body: JSON.stringify({
        id: id,
      }),
      method: "POST",
    });

    if (response.ok) {
      toast({
        title: "Cliente Deletado Com Sucesso!",
        status: "success",
        position: "bottom-right",
        isClosable: true,
        duration: 5000,
      });
    }
  }

  return (
    <>
      <div className="flex flex-row  justify-between " {...props}>
        <div className="flex items-center text-sm">
          <div className="flex items-center w-72 truncate font-semibold">
            <Avatar className="mr-2 select-none" name={name} size="sm" />

            {name}
          </div>
          <div className="w-44 truncate text-gray-500">{tel}</div>
          <div className="w-44 truncate text-gray-500">{location}</div>
          <div className="w-32 truncate text-gray-500">
            {parseDate(updated_at)}
          </div>
        </div>
        <div className="flex w-72 mx-4 items-center justify-center">
          <span className="group w-4 flex flex-row items-center text-sm ml-36 font-semibold text-sky-500 hover:text-sky-600 cursor-pointer">
            <span className="">Editar</span>
          </span>
          <span
            className="group w-4 flex flex-col items-center text-sm mx-10 font-semibold text-red-500 hover:text-red-600 cursor-pointer"
            onClick={handleDelete}
          >
            <span>Exluir</span>
          </span>
        </div>
      </div>
    </>
  );
};
