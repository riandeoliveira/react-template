import { cn } from "@/utilities/cn";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { forwardRef } from "react";

type AvatarImageElement = ElementRef<typeof AvatarPrimitive.Image>;
type AvatarImageProps = ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>;

export const AvatarImage = forwardRef<AvatarImageElement, AvatarImageProps>(
  ({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
      ref={ref}
      className={cn("aspect-square h-full w-full", className)}
      {...props}
    />
  ),
);

AvatarImage.displayName = AvatarPrimitive.Image.displayName;
