import { makeAutoObservable } from "mobx";
import type { User } from "./types";

export class UserStore {
  public current: User;
  public list: User[];

  public constructor() {
    this.current = {} as User;
    this.list = [];

    makeAutoObservable(this);
  }

  public setCurrent(current: User): void {
    this.current = current;
  }

  public setList(list: User[]): void {
    this.list = list;
  }
}

export const userStore = new UserStore();
