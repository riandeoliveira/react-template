import { createUserService } from "./services/create";
import { getAllUsersService } from "./services/get-all";
import { getOneUserService } from "./services/get-one";
import { userStore } from "./store";
import type { User } from "./types";

export const handleCreateUser = async (): Promise<void> => {
  await createUserService.handle();
};

export const handleGetAllUsers = async (): Promise<void> => {
  const users: User[] = await getAllUsersService.handle();

  userStore.setList(users);
};

export const handleGetOneUser = async (userId: number): Promise<void> => {
  const user: User = await getOneUserService.handle(userId);

  userStore.setCurrent(user);
};
