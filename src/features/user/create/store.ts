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

  public setFormField(field: keyof CreateUserDTO.Form): void {
    this.form[field] = field;
  }
}

export const createUserStore = new CreateUserStore();
