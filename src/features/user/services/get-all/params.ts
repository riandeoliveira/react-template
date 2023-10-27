import { queryParamExtension } from "extensions/query-param";
import type { GetAllUsersDTO } from "./types";

export class GetAllUsersParams {
  private params: GetAllUsersDTO.Params;

  public constructor() {
    this.params = {
      page: "",
      per_page: "",
    };
  }

  public getParams(): string {
    return queryParamExtension.toQuery(this.params);
  }

  public setParams(params: GetAllUsersDTO.Params): void {
    this.params = params;
  }
}

export const getAllUsersParams = new GetAllUsersParams();
