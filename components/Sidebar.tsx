import React from "react";
import Link from "next/link";
import {
  FaHome,
  FaWrench,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { MdGroups2, MdOutlineInventory } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import classNames from "classnames";
import { GiRobotGrab } from "react-icons/gi";

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleSidebar }) => {
  return (
    <aside
      className={`bg-slate-200 text-white ${
        isCollapsed ? "w-20" : "w-64"
      } min-h-screen fixed top-0 left-0 transition-all duration-300`}
    >
      <div className="flex flex-col h-full bg-blue-950 text-slate-300 rounded-l-lg absolute w-full">
        <div onClick={toggleSidebar} className="cursor-pointer flex justify-start gap-2 items-center pl-4 pr-4 pt-4 pb-4 bg-blue-900 relative rounded-tl-lg">
          <img src="/logo.svg" className="w-10 h-10" />
          {!isCollapsed && (
            <span className="text-2xl font-semibold">Company</span>
          )}
          <div className="flex absolute right-2">
            <button onClick={toggleSidebar} className="text-white">
              {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
            </button>
          </div>
        </div>
        <div className="pr-3 pl-3 pt-4 pb-4 flex-1 flex flex-col justify-between">
          <nav className="flex-1 flex flex-col space-y-2">
            <Link
              href="/"
              className={classNames(
                "p-2 hover:bg-blue-800/30 rounded flex items-center gap-2",
                { "justify-center": isCollapsed }
              )}
            >
              <FaHome size={26} />
              {!isCollapsed && "Dashboard"}
            </Link>
            <Link
              href="/machines"
              className={classNames(
                "p-2 hover:bg-blue-800/30 rounded flex items-center gap-2",
                { "justify-center": isCollapsed }
              )}
            >
              <GiRobotGrab size={26} />
              {!isCollapsed && "Máquinas"}
            </Link>
            <Link
              href="/maintenances"
              className={classNames(
                "p-2 hover:bg-blue-800/30 rounded flex items-center gap-2",
                { "justify-center": isCollapsed }
              )}
            >
              <FaWrench size={26} />
              {!isCollapsed && "Manutenções"}
            </Link>
            <Link
              href="/teams"
              className={classNames(
                "p-2 hover:bg-blue-800/30 rounded flex items-center gap-2",
                { "justify-center": isCollapsed }
              )}
            >
              <MdGroups2 size={26} />
              {!isCollapsed && "Atribuição de Equipes"}
            </Link>
            <Link
              href="/inventory"
              className={classNames(
                "p-2 hover:bg-blue-800/30 rounded flex items-center gap-2",
                { "justify-center": isCollapsed }
              )}
            >
              <MdOutlineInventory size={26} />
              {!isCollapsed && "Controle de Estoque"}
            </Link>
            <Link
              href="/cost-control"
              className={classNames(
                "p-2 hover:bg-blue-800/30 rounded flex items-center gap-2",
                { "justify-center": isCollapsed }
              )}
            >
              <BsCashCoin size={26} />
              {!isCollapsed && "Controle de Custos"}
            </Link>
          </nav>
          <div className="flex">
            <Link
              href="/settings"
              className={classNames(
                "p-2 hover:bg-blue-800/30 rounded flex items-center gap-2 w-full",
                { "justify-center": isCollapsed }
              )}
            >
              <IoIosSettings size={26} />
              {!isCollapsed && "Configurações"}
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
