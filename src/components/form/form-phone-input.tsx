import { cn } from "@/utilities/cn";
import { type ReactElement } from "react";
import type { PatternFormatProps } from "react-number-format";
import { PatternFormat } from "react-number-format";
import { Input, type InputProps } from "../input";
import { useField } from "./context";

type FormPhoneProps = Omit<PatternFormatProps<InputProps>, "format">;

export const FormPhoneInput = ({ className, ...props }: FormPhoneProps): ReactElement => {
  const { hasErrors } = useField();

  return (
    <PatternFormat
      format="(##) #####-####"
      placeholder="(__) _____-____"
      mask={Array(11).fill("_")}
      customInput={Input}
      className={cn(hasErrors ? "border-red-500" : "border-input", className)}
      {...props}
    />
  );
};
