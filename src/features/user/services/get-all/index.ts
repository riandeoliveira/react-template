import { reqresAPI } from "apis/reqres";
import type { GetAllUsersRequest } from "./types";

class GetAllUsersService {
  public async handle(): Promise<GetAllUsersRequest.Result> {
    try {
      const response: GetAllUsersRequest.Response = await reqresAPI.get("/users?page=2");

      return response.data;
    } catch (error) {
      console.error(error);

      return {} as GetAllUsersRequest.Result;
    }
  }
}

export const getAllUsersService = new GetAllUsersService();
