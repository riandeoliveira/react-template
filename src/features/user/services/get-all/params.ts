import { queryParamExtension } from "extensions/query-param";
import type { GetAllUsersRequest } from "./types";

export class GetAllUsersParams {
  private params: GetAllUsersRequest.Params;

  public constructor() {
    this.params = {
      page: "",
      per_page: "",
    };
  }

  public getParams(): string {
    return queryParamExtension.toQuery(this.params);
  }

  public setParams(params: GetAllUsersRequest.Params): void {
    this.params = params;
  }
}

export const getAllUsersParams = new GetAllUsersParams();
