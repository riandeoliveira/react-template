import type { CSSProperties } from "react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

export const Toaster = ({ ...props }: ToasterProps) => {
  const styles = {
    "--normal-bg": "#18181b", // bg-zinc-900
    "--normal-text": "#f4f4f5", // text-zinc-100
    "--normal-border": "#27272a", // border-zinc-800
  } as CSSProperties;

  return <Sonner position="top-right" style={styles} {...props} />;
};
