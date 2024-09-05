import { Icon } from "@/assets/icons";
import { cn } from "@/utilities/cn";
import { SubTrigger } from "@radix-ui/react-dropdown-menu";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type DropdownMenuSubTriggerElement = ElementRef<typeof SubTrigger>;
type DropdownMenuSubTriggerProps = ComponentPropsWithoutRef<typeof SubTrigger> & {
  inset?: boolean;
};

export const DropdownMenuSubTrigger = forwardRef<
  DropdownMenuSubTriggerElement,
  DropdownMenuSubTriggerProps
>(({ className, inset, children, ...props }, ref) => (
  <SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <Icon.ChevronRight className="ml-auto h-4 w-4" />
  </SubTrigger>
));

DropdownMenuSubTrigger.displayName = SubTrigger.displayName;
