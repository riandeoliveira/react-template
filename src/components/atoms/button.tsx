import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "px-3 py-2 font-semibold text-base cursor-pointer rounded-md disabled:opacity-60 disabled:cursor-not-allowed enabled:hover:transition-colors",
  {
    variants: {
      variant: {
        alert: "bg-alert text-alert-foreground enabled:hover:bg-alert-hover",
        default:
          "bg-default text-default-foreground enabled:hover:bg-default-hover",
        ghost: "bg-ghost text-ghost-foreground enabled:hover:bg-ghost-hover",
        outline:
          "bg-outline text-outline-foreground border-outline-border enabled:hover:bg-outline-hover border",
        secondary:
          "bg-secondary text-secondary-foreground enabled:hover:bg-secondary-hover",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

export const Button = ({
  children,
  variant,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    >
      {children}
    </button>
  );
};
