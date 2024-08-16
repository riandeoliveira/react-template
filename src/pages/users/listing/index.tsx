import { NavigationPanel } from "@/layouts/navigation-panel";
import type { ReactElement } from "react";

const UsersListingPage = (): ReactElement => {
  return (
    <NavigationPanel>
      <div>
        <p>Esta é a página de listagem de usuários.</p>
      </div>
    </NavigationPanel>
  );
};

export default UsersListingPage;
