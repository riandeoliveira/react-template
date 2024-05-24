import { localStorageExtension } from "@/extensions/local-storage";
import { makeAutoObservable } from "mobx";

export type Theme = "dark" | "light";

const bodyElement: HTMLElement = window.document.body;
const darkModeMediaQuery: MediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

class ThemeStore {
  public theme: Theme = this.getInitialTheme();

  public constructor() {
    darkModeMediaQuery.addEventListener("change", this.onDeviceThemeChange);

    makeAutoObservable(this);
  }

  private applyTheme(theme: Theme): void {
    bodyElement.classList.toggle("dark", theme === "dark");
  }

  private getInitialTheme(): Theme {
    const deviceTheme: Theme = darkModeMediaQuery.matches ? "dark" : "light";
    const storageTheme: Theme | null = this.getStoredTheme();

    const initialTheme: Theme = storageTheme || deviceTheme;

    this.applyTheme(initialTheme);

    return initialTheme;
  }

  public getStoredTheme(): Theme | null {
    return localStorageExtension.getItem<Theme>("theme");
  }

  private onDeviceThemeChange = (): void => {
    if (!this.getStoredTheme()) {
      const deviceTheme: Theme = darkModeMediaQuery.matches ? "dark" : "light";

      this.setTheme(deviceTheme);

      this.applyTheme(deviceTheme);
    }
  };

  public setDarkTheme(): void {
    this.updateTheme("dark");
  }

  public setLightTheme(): void {
    this.updateTheme("light");
  }

  public setSystemTheme(): void {
    localStorageExtension.removeItem("theme");

    this.onDeviceThemeChange();
  }

  private setTheme(theme: Theme): void {
    this.theme = theme;
  }

  private updateTheme(theme: Theme): void {
    this.theme = theme;

    this.applyTheme(theme);

    localStorageExtension.setItem("theme", theme);
  }
}

export const themeStore = new ThemeStore();
