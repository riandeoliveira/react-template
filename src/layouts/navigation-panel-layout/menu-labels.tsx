import { Icon } from "@/assets/icons";
import { Tooltip } from "@/components/ui/tooltip";
import type { ReactElement } from "react";

type MenuListProps = {
  groupLabel: string;
  isOpen?: boolean;
};

export const MenuLabels = ({ isOpen, groupLabel }: MenuListProps): ReactElement => {
  const isMenuOpen: boolean = !!((isOpen && groupLabel) || isOpen === undefined);
  const isMenuClosed: boolean = !!(!isOpen && isOpen !== undefined && groupLabel);

  if (isMenuOpen) {
    return (
      <p className="text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate">
        {groupLabel}
      </p>
    );
  }

  if (isMenuClosed) {
    return (
      <Tooltip.Provider>
        <Tooltip.Root delayDuration={100}>
          <Tooltip.Trigger className="w-full">
            <div className="w-full flex justify-center items-center">
              <Icon.Ellipsis className="h-5 w-5" />
            </div>
          </Tooltip.Trigger>
          <Tooltip.Content side="right">
            <p>{groupLabel}</p>
          </Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>
    );
  }

  return <p className="pb-2" />;
};
