import { makeAutoObservable } from "mobx";

export type DialogKey = "signOut";

export type DialogType = {
  isOpen: boolean;
};

class DialogStore {
  public readonly signOut: DialogType = { isOpen: false };

  public constructor() {
    makeAutoObservable(this);
  }

  public close = (dialogKey: DialogKey): void => {
    this[dialogKey].isOpen = false;
  };

  public open = (dialogKey: DialogKey): void => {
    this[dialogKey].isOpen = true;
  };
}

export const dialogStore = new DialogStore();
