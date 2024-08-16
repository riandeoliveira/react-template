import { Footer } from "@/layouts/navigation-panel/footer";
import { Sidebar } from "@/layouts/navigation-panel/sidebar";
import { sidebarStore } from "@/stores/sidebar-store";
import type { ParentComponentProps } from "@/types/components";
import { cn } from "@/utilities/cn";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { Navbar } from "./navbar";

type NavigationPanelProps = ParentComponentProps;

export const NavigationPanel = observer(({ children }: NavigationPanelProps): ReactElement => {
  return (
    <>
      <Sidebar />
      <main
        className={cn(
          "min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
          !sidebarStore.isOpen ? "lg:ml-[90px]" : "lg:ml-72",
        )}
      >
        <div>
          <Navbar title="Título X" />
          <main className="container pt-8 pb-8 px-4 sm:px-8">{children}</main>
        </div>
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
