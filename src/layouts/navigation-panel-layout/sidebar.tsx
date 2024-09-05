import { Icon } from "@/assets/icons";
import { Button } from "@/components/button";
import { Link } from "@/components/link";
import { useSidebar } from "@/hooks/use-sidebar";
import { Menu } from "@/layouts/navigation-panel-layout/menu";
import { SidebarToggle } from "@/layouts/navigation-panel-layout/sidebar-toggle";
import { cn } from "@/utilities/cn";
import type { ReactElement } from "react";

export const Sidebar = (): ReactElement => {
  const { isSidebarOpen } = useSidebar();

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300",
        !isSidebarOpen ? "w-[90px]" : "w-72",
      )}
    >
      <SidebarToggle />
      <div className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800 overflow-x-hidden">
        <Button
          className={cn(
            "transition-transform ease-in-out duration-300 mb-1",
            !isSidebarOpen ? "translate-x-1" : "translate-x-0",
          )}
          variant="link"
          asChild
        >
          <Link.Internal href="/" className="flex items-center gap-2">
            <Icon.PanelsTopLeft className="w-6 h-6 mr-1" />
            <h1
              className={cn(
                "font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300",
                !isSidebarOpen ? "-translate-x-96 opacity-0 hidden" : "translate-x-0 opacity-100",
              )}
            >
              React Template
            </h1>
          </Link.Internal>
        </Button>
        <Menu isOpen={isSidebarOpen} />
      </div>
    </aside>
  );
};
