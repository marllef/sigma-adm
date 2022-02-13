import { IconButton as IcButton, Button as Btn } from "@chakra-ui/react";
import { ButtonHTMLAttributes } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const SearchButton = ({ onClick }: SearchButtonProps) => {
  return (
    <div className="bg-sky-500 rounded hover:bg-sky-600">
      <IcButton
        aria-label="Search database"
        variant="solid"
        colorScheme=""
        onClick={onClick}
        size="sm"
        icon={<FaSearch />}
      />
    </div>
  );
};
