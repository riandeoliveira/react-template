import type { CreateToastFnReturn } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { mainProvider } from "providers";
import type { ReactNode } from "react";
import { useEffect, type ReactElement } from "react";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = observer(({ children }: AppProviderProps): ReactElement => {
  const toast: CreateToastFnReturn = useToast({
    duration: 3000,
    isClosable: true,
    position: "top-right",
  });

  useEffect(() => {
    mainProvider.registerToastProvider(toast);
  }, []);

  return <>{children}</>;
});
