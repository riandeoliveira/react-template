import { type ReactNode, useEffect } from "react";
import { useTheme } from "@/hooks/use-theme";

const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme } = useTheme();

  useEffect(() => {
    const onChangeDeviceTheme = () => {
      if (theme === "dark") document.documentElement.classList.add("dark");
      if (theme === "light") document.documentElement.classList.remove("dark");
    };

    onChangeDeviceTheme();

    matchMedia.addEventListener("change", onChangeDeviceTheme);

    return () => {
      matchMedia.removeEventListener("change", onChangeDeviceTheme);
    };
  }, [theme]);

  return <>{children}</>;
};
