import type { ReactElement } from "react";
import { PageProvider } from "../providers/page-provider";

type PublicRouteProps = {
  page: () => ReactElement;
};

export const PublicRoute = ({ page: Page }: PublicRouteProps) => {
  return (
    <PageProvider>
      <Page />
    </PageProvider>
  );
};
