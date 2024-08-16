import { Link } from "@/components/link";
import { Button } from "@/components/ui/button";
import { Menu } from "@/layouts/navigation-panel/menu";
import { SidebarToggle } from "@/layouts/navigation-panel/sidebar-toggle";
import { sidebarStore } from "@/stores/sidebar-store";
import { cn } from "@/utilities/cn";
import { PanelsTopLeft } from "lucide-react";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";

export const Sidebar = observer((): ReactElement => {
  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300",
        !sidebarStore.isOpen ? "w-[90px]" : "w-72",
      )}
    >
      <SidebarToggle />
      <div className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800 overflow-x-hidden">
        <Button
          className={cn(
            "transition-transform ease-in-out duration-300 mb-1",
            !sidebarStore.isOpen ? "translate-x-1" : "translate-x-0",
          )}
          variant="link"
          asChild
        >
          <Link.Internal href="/" className="flex items-center gap-2">
            <PanelsTopLeft className="w-6 h-6 mr-1" />
            <h1
              className={cn(
                "font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300",
                !sidebarStore.isOpen
                  ? "-translate-x-96 opacity-0 hidden"
                  : "translate-x-0 opacity-100",
              )}
            >
              React Template
            </h1>
          </Link.Internal>
        </Button>
        <Menu isOpen={sidebarStore.isOpen} />
      </div>
    </aside>
  );
});
