export interface IConsoleExtension {
  /**
   * Logs the provided value in a structured JSON format with proper indentation.
   */
  logJSON<T>(value: T): void;
}
