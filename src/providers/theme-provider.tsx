import { themeStore } from "@/stores/theme-store";
import { colors } from "@/styles/colors";
import { fonts } from "@/styles/fonts";
import type { Theme } from "@mui/material";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";
import { ptBR } from "@mui/x-data-grid/locales";
import { observer } from "mobx-react-lite";
import type { ReactElement, ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = observer(({ children }: ThemeProviderProps): ReactElement => {
  const theme: Theme = createTheme(
    {
      components: {
        MuiButton: {
          defaultProps: {
            variant: "contained",
          },
        },
      },
      palette: {
        mode: themeStore.theme,
        error: {
          main: colors.error,
        },
        primary: {
          main: colors.primary,
        },
      },
      typography: {
        button: {
          textTransform: "none",
        },
        fontFamily: fonts.primary,
      },
    },
    ptBR,
  );

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
});
