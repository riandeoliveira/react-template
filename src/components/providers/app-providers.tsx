import { ToastProvider } from "@radix-ui/react-toast";
import type { ReactElement, ReactNode } from "react";
import { LoadingProvider } from "./loading-provider";
import { ThemeProvider } from "./theme-provider";

type AppProvidersProps = {
  children: ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps): ReactElement => {
  return (
    <ThemeProvider>
      {children}
      <ToastProvider />
      <LoadingProvider />
    </ThemeProvider>
  );
};
