import { Icon } from "@/assets/icons";
import { cn } from "@/utilities/cn";
import { format, isValid, parse } from "date-fns";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type FormHTMLAttributes,
  type HTMLAttributes,
  type LabelHTMLAttributes,
  type ReactElement,
} from "react";
import type { PatternFormatProps } from "react-number-format";
import { PatternFormat } from "react-number-format";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Command } from "../ui/command";
import { Input, type InputProps } from "../ui/input";
import { Popover } from "../ui/popover";

type FieldContextType = {
  hasErrors?: boolean;
};

const FieldContext = createContext<FieldContextType | undefined>(undefined);

export const useField = (): FieldContextType => {
  const context = useContext(FieldContext);

  if (!context) {
    throw new Error("useField must be used within a Form.Area component");
  }

  return context;
};

type RootProps = FormHTMLAttributes<HTMLFormElement> & FieldContextType;

const Root = ({ className, children, ...props }: RootProps): ReactElement => {
  return (
    <form noValidate className={cn(className)} {...props}>
      {children}
    </form>
  );
};

type AreaProps = HTMLAttributes<HTMLDivElement> & {
  hasErrors: boolean;
};

const Area = ({ children, className, hasErrors = false, ...props }: AreaProps): ReactElement => {
  return (
    <FieldContext.Provider value={{ hasErrors }}>
      <div className={cn("flex flex-col gap-2", className)} {...props}>
        {children}
      </div>
    </FieldContext.Provider>
  );
};

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

const Label = ({ children, className, ...props }: LabelProps): ReactElement => {
  return (
    <label className={cn("text-sm", className)} {...props}>
      {children}
    </label>
  );
};

type TextInputProps = InputProps;

const TextInput = ({ className, ...props }: TextInputProps): ReactElement => {
  const { hasErrors } = useField();

  return (
    <Input
      type="text"
      className={cn(hasErrors ? "border-red-500" : "border-input", className)}
      {...props}
    />
  );
};

type DateInputProps = Omit<PatternFormatProps<InputProps>, "format"> & {
  dateValue?: Date;
  onChangeDate?: (date?: Date | null) => void;
  onClearDate?: () => void;
};

const DateInput = ({
  className,
  dateValue,
  onChangeDate,
  onClearDate,
  ...props
}: DateInputProps): ReactElement => {
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

type CepInputProps = Omit<PatternFormatProps<InputProps>, "format">;

const CepInput = ({ className, ...props }: CepInputProps): ReactElement => {
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

type CpfInputProps = Omit<PatternFormatProps<InputProps>, "format">;

const CpfInput = ({ className, ...props }: CpfInputProps): ReactElement => {
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

type PhoneProps = Omit<PatternFormatProps<InputProps>, "format">;

const PhoneInput = ({ className, ...props }: PhoneProps): ReactElement => {
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

type AutocompleteItem = {
  value: string;
  label: string;
};

type AutocompleteProps = {
  disabled?: boolean;
  items: AutocompleteItem[];
  notFoundMessage?: string;
  searchMessage?: string;
  selectMessage?: string;
  value: string;

  onSelect: (value: string) => void;
};

const Autocomplete = ({
  disabled,
  items,
  notFoundMessage = "No items found.",
  onSelect,
  searchMessage = "Search item...",
  selectMessage = "Select item...",
  value,
}: AutocompleteProps): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelectItem = (currentItem: string): void => {
    const selectedItem = items.find((item) => item.label === currentItem)?.value;

    onSelect(selectedItem ? selectedItem : "");

    setIsOpen(false);
  };

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={isOpen}
          disabled={disabled}
          className="justify-between"
        >
          {value !== "" ? items.find((item) => item.value === value)?.label : selectMessage}
          <Icon.ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </Popover.Trigger>
      <Popover.Content className="p-0">
        <Command.Root>
          <Command.Input placeholder={searchMessage} className="h-9" />
          <Command.List>
            <Command.Empty>{notFoundMessage}</Command.Empty>
            <Command.Group>
              {items.map((item) => (
                <Command.Item key={item.value} value={item.label} onSelect={handleSelectItem}>
                  {item.label}
                  <Icon.Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === item.label ? "opacity-100" : "opacity-0",
                    )}
                  />
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command.Root>
      </Popover.Content>
    </Popover.Root>
  );
};

type ErrorMessageProps = HTMLAttributes<HTMLSpanElement>;

const ErrorMessage = ({ children, className, ...props }: ErrorMessageProps): ReactElement => {
  const { hasErrors } = useField();

  return (
    <>
      {hasErrors && (
        <span className={cn("text-red-500 text-sm", className)} {...props}>
          {children}
        </span>
      )}
    </>
  );
};

export const Form = {
  Area,
  Autocomplete,
  CepInput,
  CpfInput,
  DateInput,
  ErrorMessage,
  Label,
  PhoneInput,
  Root,
  TextInput,
};
