import { NavigationPanelLayout } from "@/layouts/navigation-panel-layout";
import type { ReactElement } from "react";

const UsersCreatePage = (): ReactElement => {
  return (
    <NavigationPanelLayout title="Criação de Usuário">
      <div>
        <p>Esta é a página de criação de usuário.</p>
      </div>
    </NavigationPanelLayout>
  );
};

export default UsersCreatePage;
