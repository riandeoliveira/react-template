import type { ComponentProps } from "react";
import { cn } from "@/utils/cn";

type CardProps = ComponentProps<"div">;

export const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "bg-zinc-100 border-zinc-300 dark:bg-zinc-900 border dark:border-zinc-800 p-6 rounded-2xl",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
