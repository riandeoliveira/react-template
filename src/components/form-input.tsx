import { cn } from "@/utilities/cn";
import type { FormikProps } from "formik";
import type { ReactElement } from "react";
import { HelperText } from "./helper-text";
import type { InputProps } from "./ui/input";
import { Input } from "./ui/input";

type FormInputProps = InputProps & {
  formInstance: FormikProps<any>;
  name: string;
};

export const FormInput = ({
  className,
  formInstance,
  name,
  ...props
}: FormInputProps): ReactElement => {
  const isInputTouched = formInstance?.touched[name];
  const inputErrors = formInstance?.errors[name];

  const hasErrors = isInputTouched && !!inputErrors;
  const helperText = (isInputTouched && inputErrors)?.toString();

  return (
    <div className="flex flex-col gap-2">
      <Input
        name={name}
        value={formInstance.values[name]}
        onChange={formInstance.handleChange}
        className={cn(hasErrors ? "border-red-500" : "border-input", className)}
        {...props}
      />
      {hasErrors && <HelperText>{helperText}</HelperText>}
    </div>
  );
};
