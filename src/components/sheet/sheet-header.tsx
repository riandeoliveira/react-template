import { cn } from "@/utilities/cn";
import type { HTMLAttributes, ReactElement } from "react";

export const SheetHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): ReactElement => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);

SheetHeader.displayName = "SheetHeader";
