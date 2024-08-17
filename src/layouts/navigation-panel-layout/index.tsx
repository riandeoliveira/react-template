import { useSidebar } from "@/hooks/use-sidebar";
import { Footer } from "@/layouts/navigation-panel-layout/footer";
import { Sidebar } from "@/layouts/navigation-panel-layout/sidebar";
import type { ParentComponentProps } from "@/types/components";
import { cn } from "@/utilities/cn";
import type { ReactElement } from "react";
import { Navbar } from "./navbar";

type NavigationPanelLayoutProps = ParentComponentProps & {
  title: string;
};

export const NavigationPanelLayout = ({
  children,
  title,
}: NavigationPanelLayoutProps): ReactElement => {
  const { isSidebarOpen } = useSidebar();

  return (
    <>
      <Sidebar />
      <main
        className={cn(
          "min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
          !isSidebarOpen ? "lg:ml-[90px]" : "lg:ml-72",
        )}
      >
        <Navbar title={title} />
        <div className="container pt-8 pb-8 px-4 sm:px-8">{children}</div>
      </main>
      <footer
        className={cn(
          "transition-[margin-left] ease-in-out duration-300",
          !isSidebarOpen ? "lg:ml-[90px]" : "lg:ml-72",
        )}
      >
        <Footer />
      </footer>
    </>
  );
};
