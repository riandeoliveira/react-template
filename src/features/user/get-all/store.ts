import { queryParamExtension } from "extensions/query-param";
import { makeAutoObservable } from "mobx";
import type { GetAllUsersDTO } from "./types";

export class GetAllUsersStore {
  private params: GetAllUsersDTO.Params;

  public constructor() {
    this.params = {
      page: "",
      per_page: "",
    };

    makeAutoObservable(this);
  }

  public getParams(): string {
    return queryParamExtension.toQuery(this.params);
  }

  public setParams(params: GetAllUsersDTO.Params): void {
    this.params = params;
  }
}

export const getAllUsersStore = new GetAllUsersStore();
