import { cn } from "@/utilities/cn";
import { Command as CommandPrimitive } from "cmdk";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type CommandRootElement = ElementRef<typeof CommandPrimitive>;
type CommandRootProps = ComponentPropsWithoutRef<typeof CommandPrimitive>;

export const CommandRoot = forwardRef<CommandRootElement, CommandRootProps>(
  ({ className, ...props }, ref) => (
    <CommandPrimitive
      ref={ref}
      className={cn(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        className,
      )}
      {...props}
    />
  ),
);

CommandRoot.displayName = CommandPrimitive.displayName;
