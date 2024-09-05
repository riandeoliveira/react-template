import { cn } from "@/utilities/cn";
import { Title } from "@radix-ui/react-alert-dialog";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type AlertDialogTitleElement = ElementRef<typeof Title>;
type AlertDialogTitleProps = ComponentPropsWithoutRef<typeof Title>;

export const AlertDialogTitle = forwardRef<AlertDialogTitleElement, AlertDialogTitleProps>(
  ({ className, ...props }, ref) => (
    <Title ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
  ),
);

AlertDialogTitle.displayName = Title.displayName;
