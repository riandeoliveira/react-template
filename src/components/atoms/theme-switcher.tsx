import { Icon } from "@/assets";
import { useI18n } from "@/hooks/use-i18n";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "./button";
import { Tooltip } from "./tooltip";

export const ThemeSwitcher = () => {
  const { t } = useI18n();
  const { theme, setTheme } = useTheme();

  const themeDetails = {
    dark: {
      label: t("dark_theme"),
      icon: Icon.MoonStar,
    },
    light: {
      label: t("light_theme"),
      icon: Icon.SunDim,
    },
  };

  const ThemeIcon = themeDetails[theme].icon;

  const ariaLabel =
    theme === "dark" ? t("switch_to_light_theme") : t("switch_to_dark_theme");

  const handleChangeTheme = () => {
    if (theme === "dark") setTheme("light");
    if (theme === "light") setTheme("dark");
  };

  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <Button
          variant="outline"
          aria-label={ariaLabel}
          className="rounded-full p-2"
          onClick={handleChangeTheme}
        >
          <ThemeIcon />
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content>{themeDetails[theme].label}</Tooltip.Content>
    </Tooltip.Root>
  );
};
