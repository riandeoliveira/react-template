import type { CreateToastFnReturn } from "@chakra-ui/react";
import type { NavigateFunction } from "react-router-dom";

export class MainProvider {
  public navigate: NavigateFunction;
  public toast: CreateToastFnReturn;

  public constructor() {
    this.navigate = (): void => {};
    this.toast = {} as CreateToastFnReturn;
  }

  public registerNavigateProvider(navigate: NavigateFunction): void {
    this.navigate = navigate;
  }

  public registerToastProvider(toast: CreateToastFnReturn): void {
    this.toast = toast;
  }
}

export const mainProvider = new MainProvider();
