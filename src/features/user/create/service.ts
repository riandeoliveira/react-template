import { reqresAPI } from "apis/reqres";
import { createUserStore } from "./store";

export class CreateUserService {
  public async handle(): Promise<void> {
    try {
      await reqresAPI.post("/users", createUserStore.form);
    } catch (error: unknown) {
      console.error(error);
    }
  }
}

export const createUserService = new CreateUserService();
