import { createContext, useContext } from "react";

export type FieldContextType = {
  hasErrors?: boolean;
};

export const FieldContext = createContext<FieldContextType | undefined>(undefined);

export const useField = (): FieldContextType => {
  const context = useContext(FieldContext);

  if (!context) {
    throw new Error("useField must be used within a Form.Area component");
  }

  return context;
};
