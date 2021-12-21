import { IconButton as IcButton, Button as Btn } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export const SearchButton = () => {
  return (
    <div className="bg-sky-500 rounded hover:bg-sky-600">
      <IcButton
        aria-label="Search database"
        variant="solid"
        colorScheme=""
        size="sm"
        icon={<FaSearch />}
      />
    </div>
  );
};
