"use client";

import { Icon } from "@/assets/icons";
import { useTheme } from "next-themes";
import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import { Select } from "./ui/select";

type Theme = "dark" | "light" | "system";

export const ThemeSelect = (): ReactElement => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const { setTheme, theme } = useTheme();

  const handleThemeChange = (theme: Theme): void => {
    setTheme(theme);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <></>;

  return (
    <Select.Root defaultValue={theme} onValueChange={handleThemeChange}>
      <Select.Trigger disableDropdownIcon className="w-fit h-fit p-1">
        {theme === "dark" && <Icon.MoonStar />}
        {theme === "light" && <Icon.SunDim />}
        {theme === "system" && <Icon.LaptopMinimal />}
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="light">Claro</Select.Item>
        <Select.Item value="dark">Escuro</Select.Item>
        <Select.Item value="system">Sistema</Select.Item>
      </Select.Content>
    </Select.Root>
  );
};
