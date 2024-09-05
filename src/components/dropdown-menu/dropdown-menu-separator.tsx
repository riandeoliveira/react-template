import { cn } from "@/utilities/cn";
import { Separator } from "@radix-ui/react-dropdown-menu";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type DropdownMenuSeparatorElement = ElementRef<typeof Separator>;
type DropdownMenuSeparatorProps = ComponentPropsWithoutRef<typeof Separator>;

export const DropdownMenuSeparator = forwardRef<
  DropdownMenuSeparatorElement,
  DropdownMenuSeparatorProps
>(({ className, ...props }, ref) => (
  <Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
));

DropdownMenuSeparator.displayName = Separator.displayName;
