import { makeAutoObservable } from "mobx";
import type { User } from "./types";

export class UserStore {
  public list: User[];

  public constructor() {
    this.list = [];

    makeAutoObservable(this);
  }

  public setList(list: User[]): void {
    this.list = list;
  }
}

export const userStore = new UserStore();
