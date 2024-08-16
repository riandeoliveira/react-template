import { Icon } from "@/assets/icons";
import { Link } from "@/components/link";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip } from "@/components/ui/tooltip";
import { CollapseMenuButton } from "@/layouts/navigation-panel/collapse-menu-button";
import { cn } from "@/utilities/cn";
import { getMenuList } from "@/utilities/menu-list";
import type { ReactElement } from "react";
import { useLocation } from "react-router-dom";

interface MenuProps {
  isOpen: boolean | undefined;
}

export const Menu = ({ isOpen }: MenuProps): ReactElement => {
  const { pathname } = useLocation();
  const menuList = getMenuList(pathname);

  return (
    <ScrollArea className="[&>div>div[style]]:!block">
      <nav className="mt-8 h-full w-full">
        <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] items-start space-y-1 px-2">
          {menuList.map(({ groupLabel, menus }, index) => (
            <li className={cn("w-full", groupLabel ? "pt-5" : "")} key={index}>
              {(isOpen && groupLabel) || isOpen === undefined ? (
                <p className="text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate">
                  {groupLabel}
                </p>
              ) : !isOpen && isOpen !== undefined && groupLabel ? (
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
              ) : (
                <p className="pb-2"></p>
              )}
              {menus.map(({ href, label, icon: Icon, active, submenus }, index) =>
                submenus.length === 0 ? (
                  <div className="w-full" key={index}>
                    <Tooltip.Provider disableHoverableContent>
                      <Tooltip.Root delayDuration={100}>
                        <Tooltip.Trigger asChild>
                          <Button
                            variant={active ? "secondary" : "ghost"}
                            className="w-full justify-start h-10 mb-1"
                            asChild
                          >
                            <Link.Internal href={href}>
                              <span className={cn(isOpen === false ? "" : "mr-4")}>
                                <Icon size={18} />
                              </span>
                              <p
                                className={cn(
                                  "max-w-[200px] truncate",
                                  isOpen === false
                                    ? "-translate-x-96 opacity-0"
                                    : "translate-x-0 opacity-100",
                                )}
                              >
                                {label}
                              </p>
                            </Link.Internal>
                          </Button>
                        </Tooltip.Trigger>
                        {isOpen === false && (
                          <Tooltip.Content side="right">{label}</Tooltip.Content>
                        )}
                      </Tooltip.Root>
                    </Tooltip.Provider>
                  </div>
                ) : (
                  <div className="w-full" key={index}>
                    <CollapseMenuButton
                      icon={Icon}
                      label={label}
                      active={active}
                      submenus={submenus}
                      isOpen={isOpen}
                    />
                  </div>
                ),
              )}
            </li>
          ))}
          <li className="w-full grow flex items-end">
            <Tooltip.Provider disableHoverableContent>
              <Tooltip.Root delayDuration={100}>
                <Tooltip.Trigger asChild>
                  <Button
                    onClick={() => {}}
                    variant="outline"
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
          </li>
        </ul>
      </nav>
    </ScrollArea>
  );
};
