import { cn } from "@/utilities/cn";
import { type ReactElement } from "react";
import { Input, type InputProps } from "../input";
import { useField } from "./context";

type FormTextInputProps = InputProps;

export const FormTextInput = ({ className, ...props }: FormTextInputProps): ReactElement => {
  const { hasErrors } = useField();

  return (
    <Input
      type="text"
      className={cn(hasErrors ? "border-red-500" : "border-input", className)}
      {...props}
    />
  );
};
