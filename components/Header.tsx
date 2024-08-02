import React from "react";
import { FaRegBell } from "react-icons/fa";
import { HiMiniUserCircle } from "react-icons/hi2";

interface HeaderProps {
  isSidebarCollapsed: boolean;
}

const Header: React.FC<HeaderProps> = ({ isSidebarCollapsed }) => {
  return (
    <header
      className={`bg-white text-gray-900 p-4 shadow-md flex items-center justify-end fixed top-0 z-10 transition-all duration-300 ${
        isSidebarCollapsed
          ? "left-20 w-[calc(100%-5rem)]"
          : "left-64 w-[calc(100%-16rem)]"
      } h-18`}
    >
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Pesquisar..."
            className="px-4 py-2 rounded-md bg-slate-200 text-white"
          />
        </div>
        <FaRegBell size={22} />
        <HiMiniUserCircle size={42} />
      </div>
    </header>
  );
};

export default Header;
