import { cn } from "@/utilities/cn";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type CommandInputElement = ElementRef<typeof CommandPrimitive.Input>;
type CommandInputProps = ComponentPropsWithoutRef<typeof CommandPrimitive.Input>;

export const CommandInput = forwardRef<CommandInputElement, CommandInputProps>(
  ({ className, ...props }, ref) => (
    // eslint-disable-next-line react/no-unknown-property
    <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
      <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        ref={ref}
        className={cn(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    </div>
  ),
);

CommandInput.displayName = CommandPrimitive.Input.displayName;
