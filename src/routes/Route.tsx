import { theme } from "@/styles/theme";
import { ThemeProvider } from "@mui/material";
import type { ReactElement } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface RouteProps {
  page: () => ReactElement;
}

export const Route = ({ page: Page }: RouteProps): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <Page />
      <ToastContainer toastClassName="bg-zinc-900" />
    </ThemeProvider>
  );
};
