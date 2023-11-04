import { observer } from "mobx-react-lite";
import type { ReactElement, ReactNode } from "react";
import { useEffect } from "react";

interface PrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute = observer(({ children }: PrivateRouteProps): ReactElement => {
  useEffect(() => {}, []);

  return <>{children}</>;
});
