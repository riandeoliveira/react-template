import { reqresAPI } from "apis/reqres";
import { updateUserStore } from "./store";

export class UpdateUserService {
  public async handle(): Promise<void> {
    try {
      const id: number = updateUserStore.params.id;
      await reqresAPI.put(`/users/${id}`, updateUserStore.form);
    } catch (error: unknown) {
      console.error(error);
    }
  }
}

export const updateUserService = new UpdateUserService();
