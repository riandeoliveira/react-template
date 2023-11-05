import { reqresAPI } from "apis/reqres";
import type { UpdateUserDTO } from "./types";

export class UpdateUserService {
  public async handle(id: string, data: UpdateUserDTO.Form): Promise<boolean> {
    try {
      await reqresAPI.put(`/users/${id}`, data);

      return true;
    } catch (error: unknown) {
      console.error(error);

      return false;
    }
  }
}

export const updateUserService = new UpdateUserService();
