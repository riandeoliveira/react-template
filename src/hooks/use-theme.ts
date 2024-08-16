import type { Dispatch, SetStateAction } from "react";
import { useEffect } from "react";
import useLocalStorage from "use-local-storage";

export type Theme = "dark" | "light" | "system";

type UseThemeProps = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme | undefined>>;
};

const matchMedia: MediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

const switchToDarkMode = (): void => document.body.classList.add("dark");
const switchToLightMode = (): void => document.body.classList.remove("dark");

export const useTheme = (): UseThemeProps => {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "light");

  useEffect(() => {
    const onChangeDeviceTheme = (): void => {
      if (theme === "system") {
        const isDarkMode: boolean = matchMedia.matches;

        if (isDarkMode) switchToDarkMode();
        else switchToLightMode();
      }

      if (theme === "dark") switchToDarkMode();
      if (theme === "light") switchToLightMode();
    };

    onChangeDeviceTheme();

    matchMedia.addEventListener("change", onChangeDeviceTheme);

    return (): void => {
      matchMedia.removeEventListener("change", onChangeDeviceTheme);
    };
  }, [theme]);

  return {
    theme,
    setTheme,
  };
};
