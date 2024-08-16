import { cn } from "@/utilities/cn";
import type { AnchorHTMLAttributes, ReactElement } from "react";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Link = ({ children, className, ...props }: LinkProps): ReactElement => {
  return (
    <>
      <a href="#" className={cn("", className)} {...props}>
        {children}
      </a>
    </>
  );
};
