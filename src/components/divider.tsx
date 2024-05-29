import { cn } from "@/lib/utils";
import type { DividerProps as MuiDividerProps } from "@mui/material";
import { Divider as MuiDivider } from "@mui/material";
import type { ReactElement } from "react";

type DividerProps = MuiDividerProps;

export const Divider = ({ className, ...props }: DividerProps): ReactElement => {
  return <MuiDivider className={cn("w-full", className)} {...props} />;
};
