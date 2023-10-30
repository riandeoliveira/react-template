import { reqresAPI } from "apis/reqres";
import { deleteUserStore } from "./store";

export class DeleteUserService {
  public async handle(): Promise<boolean> {
    try {
      const { id } = deleteUserStore.params;

      await reqresAPI.delete(`/users/${id}`);

      return true;
    } catch (error: unknown) {
      return false;
    }
  }
}

export const deleteUserService = new DeleteUserService();
