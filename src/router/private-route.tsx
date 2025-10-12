import type { ReactElement } from "react";
import { PageProvider } from "../providers/page-provider";

type PrivateRouteProps = {
  page: () => ReactElement;
};

export const PrivateRoute = ({ page: Page }: PrivateRouteProps) => {
  return (
    <PageProvider>
      <Page />
    </PageProvider>
  );
};
