import { cn } from "@/utilities/cn";
import type { AnchorHTMLAttributes, ReactElement } from "react";

type LinkExternalProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const LinkExternal = ({
  className,
  children,
  ...props
}: LinkExternalProps): ReactElement => {
  return (
    <a className={cn(className)} {...props}>
      {children}
    </a>
  );
};
