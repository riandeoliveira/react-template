import { cn } from "@/utilities/cn";
import { Command as CommandPrimitive } from "cmdk";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type CommandSeparatorElement = ElementRef<typeof CommandPrimitive.Separator>;
type CommandSeparatorProps = ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>;

export const CommandSeparator = forwardRef<CommandSeparatorElement, CommandSeparatorProps>(
  ({ className, ...props }, ref) => (
    <CommandPrimitive.Separator
      ref={ref}
      className={cn("-mx-1 h-px bg-border", className)}
      {...props}
    />
  ),
);

CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
