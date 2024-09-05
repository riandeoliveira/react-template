import { buttonVariants } from "@/components/button";
import { cn } from "@/utilities/cn";
import { Action } from "@radix-ui/react-alert-dialog";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type AlertDialogActionElement = ElementRef<typeof Action>;
type AlertDialogActionProps = ComponentPropsWithoutRef<typeof Action>;

export const AlertDialogAction = forwardRef<AlertDialogActionElement, AlertDialogActionProps>(
  ({ className, ...props }, ref) => (
    <Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
  ),
);

AlertDialogAction.displayName = Action.displayName;
