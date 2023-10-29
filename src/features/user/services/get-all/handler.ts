import { mainProvider } from "providers";
import { userStore } from "../../store";
import type { UserDTO } from "../../types";
import { getAllUsersService } from ".";

export const handleGetAllUsers = async (): Promise<void> => {
  const users: UserDTO.User[] | null = await getAllUsersService.handle();

  if (users) userStore.setList(users);
  else {
    mainProvider.toast({
      title: "Não foi possível buscar a listagem de usuários.",
      status: "error",
    });
  }
};
