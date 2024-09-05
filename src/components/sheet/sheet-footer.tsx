import { cn } from "@/utilities/cn";
import type { HTMLAttributes, ReactElement } from "react";

export const SheetFooter = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): ReactElement => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);

SheetFooter.displayName = "SheetFooter";
