import { cn } from "@lib/utils";
import React from "react";

interface BlurContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "primary" | "card";
}

const BlurContainer: React.FC<BlurContainerProps> = ({
  children,
  className,
  variant = "default",
  ...props
}) => {
  const variantClasses = {
    default: "glass",
    primary: "glass-primary",
    card: "glass-card",
  };

  return (
    <div
      className={cn(
        variantClasses[variant],
        "rounded-lg p-4 transition-all duration-300 dark:border-gray-800/30",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default BlurContainer;
