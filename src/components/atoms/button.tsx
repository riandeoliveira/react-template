import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "px-3 py-2 font-semibold text-base cursor-pointer rounded-md disabled:opacity-60 disabled:cursor-not-allowed enabled:hover:transition-colors",
  {
    variants: {
      variant: {
        alert: "bg-red-600 text-white enabled:hover:bg-red-700/80",
        default:
          "bg-zinc-950 text-zinc-100 enabled:hover:bg-zinc-900/80 dark:bg-zinc-100 dark:text-zinc-950 enabled:hover:dark:bg-zinc-100/80",
        ghost:
          "enabled:hover:bg-zinc-200 dark:text-zinc-100 enabled:hover:dark:bg-zinc-800",
        outline:
          "border-zinc-400 enabled:hover:bg-zinc-200/60 dark:bg-zinc-900 dark:text-zinc-100 border dark:border-zinc-800 enabled:hover:dark:bg-zinc-900/60",
        secondary:
          "bg-zinc-200 enabled:hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-100 enabled:hover:dark:bg-zinc-800/60",
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
