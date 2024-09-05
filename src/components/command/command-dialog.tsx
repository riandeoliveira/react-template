import { type DialogProps as ReactDialogProps } from "@radix-ui/react-dialog";
import type { ReactElement } from "react";
import { Dialog } from "../dialog";
import { CommandRoot } from "./command-root";

type CommandDialogProps = ReactDialogProps;

export const CommandDialog = ({ children, ...props }: CommandDialogProps): ReactElement => {
  return (
    <Dialog.Root {...props}>
      <Dialog.Content className="overflow-hidden p-0 shadow-lg">
        <CommandRoot className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </CommandRoot>
      </Dialog.Content>
    </Dialog.Root>
  );
};
