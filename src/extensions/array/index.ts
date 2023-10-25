import type { IArrayExtension } from "./types";

export class ArrayExtension implements IArrayExtension {
  public lastElement<T>(array: T[]): T {
    return array[array.length - 1];
  }

  public removeMany<T>(array: T[], element: T): T[] {
    return array.filter((item) => item !== element);
  }

  public removeOne<T>(array: T[], element: T): T[] {
    const index: number = array.indexOf(element);

    if (index !== -1) array.splice(index, 1);

    return array;
  }

  public sortNumberList(array: number[]): number[] {
    return array.sort((a, b) => a - b);
  }

  public sortStringList(array: string[]): string[] {
    return array.sort((a, b) => a.localeCompare(b));
  }

  public sum(array: number[]): number {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
}

export const arrayExtension = new ArrayExtension();
