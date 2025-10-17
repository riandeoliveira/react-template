import {
  type ComponentProps,
  createContext,
  useContext,
  useState,
} from "react";
import { Icon } from "@/assets";
import { useI18n } from "@/hooks/use-i18n";
import { cn } from "@/utils/cn";

type InputContextType = {
  hasErrors: boolean;
};

const InputContext = createContext<InputContextType | undefined>(undefined);

const useInput = () => {
  const context = useContext(InputContext);

  if (!context) {
    throw new Error("useInput must be used within a Input.Root component");
  }

  return context;
};

type EmailInputProps = Omit<ComponentProps<"input">, "type">;

const EmailInput = ({ className, ...props }: EmailInputProps) => {
  const { hasErrors } = useInput();

  return (
    <input
      type="email"
      className={cn(
        "bg-input text-input-foreground enabled:hover:bg-input-hover px-3 py-2 rounded-md w-full outline-none border disabled:cursor-not-allowed disabled:opacity-80 enabled:hover:transition-colors",
        hasErrors ? "border-input-error" : "border-input-border",
        className,
      )}
      {...props}
    />
  );
};

type ErrorMessageProps = ComponentProps<"span">;

const ErrorMessage = ({ children, className, ...props }: ErrorMessageProps) => {
  const { hasErrors } = useInput();

  if (!hasErrors) return null;

  return (
    <span
      className={cn("text-input-error text-xs font-semibold", className)}
      {...props}
    >
      {children}
    </span>
  );
};

type LabelProps = ComponentProps<"label">;

const Label = ({ children, className, htmlFor, ...props }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("text-sm font-semibold", className)}
      {...props}
    >
      {children}
    </label>
  );
};

type PasswordInputProps = Omit<ComponentProps<"input">, "type">;

const PasswordInput = ({ className, ...props }: PasswordInputProps) => {
  const { hasErrors } = useInput();
  const { t } = useI18n();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="relative">
      <input
        type={isPasswordVisible ? "text" : "password"}
        className={cn(
          "bg-input text-input-foreground enabled:hover:bg-input-hover px-3 py-2 rounded-md w-full outline-none pr-14 border disabled:cursor-not-allowed disabled:opacity-80 enabled:hover:transition-colors",
          hasErrors ? "border-input-error" : "border-input-border",
          className,
        )}
        {...props}
      />
      <button
        type="button"
        aria-label={isPasswordVisible ? t("hide_password") : t("show_password")}
        disabled={props.disabled}
        onClick={() => setIsPasswordVisible((prev) => !prev)}
        className="absolute right-4 translate-y-2/5 cursor-pointer disabled:cursor-not-allowed disabled:opacity-80"
      >
        {isPasswordVisible ? (
          <Icon.EyeOff className="text-zinc-500" />
        ) : (
          <Icon.Eye className="text-zinc-500" />
        )}
      </button>
    </div>
  );
};

type RootInputProps = ComponentProps<"div"> & Partial<InputContextType>;

const RootInput = ({
  children,
  className,
  hasErrors = false,
  ...props
}: RootInputProps) => {
  return (
    <InputContext.Provider value={{ hasErrors }}>
      <div className={cn("flex flex-col gap-1")} {...props}>
        {children}
      </div>
    </InputContext.Provider>
  );
};

type TextAreaInputProps = ComponentProps<"textarea">;

const TextAreaInput = ({ className, ...props }: TextAreaInputProps) => {
  const { hasErrors } = useInput();

  return (
    <textarea
      className={cn(
        "bg-input text-input-foreground enabled:hover:bg-input-hover px-3 py-2 rounded-md w-full outline-none border h-32 resize-none disabled:cursor-not-allowed disabled:opacity-80 enabled:hover:transition-colors",
        hasErrors ? "border-input-error" : "border-input-border",
        className,
      )}
      {...props}
    />
  );
};

type TextInputProps = Omit<ComponentProps<"input">, "type">;

const TextInput = ({ className, ...props }: TextInputProps) => {
  const { hasErrors } = useInput();

  return (
    <input
      type="text"
      className={cn(
        "bg-input text-input-foreground enabled:hover:bg-input-hover px-3 py-2 rounded-md w-full outline-none border disabled:cursor-not-allowed disabled:opacity-80 enabled:hover:transition-colors",
        hasErrors ? "border-input-error" : "border-input-border",
        className,
      )}
      {...props}
    />
  );
};

export const Input = {
  Email: EmailInput,
  ErrorMessage,
  Label,
  Password: PasswordInput,
  Root: RootInput,
  Text: TextInput,
  TextArea: TextAreaInput,
};
