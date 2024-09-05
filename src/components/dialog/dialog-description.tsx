import { cn } from "@/utilities/cn";
import { Description } from "@radix-ui/react-dialog";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type DialogDescriptionElement = ElementRef<typeof Description>;
type DialogDescriptionProps = ComponentPropsWithoutRef<typeof Description>;

export const DialogDescription = forwardRef<DialogDescriptionElement, DialogDescriptionProps>(
  ({ className, ...props }, ref) => (
    <Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);

DialogDescription.displayName = Description.displayName;
