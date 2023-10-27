import type { AxiosResponse } from "axios";
import type { User } from "features/user/types";

export namespace GetOneUserRequest {
  export interface Result {
    data: User;
  }

  export interface Response extends AxiosResponse<Result> {}
}
