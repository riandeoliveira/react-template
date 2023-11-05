import { reqresAPI } from "apis/reqres";
import type { CreateUserDTO } from "./types";

export class CreateUserService {
  public async handle(data: CreateUserDTO.Form): Promise<boolean> {
    try {
      await reqresAPI.post("/users", data);

      return true;
    } catch (error: unknown) {
      console.error(error);

      return false;
    }
  }
}

export const createUserService = new CreateUserService();
