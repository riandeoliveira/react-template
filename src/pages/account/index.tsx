import { NavigationPanelLayout } from "@/layouts/navigation-panel-layout";
import type { ReactElement } from "react";

const AccountPage = (): ReactElement => {
  return (
    <NavigationPanelLayout title="Conta">
      <p>Esta é a página de conta do usuário atual.</p>
    </NavigationPanelLayout>
  );
};

export default AccountPage;
