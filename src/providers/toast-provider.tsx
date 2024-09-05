import { useToast } from "@/hooks/use-toast";
import type { ReactElement } from "react";
import { Toast } from "../components/toast";

export const ToastProvider = (): ReactElement => {
  const { toasts } = useToast();

  return (
    <Toast.Provider>
      {toasts.map(({ id, title, description, action, ...props }) => {
        return (
          <Toast.Root key={id} {...props}>
            <div className="grid gap-1">
              {title && <Toast.Title>{title}</Toast.Title>}
              {description && <Toast.Description>{description}</Toast.Description>}
            </div>
            {action}
            <Toast.Close />
          </Toast.Root>
        );
      })}
      <Toast.Viewport />
    </Toast.Provider>
  );
};
