import type { IStringExtension } from "./types";

export class StringExtension implements IStringExtension {
  public capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  public toString<T>(value: T): string {
    if (typeof value === "object") return JSON.stringify(value);

    return `${value}`;
  }

  public truncate(text: string, maxLength: number): string {
    if (text.length > maxLength) return `${text.slice(0, maxLength)} ...`;

    return text;
  }
}

export const stringExtension = new StringExtension();
