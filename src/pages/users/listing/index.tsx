import { NavigationPanelLayout } from "@/layouts/navigation-panel-layout";
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
    </PrivateRoute>
  );
};

export default UsersListingPage;
