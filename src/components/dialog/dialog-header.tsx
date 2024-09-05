import { cn } from "@/utilities/cn";
import type { HTMLAttributes, ReactElement } from "react";

export const DialogHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): ReactElement => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);

DialogHeader.displayName = "DialogHeader";
