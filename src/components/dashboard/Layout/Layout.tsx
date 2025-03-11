import React, { useState } from "react";
import Sidebar from "@components/Sidebar";
import { cn } from "@lib/utils";
import Header from "@components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="h-full bg-background flex">
      <Sidebar open={sidebarOpen} onToggle={toggleSidebar} />

      <div
        className={cn(
          `flex-1 glass flex flex-col lg:ml-20 !ml-0  overflow-hidden transition-all duration-300 ease-in-out`,
          sidebarOpen ? "ml-64" : "ml-20"
        )}
      >
        <Header onToggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-y-auto px-6 pb-6 pt-4">
          <div className="mx-auto max-w-7xl animate-fade-in">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
