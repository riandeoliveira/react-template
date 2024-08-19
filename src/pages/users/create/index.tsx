import { NavigationPanelLayout } from "@/layouts/navigation-panel-layout";
import { PrivateRoute } from "@/routes/private-route";
import type { ReactElement } from "react";

const UsersCreatePage = (): ReactElement => {
  return (
    <PrivateRoute>
      <NavigationPanelLayout title="Criação de Usuário">
        <div>
          <p>Esta é a página de criação de usuário.</p>
        </div>
      </NavigationPanelLayout>
    </PrivateRoute>
  );
};

export default UsersCreatePage;
