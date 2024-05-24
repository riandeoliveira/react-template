import { createTheme } from "@mui/material";
import { ptBR } from "@mui/x-data-grid/locales";
import { colors } from "./colors";
import { fonts } from "./fonts";

export const theme = createTheme(
  {
    components: {
      MuiDialog: {
        defaultProps: {
          PaperProps: {
            style: {
              padding: "8px",
            },
          },
        },
      },
      MuiButton: {
        defaultProps: {
          style: {
            fontWeight: 600,
          },
          variant: "contained",
        },
      },
      MuiFormHelperText: {
        defaultProps: {
          style: {
            fontWeight: 700,
            marginLeft: 0,
          },
        },
      },
      MuiFormLabel: {
        defaultProps: {
          style: {
            fontSize: "14px",
          },
        },
      },
      MuiInputBase: {
        defaultProps: {
          style: {
            backgroundColor: colors["neutral-light"],
          },
          sx: {
            input: {
              color: colors["neutral-dark"],
            },
          },
        },
      },
      MuiLink: {
        defaultProps: {
          style: {
            fontSize: "14px",
          },
        },
      },
    },
    palette: {
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
