import { nestApi } from "@/apis/nest-api";
import type { SignInUserRequest, SignUpUserRequest } from "@/apis/nest-api/users/requests";
import { ResponseMessages } from "@/enums/response-messages";
import { loadingStore } from "@/stores/loading-store";
import { useToast } from "./use-toast";

type UseUsersService = {
  handleSignInUser: (request: SignInUserRequest) => Promise<void>;
  handleSignUpUser: (request: SignUpUserRequest) => Promise<void>;
};

export const useUsersService = (): UseUsersService => {
  const { toast } = useToast();

  const handleSignInUser = async (request: SignInUserRequest): Promise<void> => {
    loadingStore.wait();

    const { error } = await nestApi.users.signIn(request);

    loadingStore.stop();
  };

  const handleSignUpUser = async (request: SignUpUserRequest): Promise<void> => {
    loadingStore.wait();

    const { error } = await nestApi.users.signUp(request);

    if (error) {
      toast({
        variant: "destructive",
        title: ResponseMessages.SIGN_UP_USER_ERROR,
        description: error.title,
      });
    }

    loadingStore.stop();
  };

  return {
    handleSignInUser,
    handleSignUpUser,
  };
};
