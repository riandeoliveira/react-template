import type { ReactElement } from "react";

import { cn } from "@/utilities/cn";
import type { LinkProps as MuiLinkProps } from "@mui/material";
import { Link as MuiLink } from "@mui/material";

type LinkProps = MuiLinkProps;

export const Link = ({ className, ...props }: LinkProps): ReactElement => {
  return <MuiLink className={cn("!no-underline hover:!underline", className)} {...props} />;
};
