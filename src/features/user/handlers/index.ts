import { getAllUsersService } from "../services/get-all";
import { userStore } from "../store";
import type { User } from "../types";

export const handleGetAllUsers = async (): Promise<void> => {
  const users: User[] = await getAllUsersService.handle();

  userStore.setList(users);
};
