export interface IObjectArrayExtension {
  /**
   * Sort an array of objects in ascending order or alphabetical order.
   */
  sort<T>(array: T[], property: keyof T): T[];
}
