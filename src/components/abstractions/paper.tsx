import { cn } from "@/lib/utils";
import type { PaperProps as MuiPaperProps } from "@mui/material";
import { Paper as MuiPaper } from "@mui/material";
import type { ReactElement, ReactNode } from "react";

type PaperProps = MuiPaperProps & {
  children: ReactNode;
};

export const Paper = ({ children, className, ...props }: PaperProps): ReactElement => {
  return (
    <MuiPaper elevation={6} className={cn("", className)} {...props}>
      {children}
    </MuiPaper>
  );
};
