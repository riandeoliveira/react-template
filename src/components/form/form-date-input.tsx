import { Icon } from "@/assets/icons";
import { cn } from "@/utilities/cn";
import { format, isValid, parse } from "date-fns";
import { useEffect, useRef, useState, type ReactElement } from "react";
import type { PatternFormatProps } from "react-number-format";
import { PatternFormat } from "react-number-format";
import { Calendar } from "../calendar";
import { Input, type InputProps } from "../input";
import { Popover } from "../popover";
import { useField } from "./context";

type FormDateInputProps = Omit<PatternFormatProps<InputProps>, "format"> & {
  dateValue?: Date;

  onChangeDate?: (date?: Date | null) => void;
  onClearDate?: () => void;
};

export const FormDateInput = ({
  className,
  dateValue,
  onChangeDate,
  onClearDate,
  ...props
}: FormDateInputProps): ReactElement => {
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const { hasErrors } = useField();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeCalendar = (): void => {
    setIsCalendarOpen((previousState) => !previousState);
  };

  useEffect(() => {
    if (isCalendarOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  }, [isCalendarOpen]);

  return (
    <Popover.Root open={isCalendarOpen} onOpenChange={handleChangeCalendar}>
      <Popover.Trigger onClick={handleChangeCalendar} className="relative">
        <PatternFormat
          format="##/##/####"
          placeholder="dd/mm/aaaa"
          autoComplete="off"
          mask={Array(8).fill("_")}
          customInput={Input}
          getInputRef={inputRef}
          className={cn("pl-10", hasErrors ? "border-red-500" : "border-input", className)}
          value={dateValue && format(dateValue, "dd/MM/yyyy")}
          onClick={handleChangeCalendar}
          onChange={(event) => {
            const formattedDate: string = event.target.value;
            const newDate: Date = parse(formattedDate, "dd/MM/yyyy", new Date());
            const validDate: Date | null = isValid(newDate) ? newDate : null;

            if (formattedDate.length === 0) onClearDate?.();
            else onChangeDate?.(validDate);
          }}
          {...props}
        />
        <Icon.Calendar
          onClick={handleChangeCalendar}
          className="h-4 w-4 translate-y-[-28px] translate-x-[15px] absolute"
        />
      </Popover.Trigger>
      <Popover.Content className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          onSelect={(date) => onChangeDate?.(date)}
          selected={dateValue}
          initialFocus
        />
      </Popover.Content>
    </Popover.Root>
  );
};
