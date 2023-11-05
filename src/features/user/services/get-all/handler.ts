import { queryParamExtension } from "extensions/query-param";
import { mainProvider } from "providers";
import { getAllUsersService } from ".";
import { userStore } from "../../store";
import type { UserDTO } from "../../types";
import type { GetAllUsersDTO } from "./types";

export const handleGetAllUsers = async (params: GetAllUsersDTO.Params): Promise<void> => {
  const formattedParams: string = queryParamExtension.toQuery(params);
  const users: UserDTO.User[] | null = await getAllUsersService.handle(formattedParams);

  if (users) userStore.setList(users);
  else {
    mainProvider.toast({
      title: "Não foi possível buscar a listagem de usuários.",
      status: "error",
    });
  }
};
