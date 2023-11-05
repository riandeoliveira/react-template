import { mainProvider } from "providers";
import { getOneUserService } from ".";
import { userStore } from "../../store";
import type { UserDTO } from "../../types";
import type { GetOneUserDTO } from "./types";

export const handleGetOneUser = async (params: GetOneUserDTO.Params): Promise<void> => {
  const { id } = params;

  const user: UserDTO.User | null = await getOneUserService.handle(id);

  if (user) userStore.setCurrent(user);
  else {
    mainProvider.toast({
      title: "Não foi possível buscar este usuário.",
      status: "error",
    });

    mainProvider.navigate("/user/listing");
  }
};
