import { mainProvider } from "providers";
import { modalStore } from "store/modal.store";
import { deleteUserService } from ".";
import type { DeleteUserDTO } from "./types";

export const handleDeleteUser = async (params: DeleteUserDTO.Params): Promise<void> => {
  modalStore.close("deleteUser");

  const { id } = params;

  const deleted: boolean = await deleteUserService.handle(id);

  if (deleted) {
    mainProvider.toast({
      title: "Usuário removido com sucesso.",
      status: "success",
    });
  } else {
    mainProvider.toast({
      title: "Não foi possível remover este usuário.",
      status: "error",
    });
  }
};
