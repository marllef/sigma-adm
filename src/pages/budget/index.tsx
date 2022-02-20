import type { NextPage } from "next";
import { useState } from "react";
import { List } from "~/components/List";
import { BudgetItem } from "~/components/List/BudgetItem";
import { SearchBar } from "~/components/SearchBar";
import { BudgetWithDetails } from "~/interfaces/Prisma";
import { useFetch } from "~/utils/fetcher";
import styles from "./budget.module.css";

const Budget: NextPage = () => {
  const [search, setSearch] = useState("");
  const { data, error } = useFetch<BudgetWithDetails>("/api/database/budget");

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
          spacing={styles.itemSpacing}
          source={{ keys: ["ID", "NOME", "STATUS", "CRIAÇÃO", "AÇÕES"], data }}
          filter={(item: BudgetWithDetails) =>
            item.status?.toLowerCase().includes(search)
          }
          renderItem={(item, index) => (
            <BudgetItem
              key={item}
              order={item}
              spacing={styles.itemSpacing}
              index={index}
            />
          )}
        />
      </div>
    </div>
  );
};

export default Budget;
