import { cn } from "@/utilities/cn";
import { type LabelHTMLAttributes, type ReactElement } from "react";

type FormLabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export const FormLabel = ({ children, className, ...props }: FormLabelProps): ReactElement => {
  return (
    <label className={cn("text-sm", className)} {...props}>
      {children}
    </label>
  );
};
