import type { ParentComponentProps } from "@/types/components";
import { type ReactElement } from "react";
import { LoadingProvider } from "./loading-provider";
import { ThemeProvider } from "./theme-provider";
import { ToastProvider } from "./toast-provider";

type AppProvidersProps = ParentComponentProps;

export const AppProviders = ({ children }: AppProvidersProps): ReactElement => {
  return (
    <ThemeProvider>
      {children}
      <ToastProvider />
      <LoadingProvider />
    </ThemeProvider>
  );
};
