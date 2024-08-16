import { cn } from "@/utilities/cn";
import type { HTMLAttributes, ReactElement } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export const Container = ({ children, className, ...props }: ContainerProps): ReactElement => {
  return (
    <div className={cn("bg-primary-foreground border border-input", className)} {...props}>
      {children}
    </div>
  );
};
