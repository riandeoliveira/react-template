import { Icon } from "@/assets/icons";
import { Menu } from "@/components/admin-panel/menu";
import { Button } from "@/components/ui/button";
import { Sheet } from "@/components/ui/sheet";
import type { ReactElement } from "react";
import { Link } from "../link";

export const SheetMenu = (): ReactElement => {
  return (
    <Sheet.Root>
      <Sheet.Trigger className="lg:hidden" asChild>
        <Button className="h-8" variant="outline" size="icon">
          <Icon.MenuIcon size={20} />
        </Button>
      </Sheet.Trigger>
      <Sheet.Content className="sm:w-72 px-3 h-full flex flex-col" side="left">
        <Sheet.Header>
          <Button className="flex justify-center items-center pb-2 pt-1" variant="link" asChild>
            <Link href="/dashboard" className="flex items-center gap-2">
              <Icon.PanelsTopLeft className="w-6 h-6 mr-1" />
              <h1 className="font-bold text-lg">NextJS Template</h1>
            </Link>
          </Button>
        </Sheet.Header>
        <Menu isOpen />
      </Sheet.Content>
    </Sheet.Root>
  );
};
