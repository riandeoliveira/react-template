import { cn } from "@/lib/utils";
import type { DialogProps as MuiDialogProps } from "@mui/material";
import { Dialog as MuiDialog } from "@mui/material";
import type { ReactElement, ReactNode } from "react";

type DialogProps = MuiDialogProps & {
  children: ReactNode;
};

export const Dialog = ({ children, className, ...props }: DialogProps): ReactElement => {
  return (
    <MuiDialog PaperProps={{ className: "p-2" }} className={cn("", className)} {...props}>
      {children}
    </MuiDialog>
  );
};
