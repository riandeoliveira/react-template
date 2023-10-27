import { userStore } from "../store";
import type { UserDTO } from "../types";
import { getOneUserService } from "./service";

export const handleGetOneUser = async (): Promise<void> => {
  const user: UserDTO.User = await getOneUserService.handle();

  userStore.current = user;
};
