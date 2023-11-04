import type { CreateToastFnReturn } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { mainProvider } from "providers";
import type { ReactNode } from "react";
import { useEffect, type ReactElement } from "react";
import type { NavigateFunction } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = observer(({ children }: AppProviderProps): ReactElement => {
  const navigate: NavigateFunction = useNavigate();

  const toast: CreateToastFnReturn = useToast({
    duration: 3000,
    isClosable: true,
    position: "top-right",
  });

  useEffect(() => {
    mainProvider.registerNavigateProvider(navigate);
    mainProvider.registerToastProvider(toast);
  }, []);

  return <>{children}</>;
});
