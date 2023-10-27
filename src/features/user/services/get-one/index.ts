import { reqresAPI } from "apis/reqres";
import type { User } from "../../types";
import type { GetOneUserRequest } from "./types";

export class GetOneUserService {
  public async handle(id: number): Promise<User> {
    try {
      const response: GetOneUserRequest.Response = await reqresAPI.get(`/users/${id}`);

      return response.data.data;
    } catch (error) {
      console.error(error);

      return {} as User;
    }
  }
}

export const getOneUserService = new GetOneUserService();
