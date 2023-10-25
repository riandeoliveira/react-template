import type { AxiosResponse } from "axios";
import type { User } from "features/user/types";

export namespace GetAllUsersRequest {
  export interface Result {
    data: User[];
    page: number;
    per_page: number;
    total_pages: number;
    total: number;
  }

  export interface Response extends AxiosResponse<Result> {}
}
