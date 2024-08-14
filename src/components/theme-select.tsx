"use client";

import { Icon } from "@/assets/icons";
import { useTheme } from "next-themes";
import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import { Select } from "./ui/select";
import { Tooltip } from "./ui/tooltip";

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
      <Tooltip.Provider>
        <Tooltip.Root delayDuration={100}>
          <Tooltip.Trigger asChild>
            <Select.Trigger disableDropdownIcon className="w-8 h-8 p-0 justify-center rounded-full">
              {theme === "dark" && <Icon.MoonStar size={16} />}
              {theme === "light" && <Icon.SunDim size={16} />}
              {theme === "system" && <Icon.LaptopMinimal size={16} />}
            </Select.Trigger>
          </Tooltip.Trigger>
          <Tooltip.Content side="bottom">Tema</Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>
      <Select.Content>
        <Select.Item value="light">Claro</Select.Item>
        <Select.Item value="dark">Escuro</Select.Item>
        <Select.Item value="system">Sistema</Select.Item>
      </Select.Content>
    </Select.Root>
  );
};
