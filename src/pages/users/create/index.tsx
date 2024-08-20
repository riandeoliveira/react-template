import { NavigationPanelLayout } from "@/layouts/navigation-panel-layout";
import { SignOutDialog } from "@/layouts/navigation-panel-layout/sign-out-dialog";
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
      <SignOutDialog />
    </PrivateRoute>
  );
};

export default UsersCreatePage;
