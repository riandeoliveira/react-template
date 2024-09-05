import { cn } from "@/utilities/cn";
import { type ReactElement } from "react";
import type { PatternFormatProps } from "react-number-format";
import { PatternFormat } from "react-number-format";
import { Input, type InputProps } from "../input";
import { useField } from "./context";

type FormCpfInputProps = Omit<PatternFormatProps<InputProps>, "format">;

export const FormCpfInput = ({ className, ...props }: FormCpfInputProps): ReactElement => {
  const { hasErrors } = useField();

  return (
    <PatternFormat
      format="###.###.###-##"
      placeholder="___.___.___-__"
      mask={Array(11).fill("_")}
      customInput={Input}
      className={cn(hasErrors ? "border-red-500" : "border-input", className)}
      {...props}
    />
  );
};
