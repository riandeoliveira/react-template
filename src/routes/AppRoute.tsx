import { observer } from "mobx-react-lite";
import { AppProvider } from "providers/AppProvider";
import type { ReactElement } from "react";

interface AppRouteProps {
  page: () => ReactElement;
}

export const AppRoute = observer(({ page: Page }: AppRouteProps): ReactElement => {
  return (
    <AppProvider>
      <Page />
    </AppProvider>
  );
});
