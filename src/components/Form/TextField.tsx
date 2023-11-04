import type { InputProps } from "@chakra-ui/react";
import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import type { FormikProps } from "formik";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";

interface TextFieldProps extends InputProps {
  field: string;
  label: string;
  model: FormikProps<any>;
}

export const TextField = observer(
  ({ field, label, model, ...rest }: TextFieldProps): ReactElement => {
    return (
      <FormControl isInvalid={model.touched[field] && Boolean(model.errors[field])}>
        <FormLabel htmlFor={field}>{label}</FormLabel>
        <Input
          type="text"
          name={field}
          title={label}
          value={model.values[field]}
          onChange={model.handleChange}
          {...rest}
        />
        <FormErrorMessage>{model.errors[field]?.toString()}</FormErrorMessage>
      </FormControl>
    );
  },
);
