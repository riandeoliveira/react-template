export interface IArrayExtension {
  /**
   * Returns the last element of the array.
   */
  lastElement<T>(array: T[]): T;

  /**
   * Removes many elements from the array.
   */
  removeMany<T>(array: T[], element: T): T[];

  /**
   * Removes an element from the array.
   */
  removeOne<T>(array: T[], element: T): T[];

  /**
   * Sort an array of numbers in ascending order.
   */
  sortNumberList(array: number[]): number[];

  /**
   * Sort an array of strings in alphabetical order.
   */
  sortStringList(array: string[]): string[];

  /**
   * Sum all elements of the array.
   */
  sum(array: number[]): number;
}
