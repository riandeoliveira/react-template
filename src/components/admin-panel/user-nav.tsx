"use client";

import { Icon } from "@/assets/icons";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { ReactElement } from "react";
import { Link } from "../link";
import { DropdownMenu } from "../ui/dropdown-menu";
import { Tooltip } from "../ui/tooltip";

export const UserNav = (): ReactElement => {
  return (
    <DropdownMenu.Root>
      <Tooltip.Provider disableHoverableContent>
        <Tooltip.Root delayDuration={100}>
          <Tooltip.Trigger asChild>
            <DropdownMenu.Trigger asChild>
              <Button variant="outline" className="relative h-8 w-8 rounded-full">
                <Avatar.Root className="h-8 w-8">
                  <Avatar.Image src="#" alt="Avatar" />
                  <Avatar.Fallback className="bg-transparent">JD</Avatar.Fallback>
                </Avatar.Root>
              </Button>
            </DropdownMenu.Trigger>
          </Tooltip.Trigger>
          <Tooltip.Content side="bottom">Perfil</Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>
      <DropdownMenu.Content className="w-56" align="end" forceMount>
        <DropdownMenu.Label className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">John Doe</p>
            <p className="text-xs leading-none text-muted-foreground">johndoe@example.com</p>
          </div>
        </DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Item className="hover:cursor-pointer" asChild>
            <Link href="/dashboard" className="flex items-center">
              <Icon.LayoutGrid className="w-4 h-4 mr-3 text-muted-foreground" />
              Dashboard
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="hover:cursor-pointer" asChild>
            <Link href="/account" className="flex items-center">
              <Icon.User className="w-4 h-4 mr-3 text-muted-foreground" />
              Account
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Item className="hover:cursor-pointer" onClick={() => {}}>
          <Icon.LogOut className="w-4 h-4 mr-3 text-muted-foreground" />
          Sair
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
