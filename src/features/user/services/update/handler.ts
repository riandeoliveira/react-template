import { mainProvider } from "providers";
import { updateUserService } from ".";

export const handleUpdateUser = async (): Promise<void> => {
  const updated: boolean = await updateUserService.handle();

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
