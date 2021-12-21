import { Input } from "@chakra-ui/react";
import { SearchButton } from "./Button";

export const SearchBar = () => {
  return (
    <div className=" flex flex-row w-64 p-2 ">
      <div className="flex bg-gray-50 w-full rounded border  py-1 px-2">
        <Input variant={"unstyled"} size={"sm"} placeholder="Pesquisar... " />
      </div>
      <div className="ml-1">
        <SearchButton />
      </div>
    </div>
  );
};
