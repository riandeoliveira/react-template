import { type ExternalToast, toast } from "sonner";
import { cn } from "@/utils/cn";

export const useToast = () => {
  const error = (message: string, data?: ExternalToast) => {
    toast.error(message, {
      ...data,
      className: cn("!bg-toast-error !border-toast-error", data?.className),
    });
  };

  const info = (message: string, data?: ExternalToast) => {
    toast.info(message, {
      ...data,
      className: cn("!bg-toast-info !border-toast-info", data?.className),
    });
  };

  const message = (message: string, data?: ExternalToast) => {
    toast.info(message, data);
  };

  const success = (message: string, data?: ExternalToast) => {
    toast.success(message, {
      ...data,
      className: cn("!bg-toast-success !border-toast-success", data?.className),
    });
  };

  const warning = (message: string, data?: ExternalToast) => {
    toast.warning(message, {
      ...data,
      className: cn("!bg-toast-warning !border-toast-warning", data?.className),
    });
  };

  return {
    error,
    info,
    message,
    success,
    warning,
  };
};
