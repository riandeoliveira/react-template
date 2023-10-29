import { reqresAPI } from "apis/reqres";
import type { UserDTO } from "../../types";
import { getOneUserStore } from "./store";
import type { GetOneUserDTO } from "./types";

export class GetOneUserService {
  public async handle(): Promise<UserDTO.User> {
    try {
      const id: number = getOneUserStore.params.id;
      const response: GetOneUserDTO.Response = await reqresAPI.get(`/users/${id}`);

      return response.data.data;
    } catch (error: unknown) {
      console.error(error);

      return {} as UserDTO.User;
    }
  }
}

export const getOneUserService = new GetOneUserService();
