import type { NextPage } from "next";
import { Button } from "../components/Button";
import { ClientList } from "../components/ClientList";
import { BasicModal } from "../components/Modal/BasicModal";
import { SearchBar } from "../components/SearchBar";

const Clientes: NextPage = () => {
  return (
    <div className="h-full p-2">
      <div className="bg-white rounded border h-full">
        <div className="flex flex-row justify-between items-center">
          <SearchBar />
          <BasicModal />
        </div>
        <ClientList />
      </div>
    </div>
  );
};

export default Clientes;
