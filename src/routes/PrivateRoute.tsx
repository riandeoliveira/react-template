import type { ReactElement, ReactNode } from "react";
import { useEffect } from "react";

interface PrivateRouteProps {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps): ReactElement => {
  useEffect(() => {}, []);

  return <>{children}</>;
};
