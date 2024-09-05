import { cn } from "@/utilities/cn";
import { Viewport } from "@radix-ui/react-toast";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type ToastViewportElement = ElementRef<typeof Viewport>;
type ToastViewportProps = ComponentPropsWithoutRef<typeof Viewport>;

export const ToastViewport = forwardRef<ToastViewportElement, ToastViewportProps>(
  ({ className, ...props }, ref) => (
    <Viewport
      ref={ref}
      className={cn(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:right-0 sm:flex-col md:max-w-[420px]",
        className,
      )}
      {...props}
    />
  ),
);

ToastViewport.displayName = Viewport.displayName;
