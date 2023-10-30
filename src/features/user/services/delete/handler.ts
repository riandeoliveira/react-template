import { mainProvider } from "providers";
import { modalStore } from "store/modal.store";
import { deleteUserService } from ".";

export const handleDeleteUser = async (): Promise<void> => {
  modalStore.close("deleteUser");

  const deleted: boolean = await deleteUserService.handle();

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
