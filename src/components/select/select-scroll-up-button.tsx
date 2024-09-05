import { cn } from "@/utilities/cn";
import { ScrollUpButton } from "@radix-ui/react-select";
import { ChevronUp } from "lucide-react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type SelectScrollUpButtonElement = ElementRef<typeof ScrollUpButton>;
type SelectScrollUpButtonProps = ComponentPropsWithoutRef<typeof ScrollUpButton>;

export const SelectScrollUpButton = forwardRef<
  SelectScrollUpButtonElement,
  SelectScrollUpButtonProps
>(({ className, ...props }, ref) => (
  <ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </ScrollUpButton>
));

SelectScrollUpButton.displayName = ScrollUpButton.displayName;
