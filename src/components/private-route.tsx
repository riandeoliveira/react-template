import { redirect } from "next/navigation";
import { type ReactElement, type ReactNode } from "react";

type PrivateRouteProps = {
  children: ReactNode;
};

export const PrivateRoute = ({ children }: PrivateRouteProps): ReactElement => {
  // NOTE: Se não estiver autenticado deve redirecionar para sign-in

  // NOTE: Preciso chamar o endpoint de VerifyCurrentUser aqui

  const isAuthenticated: boolean = true;

  if (!isAuthenticated) redirect("/sign-in");

  return <>{children}</>;
};
