import { redirect } from "@/router";
import type { ParentComponentProps } from "@/types/components";
import { type ReactElement } from "react";

type PrivateRouteProps = ParentComponentProps;

export const PrivateRoute = ({ children }: PrivateRouteProps): ReactElement => {
  // NOTE: Se não estiver autenticado deve redirecionar para sign-in

  // NOTE: Preciso chamar o endpoint de VerifyCurrentUser aqui

  const isAuthenticated: boolean = true;

  if (!isAuthenticated) redirect("/sign-in");

  return <>{children}</>;
};
