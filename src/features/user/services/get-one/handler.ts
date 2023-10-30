import { mainProvider } from "providers";
import { getOneUserService } from ".";
import { userStore } from "../../store";
import type { UserDTO } from "../../types";

export const handleGetOneUser = async (): Promise<void> => {
  const user: UserDTO.User | null = await getOneUserService.handle();

  if (user) userStore.setCurrent(user);
  else {
    mainProvider.toast({
      title: "Não foi possível buscar este usuário.",
      status: "error",
    });
  }
};
