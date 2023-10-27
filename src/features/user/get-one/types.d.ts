import type { AxiosResponse } from "axios";
import type { User } from "features/user/types";

export namespace GetOneUserDTO {
  interface Params {
    id: number;
  }

  interface Result {
    data: User;
  }

  interface Response extends AxiosResponse<Result> {}
}
