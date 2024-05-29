import { cn } from "@/lib/utils";
import type { FormEventHandler, FormHTMLAttributes, ReactElement, ReactNode } from "react";

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode;
  className: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

export const Form = ({ children, className, ...props }: FormProps): ReactElement => {
  return (
    <form noValidate className={cn("", className)} {...props}>
      {children}
    </form>
  );
};
