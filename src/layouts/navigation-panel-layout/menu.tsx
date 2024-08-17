import { ScrollArea } from "@/components/ui/scroll-area";
import { getMenuList } from "@/data/menu-list";
import { CollapseMenuButton } from "@/layouts/navigation-panel-layout/collapse-menu-button";
import { cn } from "@/utilities/cn";
import type { ReactElement } from "react";
import { useLocation } from "react-router-dom";
import { MenuItem } from "./menu-item";
import { MenuLabels } from "./menu-labels";
import { SignOutButton } from "./sign-out-button";

type MenuProps = {
  isOpen?: boolean;
};

export const Menu = ({ isOpen }: MenuProps): ReactElement => {
  const { pathname } = useLocation();

  const menuList = getMenuList(pathname);

  return (
    <ScrollArea className="[&>div>div[style]]:!block">
      <nav className="mt-8 h-full w-full">
        <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] items-start space-y-1 px-2">
          {menuList.map(({ groupLabel, menus }, index) => (
            <li className={cn("w-full", groupLabel ? "pt-5" : "")} key={index}>
              <MenuLabels isOpen={isOpen} groupLabel={groupLabel} />
              {menus.map(({ href, label, icon, active, submenus }, index) =>
                submenus.length === 0 ? (
                  <MenuItem
                    href={href}
                    label={label}
                    icon={icon}
                    active={active}
                    isOpen={isOpen}
                    key={index}
                  />
                ) : (
                  <div className="w-full" key={index}>
                    <CollapseMenuButton
                      icon={icon}
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
            <SignOutButton isOpen={isOpen} />
          </li>
        </ul>
      </nav>
    </ScrollArea>
  );
};
