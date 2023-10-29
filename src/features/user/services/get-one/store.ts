import { makeAutoObservable } from "mobx";
import type { GetOneUserDTO } from "./types";

export class GetOneUserStore {
  public params: GetOneUserDTO.Params;

  public constructor() {
    this.params = {
      id: 0,
    };

    makeAutoObservable(this);
  }

  public setParams(params: GetOneUserDTO.Params): void {
    this.params = params;
  }
}

export const getOneUserStore = new GetOneUserStore();
