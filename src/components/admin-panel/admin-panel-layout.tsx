"use client";

import { Footer } from "@/components/admin-panel/footer";
import { Sidebar } from "@/components/admin-panel/sidebar";
import { sidebarStore } from "@/stores/sidebar-store";
import { cn } from "@/utilities/cn";
import { observer } from "mobx-react-lite";
import type { ReactElement, ReactNode } from "react";

type AdminPanelLayoutProps = {
  children: ReactNode;
};

export const AdminPanelLayout = observer(({ children }: AdminPanelLayoutProps): ReactElement => {
  return (
    <>
      <Sidebar />
      <main
        className={cn(
          "min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
          !sidebarStore.isOpen ? "lg:ml-[90px]" : "lg:ml-72",
        )}
      >
        {children}
      </main>
      <footer
        className={cn(
          "transition-[margin-left] ease-in-out duration-300",
          !sidebarStore.isOpen ? "lg:ml-[90px]" : "lg:ml-72",
        )}
      >
        <Footer />
      </footer>
    </>
  );
});
