import type { Theme } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import { LoadingArea } from "components/LoadingArea";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "routes";
import "styles/_global.scss";

const rootElement = document.querySelector("#root") as Element;

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#61dbfb",
    },
  },
});

ReactDOM.createRoot(rootElement!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <LoadingArea />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
