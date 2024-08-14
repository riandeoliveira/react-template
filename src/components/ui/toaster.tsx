"use client";

import { toastStore } from "@/stores/toast-store";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { Toast } from "./toast";

export const Toaster = observer((): ReactElement => {
  return (
    <Toast.Provider>
      {toastStore.toasts.map(({ id, title, description, action, ...props }) => {
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
});
