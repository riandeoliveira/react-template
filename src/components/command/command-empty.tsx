import { Command as CommandPrimitive } from "cmdk";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type CommandEmptyElement = ElementRef<typeof CommandPrimitive.Empty>;
type CommandEmptyProps = ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>;

export const CommandEmpty = forwardRef<CommandEmptyElement, CommandEmptyProps>((props, ref) => (
  <CommandPrimitive.Empty ref={ref} className="py-3 text-center text-sm" {...props} />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
