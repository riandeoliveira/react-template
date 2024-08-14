import { cn } from "@/utilities/cn";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactElement } from "react";

type LinkProps = NextLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({ children, className, ...props }: LinkProps): ReactElement => {
  return (
    <NextLink className={cn("", className)} {...props}>
      {children}
    </NextLink>
  );
};
