import { cn } from "@/utilities/cn";
import { Overlay } from "@radix-ui/react-alert-dialog";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type AlertDialogOverlayElement = ElementRef<typeof Overlay>;
type AlertDialogOverlayProps = ComponentPropsWithoutRef<typeof Overlay>;

export const AlertDialogOverlay = forwardRef<AlertDialogOverlayElement, AlertDialogOverlayProps>(
  ({ className, ...props }, ref) => (
    <Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className,
      )}
      {...props}
      ref={ref}
    />
  ),
);

AlertDialogOverlay.displayName = Overlay.displayName;
