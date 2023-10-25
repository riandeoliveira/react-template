export class StringExtension {
  /**
   * Makes the first letter of a string capitalized.
   */
  public capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  /**
   * Converts any value to a string representation.
   */
  public toString<T>(value: T): string {
    if (typeof value === "object") return JSON.stringify(value);

    return `${value}`;
  }

  /**
   * Truncates a string if it exceeds the specified maximum length.
   */
  public truncate(text: string, maxLength: number): string {
    if (text.length > maxLength) return `${text.slice(0, maxLength)} ...`;

    return text;
  }
}

export const stringExtension = new StringExtension();
