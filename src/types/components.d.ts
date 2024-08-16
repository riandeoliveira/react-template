import type { ReactNode } from "react";

export type ParentComponentProps<T = ReactNode> = {
  children: T;
};
