import { cn } from "@/utilities/cn";
import { type ReactElement } from "react";
import type { PatternFormatProps } from "react-number-format";
import { PatternFormat } from "react-number-format";
import { Input, type InputProps } from "../input";
import { useField } from "./context";

type FormCepInputProps = Omit<PatternFormatProps<InputProps>, "format">;

export const FormCepInput = ({ className, ...props }: FormCepInputProps): ReactElement => {
  const { hasErrors } = useField();

  return (
    <PatternFormat
      format="#####-###"
      placeholder="_____-___"
      mask={Array(8).fill("_")}
      customInput={Input}
      className={cn(hasErrors ? "border-red-500" : "border-input", className)}
      {...props}
    />
  );
};
