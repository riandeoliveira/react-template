import type { ILocalStorageExtension, LocalStorageKeys } from "./types";

export class LocalStorageExtension implements ILocalStorageExtension {
  private readonly storage: Storage = window.localStorage;

  public clear = (): void => {
    this.storage.clear();
  };

  public getItem<T>(key: LocalStorageKeys): T | null {
    const item: string | null = this.storage.getItem(key);

    try {
      if (item) return JSON.parse(item);

      return null;
    } catch {
      return null;
    }
  }

  public removeItem(key: LocalStorageKeys): void {
    this.storage.removeItem(key);
  }

  public setItem<T>(key: LocalStorageKeys, value: T): void {
    this.storage.setItem(key, JSON.stringify(value));
  }
}

export const localStorageExtension = new LocalStorageExtension();
