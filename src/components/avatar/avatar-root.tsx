import { cn } from "@/utilities/cn";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type AvatarRootElement = ElementRef<typeof AvatarPrimitive.Root>;
type AvatarRootProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>;

export const AvatarRoot = forwardRef<AvatarRootElement, AvatarRootProps>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
      {...props}
    />
  ),
);

AvatarRoot.displayName = AvatarPrimitive.Root.displayName;
