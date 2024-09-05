import { cn } from "@/utilities/cn";
import { Description } from "@radix-ui/react-dialog";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type SheetDescriptionElement = ElementRef<typeof Description>;
type SheetDescriptionProps = ComponentPropsWithoutRef<typeof Description>;

export const SheetDescription = forwardRef<SheetDescriptionElement, SheetDescriptionProps>(
  ({ className, ...props }, ref) => (
    <Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);

SheetDescription.displayName = Description.displayName;
