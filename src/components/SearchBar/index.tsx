import { Input } from "@chakra-ui/react";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSearch: { (value: string): void };
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <Input
          variant={"unstyled"}
          size={"sm"}
          onChange={(event) => onSearch(event.currentTarget.value)}
          placeholder="Pesquisar... "
        />
      </div>
    </div>
  );
};
