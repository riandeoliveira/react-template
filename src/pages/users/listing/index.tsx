import { NavigationPanelLayout } from "@/layouts/navigation-panel-layout";
import { SignOutDialog } from "@/layouts/navigation-panel-layout/sign-out-dialog";
import { PrivateRoute } from "@/routes/private-route";
import type { ReactElement } from "react";

const UsersListingPage = (): ReactElement => {
  return (
    <PrivateRoute>
      <NavigationPanelLayout title="Listagem de Usuários">
        <div>
          <p>Esta é a página de listagem de usuários.</p>
        </div>
      </NavigationPanelLayout>
      <SignOutDialog />
    </PrivateRoute>
  );
};

export default UsersListingPage;
