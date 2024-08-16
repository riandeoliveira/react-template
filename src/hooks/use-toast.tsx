import type { ToastActionElement, ToastProps } from "@/components/ui/toast";
import { generateId } from "@/utilities/generate-id";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = ToastProps & {
  id: string;
  title?: ReactNode;
  description?: ReactNode;
  action?: ToastActionElement;
};

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: ToasterToast;
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      toastId?: ToasterToast["id"];
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      toastId?: ToasterToast["id"];
    };

interface State {
  toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string): void => {
  if (toastTimeouts.has(toastId)) return;

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);

    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
  if (action.type === "ADD_TOAST") {
    return {
      ...state,
      toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
    };
  }

  if (action.type === "UPDATE_TOAST") {
    const toastList = state.toasts.map((toast) => {
      if (toast.id === action.toast.id) {
        return {
          ...toast,
          ...action.toast,
        };
      }

      return toast;
    });

    return {
      ...state,
      toasts: toastList,
    };
  }

  if (action.type === "DISMISS_TOAST") {
    const { toastId } = action;

    if (toastId) addToRemoveQueue(toastId);
    else state.toasts.forEach((toast) => addToRemoveQueue(toast.id));

    const toastList = state.toasts.map((toast) => {
      if (toast.id === toastId || toastId === undefined) {
        return {
          ...toast,
          open: false,
        };
      }

      return toast;
    });

    return {
      ...state,
      toasts: toastList,
    };
  }

  if (action.type === "REMOVE_TOAST") {
    if (action.toastId === undefined) {
      return {
        ...state,
        toasts: [],
      };
    }

    return {
      ...state,
      toasts: state.toasts.filter((toast) => toast.id !== action.toastId),
    };
  }

  return { ...state };
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { toasts: [] };

const dispatch = (action: Action): void => {
  memoryState = reducer(memoryState, action);

  listeners.forEach((listener) => {
    listener(memoryState);
  });
};

type Toast = Omit<ToasterToast, "id">;

const toast = ({ ...props }: Toast) => {
  const id = generateId();

  const update = (props: ToasterToast): void => {
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    });
  };

  const dismiss = (): void => dispatch({ type: "DISMISS_TOAST", toastId: id });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
};

export const useToast = () => {
  const [state, setState] = useState<State>(memoryState);

  useEffect(() => {
    listeners.push(setState);

    return (): void => {
      const index = listeners.indexOf(setState);

      if (index > -1) listeners.splice(index, 1);
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
};
