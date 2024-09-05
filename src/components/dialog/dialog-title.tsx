import { cn } from "@/utilities/cn";
import { Title } from "@radix-ui/react-dialog";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type DialogTitleElement = ElementRef<typeof Title>;
type DialogTitleProps = ComponentPropsWithoutRef<typeof Title>;

export const DialogTitle = forwardRef<DialogTitleElement, DialogTitleProps>(
  ({ className, ...props }, ref) => (
    <Title
      ref={ref}
      className={cn("text-lg font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  ),
);

DialogTitle.displayName = Title.displayName;
