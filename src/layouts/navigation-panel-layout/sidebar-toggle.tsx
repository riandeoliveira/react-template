import { Icon } from "@/assets/icons";
import { Button } from "@/components/button";
import { useSidebar } from "@/hooks/use-sidebar";
import { cn } from "@/utilities/cn";
import type { ReactElement } from "react";

export const SidebarToggle = (): ReactElement => {
  const { toggleSidebar, isSidebarOpen } = useSidebar();

  return (
    <div className="invisible lg:visible absolute top-[12px] -right-[16px] z-20">
      <Button onClick={toggleSidebar} className="rounded-md w-8 h-8" variant="outline" size="icon">
        <Icon.ChevronLeft
          className={cn(
            "h-4 w-4 transition-transform ease-in-out duration-700",
            !isSidebarOpen ? "rotate-180" : "rotate-0",
          )}
        />
      </Button>
    </div>
  );
};
