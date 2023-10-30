import { reqresAPI } from "apis/reqres";
import { updateUserStore } from "./store";

export class UpdateUserService {
  public async handle(): Promise<boolean> {
    try {
      const { id } = updateUserStore.params;

      await reqresAPI.put(`/users/${id}`, updateUserStore.form);

      return true;
    } catch (error: unknown) {
      console.error(error);

      return false;
    }
  }
}

export const updateUserService = new UpdateUserService();
