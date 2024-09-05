import { Icon } from "@/assets/icons";
import { cn } from "@/utilities/cn";
import { useState, type ReactElement } from "react";
import { Button } from "../button";
import { Command } from "../command";
import { Popover } from "../popover";

type FormAutocompleteItem = {
  value: string;
  label: string;
};

type FormAutocompleteProps = {
  disabled?: boolean;
  items: FormAutocompleteItem[];
  notFoundMessage?: string;
  searchMessage?: string;
  selectMessage?: string;
  value: string;

  onSelect: (value: string) => void;
};

export const FormAutocomplete = ({
  disabled,
  items,
  notFoundMessage = "No items found.",
  onSelect,
  searchMessage = "Search item...",
  selectMessage = "Select item...",
  value,
}: FormAutocompleteProps): ReactElement => {
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
