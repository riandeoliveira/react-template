import type { CreateToastFnReturn } from "@chakra-ui/react";

export class MainProvider {
  public toast: CreateToastFnReturn;

  public constructor() {
    this.toast = {} as CreateToastFnReturn;
  }

  public registerToastProvider(toast: CreateToastFnReturn): void {
    this.toast = toast;
  }
}

export const mainProvider = new MainProvider();
