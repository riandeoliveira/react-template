import type { ComponentProps } from "react";
import { cn } from "@/utils/cn";

type CardProps = ComponentProps<"div">;

export const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "bg-card border-card-border border p-6 rounded-2xl",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
