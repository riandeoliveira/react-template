import { makeAutoObservable } from "mobx";

class SidebarStore {
  public isOpen: boolean = false;

  public constructor() {
    makeAutoObservable(this);
  }

  public toggle(): void {
    this.isOpen = !this.isOpen;
  }
}

export const sidebarStore = new SidebarStore();
