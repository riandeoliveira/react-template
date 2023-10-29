import { reqresAPI } from "apis/reqres";
import type { UserDTO } from "features/user/types";
import { getAllUsersStore } from "./store";
import type { GetAllUsersDTO } from "./types";

export class GetAllUsersService {
  public async handle(): Promise<UserDTO.User[] | null> {
    try {
      const params: string = getAllUsersStore.getParams();
      const response: GetAllUsersDTO.Response = await reqresAPI.get(`/users?${params}`);

      return response.data.data;
    } catch (error: unknown) {
      console.error(error);

      return null;
    }
  }
}

export const getAllUsersService = new GetAllUsersService();
