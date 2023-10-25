export class ArrayExtension {
  /**
   * Returns the last element of the array.
   */
  public lastElement<T>(array: T[]): T {
    return array[array.length - 1];
  }

  /**
   * Removes many elements from the array.
   */
  public removeMany<T>(array: T[], element: T): T[] {
    return array.filter((item) => item !== element);
  }

  /**
   * Removes an element from the array.
   */
  public removeOne<T>(array: T[], element: T): T[] {
    const index: number = array.indexOf(element);

    if (index !== -1) array.splice(index, 1);

    return array;
  }

  /**
   * Sort an array of numbers in ascending order.
   */
  public sortNumberList(array: number[]): number[] {
    return array.sort((a, b) => a - b);
  }

  /**
   * Sort an array of strings in alphabetical order.
   */
  public sortStringList(array: string[]): string[] {
    return array.sort((a, b) => a.localeCompare(b));
  }

  /**
   * Sum all elements of the array.
   */
  public sum(array: number[]): number {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
}

export const arrayExtension = new ArrayExtension();
