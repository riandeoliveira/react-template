import { makeAutoObservable } from "mobx";
import type { UserDTO } from "./types";

export class UserStore {
  public current: UserDTO.User;
  public list: UserDTO.User[];
  public selected: UserDTO.User;

  public constructor() {
    this.current = {
      avatar: "",
      email: "",
      first_name: "",
      id: 0,
      last_name: "",
    };
    this.list = [];
    this.selected = {
      avatar: "",
      email: "",
      first_name: "",
      id: 0,
      last_name: "",
    };

    makeAutoObservable(this);
  }

  public clearCurrent(): void {
    this.current = {
      avatar: "",
      email: "",
      first_name: "",
      id: 0,
      last_name: "",
    };
  }

  public setCurrent(current: UserDTO.User): void {
    this.current = current;
  }

  public setList(list: UserDTO.User[]): void {
    this.list = list;
  }

  public setSelected(selected: UserDTO.User): void {
    this.selected = selected;
  }
}

export const userStore = new UserStore();
