import type React from "react";

interface CustomScrollbarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  orientation?: "vertical" | "horizontal" | "both";
}

// Simple utility to join classNames conditionally
function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function CustomScrollbar({
  children,
  className = "",
  orientation = "vertical",
  ...props
}: CustomScrollbarProps) {
  const scrollbarStyles = classNames(
    // Base styles
    "overflow-auto",
    // Webkit scrollbar styling
    "[&::-webkit-scrollbar]:w-2",
    "[&::-webkit-scrollbar]:h-2",
    "[&::-webkit-scrollbar-track]:bg-transparent",
    "[&::-webkit-scrollbar-thumb]:rounded-full",
    "[&::-webkit-scrollbar-thumb]:bg-[#374151]",
    "[&::-webkit-scrollbar-thumb:hover]:bg-[#4B5563]",
    // Firefox scrollbar styling (using scrollbar-color)
    "scrollbar-thin",
    "scrollbar-thumb-[#374151]",
    "hover:scrollbar-thumb-[#4B5563]",
    // Conditional styles based on orientation
    orientation === "horizontal" ? "overflow-y-hidden" : "",
    orientation === "vertical" ? "overflow-x-hidden" : "",
    className
  );

  return (
    <div className={scrollbarStyles} {...props}>
      {children}
    </div>
  );
}
