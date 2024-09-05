import { cn } from "@/utilities/cn";
import { type HTMLAttributes, type ReactElement } from "react";
import { useField } from "./context";

type FormErrorMessageProps = HTMLAttributes<HTMLSpanElement>;

export const FormErrorMessage = ({
  children,
  className,
  ...props
}: FormErrorMessageProps): ReactElement => {
  const { hasErrors } = useField();

  return (
    <>
      {hasErrors && (
        <span className={cn("text-red-500 text-sm", className)} {...props}>
          {children}
        </span>
      )}
    </>
  );
};
