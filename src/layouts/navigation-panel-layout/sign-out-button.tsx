import { Icon } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import { useDialogStore } from "@/stores/use-dialog-store";
import { cn } from "@/utilities/cn";
import type { ReactElement } from "react";

type SignOutButtonProps = {
  isOpen?: boolean;
};

export const SignOutButton = ({ isOpen }: SignOutButtonProps): ReactElement => {
  const dialogStore = useDialogStore();

  return (
    <Tooltip.Provider disableHoverableContent>
      <Tooltip.Root delayDuration={100}>
        <Tooltip.Trigger asChild>
          <Button
            variant="outline"
            onClick={() => dialogStore.open("signOut")}
            className="w-full justify-center h-10 mt-5"
          >
            <span className={cn(isOpen === false ? "" : "mr-4")}>
              <Icon.LogOut size={18} />
            </span>
            <p
              className={cn(
                "whitespace-nowrap",
                isOpen === false ? "opacity-0 hidden" : "opacity-100",
              )}
            >
              Sair
            </p>
          </Button>
        </Tooltip.Trigger>
        {isOpen === false && <Tooltip.Content side="right">Sair</Tooltip.Content>}
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
