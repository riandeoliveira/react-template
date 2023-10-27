import { reqresAPI } from "apis/reqres";
import { userStore } from "features/user/store";

export class CreateUserService {
  public async handle(): Promise<void> {
    try {
      await reqresAPI.post("/users", {
        job: userStore.job,
        name: userStore.name,
      });
    } catch (error: unknown) {
      console.error(error);
    }
  }
}

export const createUserService = new CreateUserService();
