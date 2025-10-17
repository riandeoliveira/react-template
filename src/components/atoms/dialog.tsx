import { AnimatePresence, motion } from "framer-motion";
import {
  type ComponentProps,
  createContext,
  type ReactNode,
  useContext,
} from "react";
import { Icon } from "@/assets";
import { Button, type ButtonProps } from "@/components/atoms/button";
import { cn } from "@/utils/cn";

type DialogContextType = {
  onClose: () => void;
};

const DialogContext = createContext<DialogContextType | undefined>(undefined);

const useDialog = () => {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error("useDialog must be used within a Dialog.Root component");
  }

  return context;
};

type DialogCancelActionProps = ButtonProps;

const DialogCancelAction = ({
  children,
  ...props
}: DialogCancelActionProps) => {
  const { onClose } = useDialog();

  return (
    <Button variant="ghost" onClick={onClose} {...props}>
      {children}
    </Button>
  );
};

type DialogConfirmActionProps = ButtonProps;

const DialogConfirmAction = ({
  children,
  ...props
}: DialogConfirmActionProps) => {
  return <Button {...props}>{children}</Button>;
};

type DialogContentProps = ComponentProps<"div">;

const DialogContent = ({ children, ...props }: DialogContentProps) => {
  return <div {...props}>{children}</div>;
};

type DialogDescriptionProps = ComponentProps<"p">;

const DialogDescription = ({
  children,
  className,
  ...props
}: DialogDescriptionProps) => {
  return (
    <p className={cn("text-muted", className)} {...props}>
      {children}
    </p>
  );
};

type DialogFooterProps = ComponentProps<"div">;

const DialogFooter = ({ children, className, ...props }: DialogFooterProps) => {
  return (
    <div
      className={cn("flex justify-end items-center gap-2", className)}
      {...props}
    >
      {children}
    </div>
  );
};

type DialogHeaderProps = ComponentProps<"div">;

const DialogHeader = ({ children, className, ...props }: DialogHeaderProps) => {
  const { onClose } = useDialog();

  return (
    <div className={cn("flex items-center", className)} {...props}>
      <span className="text-xl font-semibold">{children}</span>
      <Button
        variant="ghost"
        onClick={onClose}
        className="absolute top-2 right-2 p-2 rounded-full"
      >
        <Icon.X className="text-muted" />
      </Button>
    </div>
  );
};

type DialogRootProps = {
  children?: ReactNode;
  className?: string;
  isOpen: boolean;
} & DialogContextType;

const DialogRoot = ({
  children,
  className,
  isOpen,
  onClose,
}: DialogRootProps) => {
  return (
    <DialogContext.Provider value={{ onClose }}>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <button
              type="button"
              onClick={onClose}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "bg-card border-card relative z-50 w-full max-w-lg rounded-2xl border shadow-xl p-6 m-6 flex flex-col gap-6",
                className,
              )}
            >
              {children}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </DialogContext.Provider>
  );
};

export const Dialog = {
  CancelAction: DialogCancelAction,
  ConfirmAction: DialogConfirmAction,
  Content: DialogContent,
  Description: DialogDescription,
  Footer: DialogFooter,
  Header: DialogHeader,
  Root: DialogRoot,
};
