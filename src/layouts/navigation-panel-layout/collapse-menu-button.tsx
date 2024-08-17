import { Icon } from "@/assets/icons";
import { Link } from "@/components/link";
import { Button } from "@/components/ui/button";
import { Collapsible } from "@/components/ui/collapsible";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { Tooltip } from "@/components/ui/tooltip";
import type { Submenu } from "@/data/menu-list";
import { cn } from "@/utilities/cn";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import type { LucideIcon } from "lucide-react";
import type { ReactElement } from "react";
import { useState } from "react";

type CollapseMenuButtonProps = {
  icon: LucideIcon;
  label: string;
  active: boolean;
  submenus: Submenu[];
  isOpen: boolean | undefined;
};

export const CollapseMenuButton = ({
  icon: TriggerIcon,
  label,
  active,
  submenus,
  isOpen,
}: CollapseMenuButtonProps): ReactElement => {
  const isSubmenuActive = submenus.some((submenu) => submenu.active);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isSubmenuActive);

  return isOpen ? (
    <Collapsible.Root open={isCollapsed} onOpenChange={setIsCollapsed} className="w-full">
      <Collapsible.Trigger className="[&[data-state=open]>div>div>svg]:rotate-180 mb-1" asChild>
        <Button variant={active ? "secondary" : "ghost"} className="w-full justify-start h-10">
          <div className="w-full items-center flex justify-between">
            <div className="flex items-center">
              <span className="mr-4">
                <TriggerIcon size={18} />
              </span>
              <p
                className={cn(
                  "max-w-[150px] truncate",
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-96 opacity-0",
                )}
              >
                {label}
              </p>
            </div>
            <div
              className={cn(
                "whitespace-nowrap",
                isOpen ? "translate-x-0 opacity-100" : "-translate-x-96 opacity-0",
              )}
            >
              <Icon.ChevronDown size={18} className="transition-transform duration-200" />
            </div>
          </div>
        </Button>
      </Collapsible.Trigger>
      <Collapsible.Content className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        {submenus.map(({ href, label, active, icon: SubMenuIcon }, index) => (
          <Button
            key={index}
            variant={active ? "secondary" : "ghost"}
            className="w-full justify-start h-10 mb-1"
            asChild
          >
            <Link.Internal href={href}>
              <span className="mr-4 ml-2">
                <SubMenuIcon size={18} />
              </span>
              <p
                className={cn(
                  "max-w-[170px] truncate",
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-96 opacity-0",
                )}
              >
                {label}
              </p>
            </Link.Internal>
          </Button>
        ))}
      </Collapsible.Content>
    </Collapsible.Root>
  ) : (
    <DropdownMenu.Root>
      <Tooltip.Provider disableHoverableContent>
        <Tooltip.Root delayDuration={100}>
          <Tooltip.Trigger asChild>
            <DropdownMenu.Trigger asChild>
              <Button
                variant={active ? "secondary" : "ghost"}
                className="w-full justify-start h-10 mb-1"
              >
                <div className="w-full items-center flex justify-between">
                  <div className="flex items-center">
                    <span className={cn(isOpen === false ? "" : "mr-4")}>
                      <TriggerIcon size={18} />
                    </span>
                    <p
                      className={cn(
                        "max-w-[200px] truncate",
                        isOpen === false ? "opacity-0" : "opacity-100",
                      )}
                    >
                      {label}
                    </p>
                  </div>
                </div>
              </Button>
            </DropdownMenu.Trigger>
          </Tooltip.Trigger>
          <Tooltip.Content side="right" align="start" alignOffset={2}>
            {label}
          </Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>
      <DropdownMenu.Content side="right" sideOffset={25} align="start">
        <DropdownMenu.Label className="max-w-[190px] truncate">{label}</DropdownMenu.Label>
        <DropdownMenu.Separator />
        {submenus.map(({ href, label }, index) => (
          <DropdownMenu.Item key={index} asChild>
            <Link.Internal className="cursor-pointer" href={href}>
              <p className="max-w-[180px] truncate">{label}</p>
            </Link.Internal>
          </DropdownMenu.Item>
        ))}
        <DropdownMenuArrow className="fill-border" />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
