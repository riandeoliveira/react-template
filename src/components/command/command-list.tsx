import { cn } from "@/utilities/cn";
import { Command as CommandPrimitive } from "cmdk";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type CommandListElement = ElementRef<typeof CommandPrimitive.List>;
type CommandListProps = ComponentPropsWithoutRef<typeof CommandPrimitive.List>;

export const CommandList = forwardRef<CommandListElement, CommandListProps>(
  ({ className, ...props }, ref) => (
    <CommandPrimitive.List
      ref={ref}
      className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
      {...props}
    />
  ),
);

CommandList.displayName = CommandPrimitive.List.displayName;
