import { makeAutoObservable } from "mobx";

class SidebarStore {
  public isExpanded: boolean = true;
  public isMoving: boolean = false;

  public constructor() {
    makeAutoObservable(this);
  }

  public setIsExpanded(isExpanded: boolean): void {
    this.isExpanded = isExpanded;
  }

  public setIsMoving(isMoving: boolean): void {
    this.isMoving = isMoving;
  }

  public toggleExpansion(): void {
    this.setIsExpanded(!this.isExpanded);
  }
}

export const sidebarStore = new SidebarStore();
