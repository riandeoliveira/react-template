import { AdminPanelLayout } from "@/components/admin-panel/admin-panel-layout";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import type { ReactElement } from "react";

const HomePage = (): ReactElement => {
  return (
    <AdminPanelLayout>
      <ContentLayout title="Início">
        <div>
          <p>Esta é a página inicial</p>
        </div>
      </ContentLayout>
    </AdminPanelLayout>
  );
};

export default HomePage;
