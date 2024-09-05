import { cn } from "@/utilities/cn";
import { Description } from "@radix-ui/react-alert-dialog";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type AlertDialogDescriptionElement = ElementRef<typeof Description>;
type AlertDialogDescriptionProps = ComponentPropsWithoutRef<typeof Description>;

export const AlertDialogDescription = forwardRef<
  AlertDialogDescriptionElement,
  AlertDialogDescriptionProps
>(({ className, ...props }, ref) => (
  <Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));

AlertDialogDescription.displayName = Description.displayName;
