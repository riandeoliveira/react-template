import { cn } from "@/utilities/cn";
import type { HTMLAttributes, ReactElement } from "react";

type HelperTextProps = HTMLAttributes<HTMLSpanElement>;

export const HelperText = ({ children, className, ...props }: HelperTextProps): ReactElement => {
  return (
    <span className={cn("text-red-500 text-xs", className)} {...props}>
      {children}
    </span>
  );
};
