import { useTheme } from "@/hooks/use-theme";
import type { ParentComponentProps } from "@/types/components";
import { type ReactElement } from "react";

type ThemeProviderProps = ParentComponentProps;

export const ThemeProvider = ({ children }: ThemeProviderProps): ReactElement => {
  useTheme();

  return <>{children}</>;
};
