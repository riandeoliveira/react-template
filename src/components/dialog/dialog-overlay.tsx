import { cn } from "@/utilities/cn";
import { Overlay } from "@radix-ui/react-dialog";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type DialogOverlayElement = ElementRef<typeof Overlay>;
type DialogOverlayProps = ComponentPropsWithoutRef<typeof Overlay>;

export const DialogOverlay = forwardRef<DialogOverlayElement, DialogOverlayProps>(
  ({ className, ...props }, ref) => (
    <Overlay
      ref={ref}
      className={cn(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className,
      )}
      {...props}
    />
  ),
);

DialogOverlay.displayName = Overlay.displayName;
