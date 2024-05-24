export type LocalStorageKeys = "theme";

export interface ILocalStorageExtension {
  /**
   * Clears all items from the localStorage.
   */
  clear(): void;

  /**
   * Retrieves an item from the localStorage using a key.
   * @param key - The key of the item to retrieve.
   * @returns The item's value as the generic type T or null if the item does not exist or if there's an error parsing the stored value.
   */
  getItem<T>(key: LocalStorageKeys): T | null;

  /**
   * Stores an item in the localStorage with a specified key.
   * @param key - The key under which to store the item.
   * @param value - The value to store. It will be converted to a JSON string before storage.
   */
  setItem<T>(key: LocalStorageKeys, value: T): void;
}
