import { cn } from "@/utilities/cn";
import { Icon, Trigger } from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type SelectTriggerElement = ElementRef<typeof Trigger>;
type SelectTriggerProps = ComponentPropsWithoutRef<typeof Trigger> & {
  disableDropdownIcon?: boolean;
};

export const SelectTrigger = forwardRef<SelectTriggerElement, SelectTriggerProps>(
  ({ className, children, disableDropdownIcon, ...props }, ref) => (
    <Trigger
      ref={ref}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        className,
      )}
      {...props}
    >
      {children}
      {!disableDropdownIcon && (
        <Icon asChild>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Icon>
      )}
    </Trigger>
  ),
);

SelectTrigger.displayName = Trigger.displayName;
