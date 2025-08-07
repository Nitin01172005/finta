import { cn } from "../lib/utlis";
import React from "react";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("max-w-5xl mx-auto w-full px-4 relative z-10")}>{children}</div>;
};
