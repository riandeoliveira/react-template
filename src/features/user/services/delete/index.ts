import { reqresAPI } from "apis/reqres";

export class DeleteUserService {
  public async handle(id: number): Promise<boolean> {
    try {
      await reqresAPI.delete(`/users/${id}`);

      return true;
    } catch (error: unknown) {
      return false;
    }
  }
}

export const deleteUserService = new DeleteUserService();
