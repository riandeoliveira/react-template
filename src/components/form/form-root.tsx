import { cn } from "@/utilities/cn";
import type { FormHTMLAttributes, ReactElement } from "react";
import type { FieldContextType } from "./context";

type FormRootProps = FormHTMLAttributes<HTMLFormElement> & FieldContextType;

export const FormRoot = ({ className, children, ...props }: FormRootProps): ReactElement => {
  return (
    <form noValidate className={cn(className)} {...props}>
      {children}
    </form>
  );
};
