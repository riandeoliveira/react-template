import { mainProvider } from "providers";
import { createUserService } from ".";

export const handleCreateUser = async (): Promise<void> => {
  const created: boolean = await createUserService.handle();

  if (created) {
    mainProvider.toast({
      title: "Usuário criado com sucesso.",
      status: "success",
    });
  } else {
    mainProvider.toast({
      title: "Não foi possível criar um novo usuário.",
      status: "error",
    });
  }
};
