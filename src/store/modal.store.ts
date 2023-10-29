import { makeAutoObservable } from "mobx";

export type ModalType = "deleteUser";

export class ModalStore {
  public deleteUser: { isOpen: boolean };

  public constructor() {
    this.deleteUser = { isOpen: false };

    makeAutoObservable(this);
  }

  public close(modalType: ModalType): void {
    this[modalType].isOpen = false;
  }

  public open(modalType: ModalType): void {
    this[modalType].isOpen = true;
  }
}

export const modalStore = new ModalStore();
