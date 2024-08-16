import type { ParentComponentProps } from "@/types/components";
import { useEffect, useState, type ReactElement } from "react";
import { LoadingProvider } from "./loading-provider";
import { ThemeProvider } from "./theme-provider";
import { ToastProvider } from "./toast-provider";

type AppProvidersProps = ParentComponentProps;

export const AppProviders = ({ children }: AppProvidersProps): ReactElement => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <></>;

  return (
    <ThemeProvider>
      {children}
      <ToastProvider />
      <LoadingProvider />
    </ThemeProvider>
  );
};
