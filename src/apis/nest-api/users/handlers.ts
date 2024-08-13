import { loadingStore } from "@/stores/loading-store";
import { toast } from "react-toastify";
import { nestApi } from "..";
import type { SignInUserRequest, SignUpUserRequest } from "./requests";

export const handleSignInUser = async (request: SignInUserRequest): Promise<void> => {
  loadingStore.wait();

  const { error } = await nestApi.users.signIn(request);

  loadingStore.stop();

  if (error) toast.error(error.title);
};

export const handleSignUpUser = async (request: SignUpUserRequest): Promise<void> => {
  loadingStore.wait();

  const { error } = await nestApi.users.signUp(request);

  loadingStore.stop();

  if (error) toast.error(error.title);
};

export const handleVerifyUser = async () => {
  const { data } = await nestApi.users.verify();
};
