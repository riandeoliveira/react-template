import { Icon } from "@/assets/icons";
import { cn } from "@/utilities/cn";
import { ScrollDownButton } from "@radix-ui/react-select";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type SelectScrollDownButtonElement = ElementRef<typeof ScrollDownButton>;
type SelectScrollDownButtonProps = ComponentPropsWithoutRef<typeof ScrollDownButton>;

export const SelectScrollDownButton = forwardRef<
  SelectScrollDownButtonElement,
  SelectScrollDownButtonProps
>(({ className, ...props }, ref) => (
  <ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <Icon.ChevronDown className="h-4 w-4" />
  </ScrollDownButton>
));

SelectScrollDownButton.displayName = ScrollDownButton.displayName;
