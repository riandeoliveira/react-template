import { Link } from "@/components/link";
import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/ui/tooltip";
import type { Path } from "@/router";
import { cn } from "@/utilities/cn";
import type { LucideIcon } from "lucide-react";
import type { ReactElement } from "react";

type MenuItemProps = {
  active: boolean;
  href: Path;
  icon: LucideIcon;
  isOpen?: boolean;
  label: string;
};

export const MenuItem = ({
  active,
  href,
  icon: Icon,
  label,
  isOpen,
}: MenuItemProps): ReactElement => {
  return (
    <div className="w-full">
      <Tooltip.Provider disableHoverableContent>
        <Tooltip.Root delayDuration={100}>
          <Tooltip.Trigger className="w-full">
            <Button
              variant={active ? "secondary" : "ghost"}
              className="w-full justify-start h-10 mb-1"
              asChild
            >
              <Link.Internal href={href}>
                <span className={cn(isOpen === false ? "" : "mr-4")}>
                  <Icon size={18} />
                </span>
                <p
                  className={cn(
                    "max-w-[200px] truncate",
                    isOpen === false ? "-translate-x-96 opacity-0" : "translate-x-0 opacity-100",
                  )}
                >
                  {label}
                </p>
              </Link.Internal>
            </Button>
          </Tooltip.Trigger>
          {isOpen === false && <Tooltip.Content side="right">{label}</Tooltip.Content>}
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  );
};
