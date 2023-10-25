export interface IStringExtension {
  /**
   * Makes the first letter of a string capitalized.
   */
  capitalize(text: string): string;

  /**
   * Converts any value to a string representation.
   */
  toString<T>(value: T): string;

  /**
   * Truncates a string if it exceeds the specified maximum length.
   */
  truncate(text: string, maxLength: number): string;
}
