import { Avatar } from "@chakra-ui/react";
import { EditAction } from "~/components/Modal/EditModal";
import { ClienteDataTypes } from "~/interfaces/DataCliente";

import { ExcludeAction } from "../../Modal/ExcludeModal";

export const ClientListItem = ({ ...props }: ClienteDataTypes) => {
  const { id, name, tel, location, updated_at } = props;

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
      <div className="flex flex-row justify-between ">
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
          <EditAction cliente={props} />
          <ExcludeAction id={id} name={name} />
        </div>
      </div>
    </>
  );
};
