import React from "react";
import { cn } from "@lib/utils";
import BlurContainer from "@components/ui/BlurContainer";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    positive: boolean;
  };
  color?: "blue" | "green" | "purple" | "orange";
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  trend,
  color = "blue",
  className,
}) => {
  const colorStyles = {
    blue: "from-blue-50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/10 text-blue-600 dark:text-blue-400",
    green:
      "from-green-50 to-green-100/50 dark:from-green-950/20 dark:to-green-900/10 text-green-600 dark:text-green-400",
    purple:
      "from-purple-50 to-purple-100/50 dark:from-purple-950/20 dark:to-purple-900/10 text-purple-600 dark:text-purple-400",
    orange:
      "from-orange-50 to-orange-100/50 dark:from-orange-950/20 dark:to-orange-900/10 text-orange-600 dark:text-orange-400",
  };

  const iconColorStyles = {
    blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    green:
      "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    purple:
      "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    orange:
      "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
  };

  return (
    <BlurContainer
      className={cn(
        "flex flex-col bg-gradient-to-br transition-transform duration-300 hover:shadow-md hover:-translate-y-1",
        colorStyles[color],
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {title}
        </span>
        <div className={cn("p-2 rounded-full", iconColorStyles[color])}>
          <Icon size={18} />
        </div>
      </div>

      <div className="mt-3">
        <h3 className="text-2xl font-bold">{value}</h3>

        {trend && (
          <div className="flex items-center mt-1">
            <span
              className={cn(
                "text-xs font-medium",
                trend.positive
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              )}
            >
              {trend.positive ? "+" : "-"}
              {Math.abs(trend.value)}%
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
              vs last month
            </span>
          </div>
        )}
      </div>
    </BlurContainer>
  );
};

export default StatCard;
