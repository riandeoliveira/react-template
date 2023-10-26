import { makeAutoObservable } from "mobx";
import type { User } from "./types";

export class UserStore {
  public page: string;
  public perPage: string;
  public list: User[];

  public constructor() {
    this.page = "";
    this.perPage = "";
    this.list = [];

    makeAutoObservable(this);
  }

  public setPage(page: string): void {
    this.page = page;
  }

  public setPerPage(perPage: string): void {
    this.perPage = perPage;
  }

  public setList(list: User[]): void {
    this.list = list;
  }
}

export const userStore = new UserStore();
