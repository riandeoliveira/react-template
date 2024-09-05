import { cn } from "@/utilities/cn";
import { Title } from "@radix-ui/react-toast";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type ToastTitleElement = ElementRef<typeof Title>;
type ToastTitleProps = ComponentPropsWithoutRef<typeof Title>;

export const ToastTitle = forwardRef<ToastTitleElement, ToastTitleProps>(
  ({ className, ...props }, ref) => (
    <Title ref={ref} className={cn("text-sm font-semibold", className)} {...props} />
  ),
);

ToastTitle.displayName = Title.displayName;
