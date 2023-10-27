import { makeAutoObservable } from "mobx";
import type { User } from "./types";

export class UserStore {
  public current: User;
  public job: string;
  public list: User[];
  public name: string;

  public constructor() {
    this.current = {} as User;
    this.job = "";
    this.list = [];
    this.name = "";

    makeAutoObservable(this);
  }

  public setCurrent(current: User): void {
    this.current = current;
  }

  public setJob(job: string): void {
    this.job = job;
  }

  public setList(list: User[]): void {
    this.list = list;
  }

  public setName(name: string): void {
    this.name = name;
  }
}

export const userStore = new UserStore();
