import _ from "lodash";
import { mainProvider } from "providers";
import { updateUserService } from ".";
import type { UpdateUserDTO } from "./types";

export const handleUpdateUser = async (
  params: UpdateUserDTO.Params,
  data: UpdateUserDTO.Form,
): Promise<void> => {
  const { id } = params;

  const formattedData: UpdateUserDTO.Form = _.mapValues(data, (value) => value.trim());
  const updated: boolean = await updateUserService.handle(id, formattedData);

  if (updated) {
    mainProvider.toast({
      title: "Usuário atualizado com sucesso.",
      status: "success",
    });
  } else {
    mainProvider.toast({
      title: "Não foi possível atualizar este usuário.",
      status: "error",
    });
  }
};
