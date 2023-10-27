import { makeAutoObservable } from "mobx";
import type { CreateUserDTO } from "./types";

export class CreateUserStore {
  public form: CreateUserDTO.Form;

  public constructor() {
    this.form = {
      job: "",
      name: "",
    };

    makeAutoObservable(this);
  }
}

export const createUserStore = new CreateUserStore();
