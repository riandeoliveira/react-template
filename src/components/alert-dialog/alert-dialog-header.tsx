import { cn } from "@/utilities/cn";
import type { HTMLAttributes, ReactElement } from "react";

type AlertDialogHeaderProps = HTMLAttributes<HTMLDivElement>;

export const AlertDialogHeader = ({
  className,
  ...props
}: AlertDialogHeaderProps): ReactElement => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);

AlertDialogHeader.displayName = "AlertDialogHeader";
