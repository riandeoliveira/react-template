import { reqresAPI } from "apis/reqres";
import { createUserStore } from "./store";

export class CreateUserService {
  public async handle(): Promise<boolean> {
    try {
      await reqresAPI.post("/users", createUserStore.form);

      return true;
    } catch (error: unknown) {
      console.error(error);

      return false;
    }
  }
}

export const createUserService = new CreateUserService();
