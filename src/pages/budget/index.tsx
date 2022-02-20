import type { NextPage } from "next";
import { useState } from "react";
import { List } from "~/components/List";
import { BudgetItem } from "~/components/List/BudgetItem";
import { Item } from "~/components/List/Item";
import { ListItem } from "~/components/List/ListItem";
import { SearchBar } from "~/components/SearchBar";
import styles from "./budget.module.css";

const Budget: NextPage = () => {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.budgetContent}>
        <div className={styles.contentHeader}>
          <SearchBar
            onSearch={(value) => {
              setSearch(value.toLowerCase());
            }}
          />
        </div>
        <List
          source={{ keys: ["Table", ""], data: ["Olap", "aaaa"] }}
          filter={(item: String) => item.toLowerCase().includes(search)}
          renderItem={(item, index) => (
            <BudgetItem key={item} order={item} index={index} />
          )}
        />
      </div>
    </div>
  );
};

export default Budget;
