import { updateUserService } from ".";

export const handleUpdateUser = async (): Promise<void> => {
  await updateUserService.handle();
};
