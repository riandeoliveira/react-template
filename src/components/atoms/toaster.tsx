import type { CSSProperties } from "react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

export const Toaster = ({ ...props }: ToasterProps) => {
  const styles = {
    "--normal-bg": "var(--color-toast)",
    "--normal-text": "var(--color-toast-foreground)",
    "--normal-border": "var(--color-toast-border)",
  } as CSSProperties;

  return <Sonner position="top-right" style={styles} {...props} />;
};
