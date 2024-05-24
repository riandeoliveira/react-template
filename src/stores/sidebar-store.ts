import { makeAutoObservable } from "mobx";

class SidebarStore {
  public isExpanded: boolean = true;

  public constructor() {
    makeAutoObservable(this);
  }

  public toggle = (): void => {
    this.isExpanded = !this.isExpanded;
  };
}

export const sidebarStore = new SidebarStore();
