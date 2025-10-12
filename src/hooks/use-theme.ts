import { themeSchema } from "@/schemas/theme-schema";
import { useLocalStorage } from "./use-local-storage";

export type ThemeType = "dark" | "light";

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage<ThemeType>(
    "theme",
    "light",
    themeSchema,
  );

  return {
    theme,
    setTheme,
  };
};
