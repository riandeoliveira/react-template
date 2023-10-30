import { reqresAPI } from "apis/reqres";
import type { UserDTO } from "../../types";
import { getOneUserStore } from "./store";
import type { GetOneUserDTO } from "./types";

export class GetOneUserService {
  public async handle(): Promise<UserDTO.User | null> {
    try {
      const { id } = getOneUserStore.params;

      const response: GetOneUserDTO.Response = await reqresAPI.get(`/users/${id}`);

      return response.data.data;
    } catch (error: unknown) {
      console.error(error);

      return null;
    }
  }
}

export const getOneUserService = new GetOneUserService();
