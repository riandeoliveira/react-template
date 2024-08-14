import { AdminPanelLayout } from "@/components/admin-panel/admin-panel-layout";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import type { ReactElement, ReactNode } from "react";

type UsersCreateLayoutProps = {
  children: ReactNode;
};

const UsersCreateLayout = ({ children }: UsersCreateLayoutProps): ReactElement => {
  return (
    <AdminPanelLayout>
      <ContentLayout title="Criar Usuário">{children}</ContentLayout>
    </AdminPanelLayout>
  );
};

export default UsersCreateLayout;
