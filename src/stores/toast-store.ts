import type { ToastActionElement, ToastProps } from "@/components/ui/toast";
import { ResponseMessages, type ResponseMessagesKey } from "@/enums/response-messages";
import { generateId } from "@/utilities/generate-id";
import { makeAutoObservable } from "mobx";
import type { ReactNode } from "react";

type ToasterToast = ToastProps & {
  id: string;
  title: ReactNode;
  description: ReactNode;
  action?: ToastActionElement;
};

type Toast = Omit<ToasterToast, "id">;

type ToastType = {
  id: string;
  dismiss: () => void;
  update: (props: ToasterToast) => void;
};

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

class ToastStore {
  public toasts: ToasterToast[] = [];

  public constructor() {
    makeAutoObservable(this);
  }

  public error(type: ResponseMessagesKey, description: string): void {
    this.show({
      variant: "destructive",
      title: ResponseMessages[type],
      description,
    });
  }

  public success(type: ResponseMessagesKey, description: string): void {
    this.show({
      variant: "success",
      title: ResponseMessages[type],
      description,
    });
  }

  public warning(type: ResponseMessagesKey, description: string): void {
    this.show({
      variant: "warning",
      title: ResponseMessages[type],
      description,
    });
  }

  private add(toast: ToasterToast): void {
    if (this.toasts.length >= TOAST_LIMIT) this.toasts.shift();

    this.toasts.push(toast);
  }

  private addToRemoveQueue(toastId: string): void {
    if (toastTimeouts.has(toastId)) return;

    const timeout = setTimeout(() => {
      toastTimeouts.delete(toastId);
      toastStore.remove(toastId);
    }, TOAST_REMOVE_DELAY);

    toastTimeouts.set(toastId, timeout);
  }

  private dismiss(toastId?: string): void {
    if (toastId) {
      this.toasts = this.toasts.map((toast) =>
        toast.id === toastId ? { ...toast, open: false } : toast,
      );

      this.addToRemoveQueue(toastId);

      return;
    }

    this.toasts.forEach((toast) => this.addToRemoveQueue(toast.id));

    this.toasts = this.toasts.map((toast) => ({ ...toast, open: false }));
  }

  private remove(toastId?: string): void {
    if (toastId) {
      this.toasts = this.toasts.filter((toast) => toast.id !== toastId);

      return;
    }

    this.toasts = [];
  }

  private show({ ...props }: Toast): ToastType {
    const id = generateId();

    const update = (props: ToasterToast): void => this.update({ ...props, id });

    const dismiss = (): void => this.dismiss(id);

    this.add({
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    });

    return {
      id: id,
      dismiss,
      update,
    };
  }

  private update(toast: Partial<ToasterToast> & { id: string }): void {
    const index = this.toasts.findIndex((item) => item.id === toast.id);

    if (index !== -1) {
      this.toasts[index] = {
        ...this.toasts[index],
        ...toast,
      };
    }
  }
}

export const toastStore = new ToastStore();
