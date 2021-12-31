import { Avatar } from "@chakra-ui/react";

import { ExcludeAction } from "../../Modal/ExcludeModal";

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
  function parseDate(date: Date) {
    const strDate = date.toString();

    const newDate = strDate.replace(
      /(\d\d\d\d)[-](\d\d)[-](\d\d)[T](\d\d)[:](\d\d)[:]\S{0,}/g,
      "$3/$2/$1 $4:$5"
    );

    return newDate;
  }

  return (
    <>
      <div className="flex flex-row justify-between " {...props}>
        <div className="flex items-center text-sm">
          <div className="flex items-center w-72 truncate pr-2 font-semibold">
            <Avatar className="select-none" name={name} size="sm" />
            <span className="truncate ml-1">{name}</span>
          </div>
          <div className="w-44 truncate pr-2 text-gray-500">{tel}</div>
          <div className="w-44 truncate pr-2 text-gray-500">{location}</div>
          <div className="w-32 truncate pr-2 text-gray-500">
            {parseDate(updated_at)}
          </div>
        </div>
        <div className="flex w-72 mx-4 items-center justify-center">
          <span className="group w-4 flex flex-row items-center text-sm ml-36 font-semibold text-sky-500 hover:text-sky-600 cursor-pointer">
            <span className="">Editar</span>
          </span>
          <ExcludeAction id={id} name={name} />
        </div>
      </div>
    </>
  );
};
