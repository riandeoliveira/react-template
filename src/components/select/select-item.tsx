import { cn } from "@/utilities/cn";
import { Item, ItemIndicator, ItemText } from "@radix-ui/react-select";
import { Check } from "lucide-react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type SelectItemElement = ElementRef<typeof Item>;
type SelectItemProps = ComponentPropsWithoutRef<typeof Item>;

export const SelectItem = forwardRef<SelectItemElement, SelectItemProps>(
  ({ className, children, ...props }, ref) => (
    <Item
      ref={ref}
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ItemIndicator>
          <Check className="h-4 w-4" />
        </ItemIndicator>
      </span>

      <ItemText>{children}</ItemText>
    </Item>
  ),
);

SelectItem.displayName = Item.displayName;
