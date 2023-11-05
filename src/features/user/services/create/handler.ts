import _ from "lodash";
import { mainProvider } from "providers";
import { createUserService } from ".";
import type { CreateUserDTO } from "./types";

export const handleCreateUser = async (data: CreateUserDTO.Form): Promise<void> => {
  const formattedData: CreateUserDTO.Form = _.mapValues(data, (value) => value.trim());
  const created: boolean = await createUserService.handle(formattedData);

  if (created) {
    mainProvider.toast({
      title: "Usuário criado com sucesso.",
      status: "success",
    });

    mainProvider.navigate("/user/listing");
  } else {
    mainProvider.toast({
      title: "Não foi possível criar um novo usuário.",
      status: "error",
    });
  }
};
