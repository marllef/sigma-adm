import type { NextPage } from "next";
import styles from "./order.module.css";
import { List } from "~/components/List";
import { Empty } from "~/components/Empty";
import { useState } from "react";

const Order: NextPage = () => {
  const [data, setData] = useState([]);
  return (
    <div className={styles.container}>
      <div className={styles.orderBody}>
        <List
          isEmpty={!data.length}
          source={{ data: data, keys: ["Table"] }}
        />
      </div>
    </div>
  );
};

export default Order;
