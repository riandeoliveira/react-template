import { cn } from "@/utilities/cn";
import { Separator } from "@radix-ui/react-select";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type SelectSeparatorElement = ElementRef<typeof Separator>;
type SelectSeparatorProps = ComponentPropsWithoutRef<typeof Separator>;

export const SelectSeparator = forwardRef<SelectSeparatorElement, SelectSeparatorProps>(
  ({ className, ...props }, ref) => (
    <Separator ref={ref} className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
  ),
);

SelectSeparator.displayName = Separator.displayName;
