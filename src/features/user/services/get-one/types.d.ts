import type { AxiosResponse } from "axios";
import type { User } from "features/user/types";

export namespace GetOneUserDTO {
  interface Params {
    id: string;
  }

  interface Result {
    data: User;
  }

  interface Response extends AxiosResponse<Result> {}
}
