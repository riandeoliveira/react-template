import type { IConsoleExtension } from "./types";

export class ConsoleExtension implements IConsoleExtension {
  public logJSON<T>(value: T): void {
    console.log(JSON.stringify(value, null, 2));
  }
}

export const consoleExtension = new ConsoleExtension();
