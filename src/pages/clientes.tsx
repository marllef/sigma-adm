import type { NextPage } from "next";
import { Button } from "../components/Button";
import { ClientList } from "../components/ClientList";
import { SearchBar } from "../components/SearchBar";

const myData = [
  {
    id: 1,
    name: "Marllef Hyorrane Alves de Freitas",
    tel: "84 9 XXXX-XXXX",
    updated_at: new Date().toDateString().toString(),
  },
  {
    id: 2,
    name: "Miqueias A Freitas",
    tel: "84 9 XXXX-XXXX",
    updated_at: new Date().toDateString().toString(),
  },
  {
    id: 3,
    name: "Mariana A Freitas",
    tel: "84 9 XXXX-XXXX",
    updated_at: new Date().toDateString().toString(),
  },
  {
    id: 4,
    name: "Rejane A Freitas",
    tel: "84 9 XXXX-XXXX",
    updated_at: new Date().toDateString().toString(),
  },
];

const Clientes: NextPage = () => {
  return (
    <div className="h-full p-2">
      <div className="bg-white rounded border h-full">
        <div className="flex flex-row justify-between items-center">
          <SearchBar />
          <Button label="Cadastrar" onClick={() => {}} />
        </div>
        <ClientList data={myData} />
      </div>
    </div>
  );
};

export default Clientes;
