import {
  Avatar as Avt,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverFooter,
  PopoverBody,
  Tag,
} from "@chakra-ui/react";
import { MdArrowDropDown as DropIcon } from "react-icons/md";

interface Props {
  name?: string;
  size?: string;
}

export const AvatarPopover = ({
  name = "Marllef",
  size = "xs",
  ...props
}: Props) => {
  return (
    <Popover>
      <PopoverTrigger>
        <span className="flex justify-between items-center cursor-pointer mx-2 bg-slate-100 p-1 rounded-full">
          <Avt
            className="select-none mr-2 rounded"
            size={size}
            name={name.toUpperCase()}
            {...props}
          />
          <span className="flex text-slate-500 flex-row justify-between items-center select-none">
            <span className="text-xs">{name.split(" ")[0]}</span>
            <DropIcon className="ml-1" size={15} />
          </span>
        </span>
      </PopoverTrigger>

      <PopoverContent width={160}>
        <PopoverBody>Deseja sair?</PopoverBody>
        <PopoverFooter>Sair</PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};
