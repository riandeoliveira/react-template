import { cn } from "@/utilities/cn";
import { Corner, Root, Viewport } from "@radix-ui/react-scroll-area";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";
import { ScrollBar } from "./scroll-bar";

type ScrollAreaElement = ElementRef<typeof Root>;
type ScrollAreaProps = ComponentPropsWithoutRef<typeof Root>;

export const ScrollArea = forwardRef<ScrollAreaElement, ScrollAreaProps>(
  ({ className, children, ...props }, ref) => (
    <Root ref={ref} className={cn("relative overflow-hidden", className)} {...props}>
      <Viewport className="h-full w-full rounded-[inherit]">{children}</Viewport>
      <ScrollBar />
      <Corner />
    </Root>
  ),
);

ScrollArea.displayName = Root.displayName;
