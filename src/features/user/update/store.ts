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
}

export const updateUserStore = new UpdateUserStore();
