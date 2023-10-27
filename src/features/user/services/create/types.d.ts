import type { AxiosResponse } from "axios";

export namespace CreateUserRequest {
  export interface Result {
    createdAt: string;
    id: string;
    job: string;
    name: string;
  }

  export interface Response extends AxiosResponse<Result> {}
}
