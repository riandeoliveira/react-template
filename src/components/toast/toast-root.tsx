import { cn } from "@/utilities/cn";
import { Root } from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    defaultVariants: {
      variant: "default",
    },
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
        success: "success group border-success bg-success text-success-foreground",
        warning: "warning group border-warning bg-warning text-warning-foreground",
      },
    },
  },
);

type ToastRootElement = ElementRef<typeof Root>;
type ToastRootProps = ComponentPropsWithoutRef<typeof Root> & VariantProps<typeof toastVariants>;

export const ToastRoot = forwardRef<ToastRootElement, ToastRootProps>(
  ({ className, variant, ...props }, ref) => {
    return <Root ref={ref} className={cn(toastVariants({ variant }), className)} {...props} />;
  },
);

ToastRoot.displayName = Root.displayName;
