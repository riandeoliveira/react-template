import { cn } from "@/utilities/cn";
import { type HTMLAttributes, type ReactElement } from "react";
import { FieldContext } from "./context";

type FormAreaProps = HTMLAttributes<HTMLDivElement> & {
  hasErrors?: boolean;
};

export const FormArea = ({
  children,
  className,
  hasErrors,
  ...props
}: FormAreaProps): ReactElement => {
  return (
    <FieldContext.Provider value={{ hasErrors }}>
      <div className={cn("flex flex-col gap-2", className)} {...props}>
        {children}
      </div>
    </FieldContext.Provider>
  );
};
