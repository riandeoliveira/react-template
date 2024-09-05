import { cn } from "@/utilities/cn";
import { Label } from "@radix-ui/react-select";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type SelectLabelElement = ElementRef<typeof Label>;
type SelectLabelProps = ComponentPropsWithoutRef<typeof Label>;

export const SelectLabel = forwardRef<SelectLabelElement, SelectLabelProps>(
  ({ className, ...props }, ref) => (
    <Label
      ref={ref}
      className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
      {...props}
    />
  ),
);

SelectLabel.displayName = Label.displayName;
