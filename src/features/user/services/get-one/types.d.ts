import type { AxiosResponse } from "axios";
import type { User } from "features/user/types";

export namespace GetOneUserDTO {
  export interface Result {
    data: User;
  }

  export interface Response extends AxiosResponse<Result> {}
}
