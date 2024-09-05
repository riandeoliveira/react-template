import { cn } from "@/utilities/cn";
import { Overlay } from "@radix-ui/react-dialog";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type SheetOverlayElement = ElementRef<typeof Overlay>;
type SheetOverlayProps = ComponentPropsWithoutRef<typeof Overlay>;

export const SheetOverlay = forwardRef<SheetOverlayElement, SheetOverlayProps>(
  ({ className, ...props }, ref) => (
    <Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className,
      )}
      {...props}
      ref={ref}
    />
  ),
);

SheetOverlay.displayName = Overlay.displayName;
