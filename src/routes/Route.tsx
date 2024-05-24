import { ThemeProvider } from "@/providers/theme-provider";
import type { ReactElement } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type RouteProps = {
  page: () => ReactElement;
};

export const Route = ({ page: Page }: RouteProps): ReactElement => {
  return (
    <ThemeProvider>
      <Page />
      <ToastContainer toastClassName="bg-zinc-900" />
    </ThemeProvider>
  );
};
