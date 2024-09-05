import type { Path } from "@/router";
import { Link as RouterLink } from "@/router";
import type { ParentComponentProps } from "@/types/components";
import { cn } from "@/utilities/cn";
import type { ReactElement } from "react";

type LinkInternalProps = ParentComponentProps & {
  className?: string;
  href: Path;
};

export const LinkInternal = ({ children, className, href }: LinkInternalProps): ReactElement => {
  return (
    <>
      <RouterLink to={href} className={cn(className)}>
        {children}
      </RouterLink>
    </>
  );
};
