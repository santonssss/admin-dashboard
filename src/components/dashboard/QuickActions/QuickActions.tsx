import React from "react";
import { cn } from "@lib/utils";
import { LucideIcon } from "lucide-react";

interface ActionItem {
  id: string;
  title: string;
  icon: LucideIcon;
  color: "blue" | "green" | "purple" | "orange";
  onClick: () => void;
}

interface QuickActionsProps {
  actions: ActionItem[];
}

const QuickActions: React.FC<QuickActionsProps> = ({ actions }) => {
  const getColorStyles = (color: ActionItem["color"]) => {
    const styles = {
      blue: "bg-blue-50 text-blue-600 shadow-blue-200/50 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/40",
      green:
        "bg-green-50 text-green-600 shadow-green-200/50 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/40",
      purple:
        "bg-purple-50 text-purple-600 shadow-purple-200/50 hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400 dark:hover:bg-purple-900/40",
      orange:
        "bg-orange-50 text-orange-600 shadow-orange-200/50 hover:bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400 dark:hover:bg-orange-900/40",
    };

    return styles[color];
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <button
            key={action.id}
            onClick={action.onClick}
            className={cn(
              "flex flex-col items-center justify-center p-4 rounded-lg shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md",
              getColorStyles(action.color)
            )}
          >
            <Icon size={24} />
            <span className="mt-2 text-sm font-medium">{action.title}</span>
          </button>
        );
      })}
    </div>
  );
};

export default QuickActions;
