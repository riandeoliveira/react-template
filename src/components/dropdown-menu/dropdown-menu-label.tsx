import { cn } from "@/utilities/cn";
import { Label } from "@radix-ui/react-dropdown-menu";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type DropdownMenuLabelElement = ElementRef<typeof Label>;
type DropdownMenuLabelProps = ComponentPropsWithoutRef<typeof Label> & {
  inset?: boolean;
};

export const DropdownMenuLabel = forwardRef<DropdownMenuLabelElement, DropdownMenuLabelProps>(
  ({ className, inset, ...props }, ref) => (
    <Label
      ref={ref}
      className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
      {...props}
    />
  ),
);

DropdownMenuLabel.displayName = Label.displayName;
