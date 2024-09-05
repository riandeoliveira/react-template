import { cn } from "@/utilities/cn";
import { Item } from "@radix-ui/react-dropdown-menu";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type DropdownMenuItemElement = ElementRef<typeof Item>;
type DropdownMenuItemProps = ComponentPropsWithoutRef<typeof Item> & {
  inset?: boolean;
};

export const DropdownMenuItem = forwardRef<DropdownMenuItemElement, DropdownMenuItemProps>(
  ({ className, inset, ...props }, ref) => (
    <Item
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className,
      )}
      {...props}
    />
  ),
);

DropdownMenuItem.displayName = Item.displayName;
