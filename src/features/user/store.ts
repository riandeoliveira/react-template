import { makeAutoObservable } from "mobx";
import type { UserDTO } from "./types";

export class UserStore {
  public current: UserDTO.User;
  public list: UserDTO.User[];

  public constructor() {
    this.current = {
      avatar: "",
      email: "",
      first_name: "",
      id: 0,
      last_name: "",
    };
    this.list = [];

    makeAutoObservable(this);
  }
}

export const userStore = new UserStore();
