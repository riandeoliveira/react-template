import { userStore } from "../store";
import type { UserDTO } from "../types";
import { getAllUsersService } from "./service";

export const handleGetAllUsers = async (): Promise<void> => {
  const users: UserDTO.User[] = await getAllUsersService.handle();

  userStore.setList(users);
};
