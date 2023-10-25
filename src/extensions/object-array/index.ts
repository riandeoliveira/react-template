export class ObjectArrayExtension {
  /**
   * Sort an array of objects in ascending order or alphabetical order.
   */
  public sort<T>(array: T[], property: keyof T): T[] {
    const sortedArray: T[] = array.sort((a, b) => {
      const firstValue: T[keyof T] = a[property];
      const secondValue: T[keyof T] = b[property];

      if (typeof firstValue === "string" && typeof secondValue === "string") {
        return String(firstValue).localeCompare(String(secondValue));
      }

      if (typeof firstValue === "number" && typeof secondValue === "number") {
        return firstValue - secondValue;
      }

      return 0;
    });

    return sortedArray;
  }
}

export const objectArrayExtension = new ObjectArrayExtension();
