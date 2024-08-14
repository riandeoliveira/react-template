import { AdminPanelLayout } from "@/components/admin-panel/admin-panel-layout";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import type { ReactElement, ReactNode } from "react";

type UsersListingLayoutProps = {
  children: ReactNode;
};

const UsersListingLayout = ({ children }: UsersListingLayoutProps): ReactElement => {
  return (
    <AdminPanelLayout>
      <ContentLayout title="Listagem de Usuários">{children}</ContentLayout>
    </AdminPanelLayout>
  );
};

export default UsersListingLayout;
