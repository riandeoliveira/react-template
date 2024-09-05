import { cn } from "@/utilities/cn";
import type { HTMLAttributes, ReactElement } from "react";

type AlertDialogFooterProps = HTMLAttributes<HTMLDivElement>;

export const AlertDialogFooter = ({
  className,
  ...props
}: AlertDialogFooterProps): ReactElement => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);

AlertDialogFooter.displayName = "AlertDialogFooter";
