import type { Path } from "@/router";
import { Link as RouterLink } from "@/router";
import type { ParentComponentProps } from "@/types/components";
import { cn } from "@/utilities/cn";
import type { AnchorHTMLAttributes, ReactElement } from "react";

type InternalProps = ParentComponentProps & {
  href: Path;
  className?: string;
};

const Internal = ({ href, className, children }: InternalProps): ReactElement => {
  return (
    <>
      <RouterLink to={href} className={cn(className)}>
        {children}
      </RouterLink>
    </>
  );
};

type ExternalProps = AnchorHTMLAttributes<HTMLAnchorElement>;

const External = ({ className, children, ...props }: ExternalProps): ReactElement => {
  return (
    <a className={cn(className)} {...props}>
      {children}
    </a>
  );
};

export const Link = {
  Internal,
  External,
};
