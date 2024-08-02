"use client";

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex w-full">
      <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
      <div className={`flex flex-col flex-grow ${isSidebarCollapsed ? 'ml-20' : 'ml-64'} min-h-screen bg-slate-100 text-gray-900 transition-margin duration-300`}>
        <Header isSidebarCollapsed={isSidebarCollapsed} />
        {children}
      </div>
    </div>
  );
};

export default ClientLayout;
