import { Icon } from "@/assets/icons";
import type { LucideIcon } from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export const getMenuList = (pathname: string): Group[] => {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/",
          label: "Início",
          active: pathname === "/",
          icon: Icon.Home,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Administrador",
      menus: [
        {
          href: "",
          label: "Usuários",
          active: false,
          icon: Icon.Users,
          submenus: [
            {
              href: "/users/create",
              label: "Criar",
              active: pathname === "/users/create",
              icon: Icon.UserPlus,
            },
            {
              href: "/users/listing",
              label: "Listagem",
              active: pathname === "/users/listing",
              icon: Icon.UserSearch,
            },
          ],
        },
      ],
    },
    {
      groupLabel: "Configurações",
      menus: [
        {
          href: "/account",
          label: "Conta",
          active: pathname.includes("/account"),
          icon: Icon.Settings,
          submenus: [],
        },
      ],
    },
  ];
};
