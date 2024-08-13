import { cn } from "@/utilities/cn";
import type { TextFieldProps } from "@mui/material";
import { TextField } from "@mui/material";
import type { FormikProps } from "formik";
import type { ReactElement } from "react";

export type InputProps = TextFieldProps & {
  formInstance?: FormikProps<any>;
};

export const Input = ({
  className,
  name = "",
  formInstance,
  ...props
}: InputProps): ReactElement => {
  const isInputTouched = formInstance?.touched[name];
  const inputErrors = formInstance?.errors[name];

  return (
    <TextField
      type="text"
      name={name}
      value={formInstance?.values[name] ?? undefined}
      onChange={formInstance?.handleChange}
      error={isInputTouched && !!inputErrors}
      helperText={(isInputTouched && inputErrors)?.toString()}
      FormHelperTextProps={{ className: "!ml-0" }}
      className={cn("w-full", className)}
      {...props}
    />
  );
};
