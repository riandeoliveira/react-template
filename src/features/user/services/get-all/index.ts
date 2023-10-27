import { reqresAPI } from "apis/reqres";
import type { User } from "../../types";
import { getAllUsersParams } from "./params";
import type { GetAllUsersDTO } from "./types";

export class GetAllUsersService {
  public async handle(): Promise<User[]> {
    try {
      const params: string = getAllUsersParams.getParams();
      const response: GetAllUsersDTO.Response = await reqresAPI.get(`/users?${params}`);

      return response.data.data;
    } catch (error: unknown) {
      console.error(error);

      return [];
    }
  }
}

export const getAllUsersService = new GetAllUsersService();
