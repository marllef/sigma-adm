import { NavItem } from "./NavItem";
import { AiFillDashboard as Dash } from "react-icons/ai";
import {
  MdPaid as Dollar,
  MdLogout as Logout,
  MdLocalMall as Date,
  MdPeople as Client,
} from "react-icons/md";
import { NavDivider } from "./NavDivider";

export const Sidebar = () => {
  return (
    <div className="flex flex-col h-full w-48 shadow justify-between py-2 text-white bg-slate-800">
      <span>
        <NavItem Icon={Dash} title="Dashboard" />
        <NavDivider>Organização</NavDivider>
        <NavItem Icon={Dollar} title="Orçamentos" />
        <NavItem Icon={Date} title="Encomendas" />
        <NavDivider>Clientes</NavDivider>
        <NavItem Icon={Client} title="Clientes" />
      </span>
      <NavItem Icon={Logout} title="Sair" />
    </div>
  );
};
