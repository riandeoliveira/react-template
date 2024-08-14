import { Icon } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { sidebarStore } from "@/stores/sidebar-store";
import { cn } from "@/utilities/cn";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";

export const SidebarToggle = observer((): ReactElement => {
  return (
    <div className="invisible lg:visible absolute top-[12px] -right-[16px] z-20">
      <Button
        onClick={() => sidebarStore.toggle()}
        className="rounded-md w-8 h-8"
        variant="outline"
        size="icon"
      >
        <Icon.ChevronLeft
          className={cn(
            "h-4 w-4 transition-transform ease-in-out duration-700",
            !sidebarStore.isOpen ? "rotate-180" : "rotate-0",
          )}
        />
      </Button>
    </div>
  );
});
