import { NavigationPanelLayout } from "@/layouts/navigation-panel-layout";
import type { ReactElement } from "react";

const UsersListingPage = (): ReactElement => {
  return (
    <NavigationPanelLayout title="Listagem de Usuários">
      <div>
        <p>Esta é a página de listagem de usuários.</p>
      </div>
    </NavigationPanelLayout>
  );
};

export default UsersListingPage;
