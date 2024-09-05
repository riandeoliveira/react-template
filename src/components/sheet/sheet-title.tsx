import { cn } from "@/utilities/cn";
import { Title } from "@radix-ui/react-dialog";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type SheetTitleElement = ElementRef<typeof Title>;
type SheetTitleProps = ComponentPropsWithoutRef<typeof Title>;

export const SheetTitle = forwardRef<SheetTitleElement, SheetTitleProps>(
  ({ className, ...props }, ref) => (
    <Title
      ref={ref}
      className={cn("text-lg font-semibold text-foreground", className)}
      {...props}
    />
  ),
);

SheetTitle.displayName = Title.displayName;
