import { cn } from "@/utilities/cn";
import type { PaperProps } from "@mui/material";
import type { ReactElement } from "react";

type ContainerProps = PaperProps;

export const Container = ({ children, className, ...props }: ContainerProps): ReactElement => {
  return (
    <div className={cn("shadow-container", className)} {...props}>
      {children}
    </div>
  );
};
