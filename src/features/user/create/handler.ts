import { createUserService } from "./service";

export const handleCreateUser = async (): Promise<void> => {
  await createUserService.handle();
};
