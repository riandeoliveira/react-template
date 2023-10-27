import type { AxiosResponse } from "axios";
import type { User } from "features/user/types";

export namespace GetAllUsersDTO {
  interface Params {
    page?: string;
    per_page?: string;
  }

  interface Result {
    data: User[];
    page: number;
    per_page: number;
    total_pages: number;
    total: number;
  }

  interface Response extends AxiosResponse<Result> {}
}
