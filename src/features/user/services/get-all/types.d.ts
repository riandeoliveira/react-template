import type { AxiosResponse } from "axios";
import type { User } from "features/user/types";

export namespace GetAllUsersRequest {
  export interface Params {
    page?: string;
    per_page?: string;
  }

  export interface Result {
    data: User[];
    page: number;
    per_page: number;
    total_pages: number;
    total: number;
  }

  export interface Response extends AxiosResponse<Result> {}
}
