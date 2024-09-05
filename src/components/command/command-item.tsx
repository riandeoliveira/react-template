import { cn } from "@/utilities/cn";
import { Command as CommandPrimitive } from "cmdk";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type CommandItemElement = ElementRef<typeof CommandPrimitive.Item>;
type CommandItemProps = ComponentPropsWithoutRef<typeof CommandPrimitive.Item>;

export const CommandItem = forwardRef<CommandItemElement, CommandItemProps>(
  ({ className, ...props }, ref) => (
    <CommandPrimitive.Item
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);

CommandItem.displayName = CommandPrimitive.Item.displayName;
