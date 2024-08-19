import { useAsyncEffect } from "@/hooks/use-async-effect";
import { useComponent } from "@/hooks/use-component";
import { useUsersService } from "@/hooks/use-users-service";
import { LoadingProvider } from "@/providers/loading-provider";
import { Navigate } from "@/router";
import { useLoadingStore } from "@/stores/use-loading-store";
import { useUserStore } from "@/stores/use-user-store";
import type { ParentComponentProps } from "@/types/components";
import { type ReactElement } from "react";

type PrivateRouteProps = ParentComponentProps;

export const PrivateRoute = ({ children }: PrivateRouteProps): ReactElement => {
  const { handleVerifyUser } = useUsersService();
  const { isMounted } = useComponent();
  const loadingStore = useLoadingStore();
  const userStore = useUserStore();

  useAsyncEffect(async () => {
    await handleVerifyUser();
  }, []);

  if (loadingStore.isLoading) {
    return <LoadingProvider />;
  }

  if (isMounted && !userStore.isAuthenticated) {
    return <Navigate to="/sign-in" />;
  }

  return <>{children}</>;
};
