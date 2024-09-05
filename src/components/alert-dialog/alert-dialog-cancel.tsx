import { buttonVariants } from "@/components/button";
import { cn } from "@/utilities/cn";
import { Cancel } from "@radix-ui/react-alert-dialog";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type AlertDialogCancelElement = ElementRef<typeof Cancel>;
type AlertDialogCancelProps = ComponentPropsWithoutRef<typeof Cancel>;

export const AlertDialogCancel = forwardRef<AlertDialogCancelElement, AlertDialogCancelProps>(
  ({ className, ...props }, ref) => (
    <Cancel
      ref={ref}
      className={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
      {...props}
    />
  ),
);

AlertDialogCancel.displayName = Cancel.displayName;
