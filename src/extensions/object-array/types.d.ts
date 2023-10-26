export interface IObjectArrayExtension {
  /**
   * Sort an array of objects in ascending order or alphabetical order.
   */
  sort<T extends object>(array: T[], property: keyof T): T[];
}
