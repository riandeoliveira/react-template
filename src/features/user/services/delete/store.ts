import { makeAutoObservable } from "mobx";
import type { DeleteUserDTO } from "./types";

export class DeleteUserStore {
  public params: DeleteUserDTO.Params;

  public constructor() {
    this.params = {
      id: 0,
    };

    makeAutoObservable(this);
  }

  public setParams(params: DeleteUserDTO.Params): void {
    this.params = params;
  }
}

export const deleteUserStore = new DeleteUserStore();
