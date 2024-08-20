import { NavigationPanelLayout } from "@/layouts/navigation-panel-layout";
import { SignOutDialog } from "@/layouts/navigation-panel-layout/sign-out-dialog";
import { PrivateRoute } from "@/routes/private-route";
import type { ReactElement } from "react";

const AccountPage = (): ReactElement => {
  return (
    <PrivateRoute>
      <NavigationPanelLayout title="Conta">
        <p>Esta é a página de conta do usuário atual.</p>
      </NavigationPanelLayout>
      <SignOutDialog />
    </PrivateRoute>
  );
};

export default AccountPage;
