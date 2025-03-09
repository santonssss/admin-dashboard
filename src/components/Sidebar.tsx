import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@lib/utils";
import { LogOut, ChevronLeft, ChevronRight } from "lucide-react";
import { navItems } from "@data/dashboardData";

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onToggle }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <aside
      className={cn(
        `fixed inset-y-0 left-0 z-10 flex flex-col bg-white dark:bg-gray-900 shadow-sm transition-all duration-300 ease-in-out border-r border-border`,
        open ? "!flex w-64" : "w-20",
        "max-[758px]:hidden",
        "min-[758px]:flex"
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-border">
        {open ? (
          <div
            className={cn(
              "flex items-center gap-2 transition-opacity duration-200",
              open ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-white font-semibold">
              A
            </div>
            <span className="font-semibold text-lg">Admin</span>
          </div>
        ) : null}
        <button
          onClick={onToggle}
          className="p-1.5 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {open ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200",
                  isActive(item.path)
                    ? "bg-primary/10 text-primary"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
              >
                <item.icon
                  size={20}
                  className={cn(
                    isActive(item.path)
                      ? "text-primary"
                      : "text-gray-500 dark:text-gray-400"
                  )}
                />
                <span
                  className={cn(
                    "font-medium text-sm transition-opacity duration-200",
                    open ? "opacity-100" : "opacity-0"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-border p-3">
        <Link
          to="/logout"
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
          )}
        >
          <LogOut size={20} className="text-gray-500 dark:text-gray-400" />
          <span
            className={cn(
              "font-medium text-sm transition-opacity duration-200",
              open ? "opacity-100" : "opacity-0"
            )}
          >
            Logout
          </span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
