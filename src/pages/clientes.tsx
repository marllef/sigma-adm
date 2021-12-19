import type { NextPage } from "next";
import { ClientList } from "../components/ClientList";

const Clientes: NextPage = () => {
  return (
    <div>
      <ClientList
        data={[
          1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
          4, 4, 44,
        ]}
      />
    </div>
  );
};

export default Clientes;
