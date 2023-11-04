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

  public setForm(form: CreateUserDTO.Form): void {
    this.form = form;
  }
}

export const createUserStore = new CreateUserStore();
