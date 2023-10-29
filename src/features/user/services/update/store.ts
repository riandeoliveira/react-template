import { makeAutoObservable } from "mobx";
import type { UpdateUserDTO } from "./types";

export class UpdateUserStore {
  public form: UpdateUserDTO.Form;
  public params: UpdateUserDTO.Params;

  public constructor() {
    this.form = {
      job: "",
      name: "",
    };
    this.params = {
      id: 0,
    };

    makeAutoObservable(this);
  }

  public setForm(form: UpdateUserDTO.Form): void {
    this.form = form;
  }

  public setFormField(field: keyof UpdateUserDTO.Form): void {
    this.form[field] = field;
  }

  public setParams(params: UpdateUserDTO.Params): void {
    this.params = params;
  }
}

export const updateUserStore = new UpdateUserStore();
