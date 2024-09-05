import { cn } from "@/utilities/cn";
import { ScrollAreaScrollbar, ScrollAreaThumb } from "@radix-ui/react-scroll-area";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type ScrollBarElement = ElementRef<typeof ScrollAreaScrollbar>;
type ScrollBarProps = ComponentPropsWithoutRef<typeof ScrollAreaScrollbar>;

export const ScrollBar = forwardRef<ScrollBarElement, ScrollBarProps>(
  ({ className, orientation = "vertical", ...props }, ref) => (
    <ScrollAreaScrollbar
      ref={ref}
      orientation={orientation}
      className={cn(
        "flex touch-none select-none transition-colors",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
        className,
      )}
      {...props}
    >
      <ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
    </ScrollAreaScrollbar>
  ),
);

ScrollBar.displayName = ScrollAreaScrollbar.displayName;
