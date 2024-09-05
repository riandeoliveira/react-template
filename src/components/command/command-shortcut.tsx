import { cn } from "@/utilities/cn";
import type { HTMLAttributes, ReactElement } from "react";

export const CommandShortcut = ({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>): ReactElement => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      {...props}
    />
  );
};

CommandShortcut.displayName = "CommandShortcut";
