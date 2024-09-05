import { cn } from "@/utilities/cn";
import { Description } from "@radix-ui/react-toast";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type ToastDescriptionElement = ElementRef<typeof Description>;
type ToastDescriptionProps = ComponentPropsWithoutRef<typeof Description>;

export const ToastDescription = forwardRef<ToastDescriptionElement, ToastDescriptionProps>(
  ({ className, ...props }, ref) => (
    <Description ref={ref} className={cn("text-sm opacity-90", className)} {...props} />
  ),
);

ToastDescription.displayName = Description.displayName;
