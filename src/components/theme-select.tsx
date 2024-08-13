"use client";

import { Icon } from "@/assets/icons";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { useTheme } from "next-themes";
import type { ReactElement } from "react";
import { useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

export const ThemeSelect = (): ReactElement => {
  const { setTheme, theme } = useTheme();
  const [clientTheme, setClientTheme] = useState<Theme>("system");

  useEffect(() => {
    if (theme) setClientTheme(theme as Theme);
  }, [theme]);

  const handleThemeChange = (theme: Theme): void => {
    setTheme(theme);
  };

  return (
    <Select defaultValue={clientTheme} onValueChange={handleThemeChange}>
      <SelectTrigger className="w-fit">
        {clientTheme === "dark" && <Icon.MoonStar />}
        {clientTheme === "light" && <Icon.SunDim />}
        {clientTheme === "system" && <Icon.LaptopMinimal />}
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Claro</SelectItem>
        <SelectItem value="dark">Escuro</SelectItem>
        <SelectItem value="system">Sistema</SelectItem>
      </SelectContent>
    </Select>
  );
};
