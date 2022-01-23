import { NavItem } from "./NavItem";
import { AiFillDashboard as Dash } from "react-icons/ai";
import {
  MdPaid as Dollar,
  MdLogout as Logout,
  MdLocalMall as Date,
  MdPeople as Client,
} from "react-icons/md";
import { NavDivider } from "./NavDivider";
import styles from "./SideBar.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.sideBar__container}>
      <span>
        <NavItem Icon={Dash} title="Painel" href="/" />
        <NavDivider>Organização</NavDivider>
        <NavItem Icon={Dollar} title="Orçamentos" href="/budget" />
        <NavItem Icon={Date} title="Encomendas" href="/order" />
        <NavDivider>Clientes</NavDivider>
        <NavItem Icon={Client} title="Clientes" href="/clientes" />
      </span>
      <NavItem Icon={Logout} title="Sair" />
    </div>
  );
};
