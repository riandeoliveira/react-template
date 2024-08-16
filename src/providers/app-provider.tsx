import { useTheme } from "@/hooks/use-theme";
import { useEffect, useState, type ReactElement, type ReactNode } from "react";

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps): ReactElement => {
  useTheme();

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <></>;

  return <>{children}</>;
};
