import { cn } from "@/utilities/cn";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type AvatarFallbackElement = ElementRef<typeof AvatarPrimitive.Fallback>;
type AvatarFallbackProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>;

export const AvatarFallback = forwardRef<AvatarFallbackElement, AvatarFallbackProps>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted",
        className,
      )}
      {...props}
    />
  ),
);

AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
