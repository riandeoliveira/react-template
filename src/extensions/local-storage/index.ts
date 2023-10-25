import type { LocalStorageKeys } from "types/local-storage";
import { BaseLocalStorageExtension } from "../../extensions/local-storage/base";

export class LocalStorageExtension extends BaseLocalStorageExtension {
  public getAccessToken(): string {
    const token: string | null = this.getItem<LocalStorageKeys, string>("access_token");

    if (token && typeof token === "string") {
      return token;
    }

    return "";
  }

  public setAccessToken(accessToken: string): void {
    this.setItem<LocalStorageKeys, string>("access_token", accessToken);
  }
}

export const localStorageExtension = new LocalStorageExtension();
