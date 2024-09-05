import { Icon } from "@/assets/icons";
import type { Theme } from "@/hooks/use-theme";
import { useTheme } from "@/hooks/use-theme";
import type { ReactElement } from "react";
import { Select } from "./select";
import { Tooltip } from "./tooltip";

export const ThemeSelect = (): ReactElement => {
  const { setTheme, theme } = useTheme();

  const handleThemeChange = (theme: Theme): void => {
    setTheme(theme);
  };

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
