import { updateUserService } from "./service";

export const handleUpdateUser = async (): Promise<void> => {
  await updateUserService.handle();
};
