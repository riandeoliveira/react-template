import { cn } from "@/utilities/cn";
import type { HTMLAttributes, ReactElement } from "react";

export const DropdownMenuShortcut = ({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>): ReactElement => {
  return (
    <span className={cn("ml-auto text-xs tracking-widest opacity-60", className)} {...props} />
  );
};

DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
