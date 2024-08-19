import { nestApi } from "@/apis/nest-api";
import type { SignInUserRequest, SignUpUserRequest } from "@/apis/nest-api/users/requests";
import { HttpResponses } from "@/constants/http-responses";
import { ResponseMessages } from "@/enums/response-messages";
import { useNavigate } from "@/router";
import { useLoadingStore } from "@/stores/use-loading-store";
import { useUserStore } from "@/stores/use-user-store";
import { useToast } from "./use-toast";

type UseUsersService = {
  handleSignInUser: (request: SignInUserRequest) => Promise<void>;
  handleSignUpUser: (request: SignUpUserRequest) => Promise<void>;
  handleVerifyUser: () => Promise<void>;
};

export const useUsersService = (): UseUsersService => {
  const { toast } = useToast();
  const loadingStore = useLoadingStore();
  const navigate = useNavigate();
  const userStore = useUserStore();

  const handleSignInUser = async (request: SignInUserRequest): Promise<void> => {
    loadingStore.wait();

    const { error } = await nestApi.users.signIn(request);

    loadingStore.stop();
  };

  const handleSignUpUser = async (request: SignUpUserRequest): Promise<void> => {
    loadingStore.wait();

    const { status, error } = await nestApi.users.signUp(request);

    loadingStore.stop();

    if (status === HttpResponses.CREATED.status) navigate("/");

    if (error) {
      toast({
        variant: "destructive",
        title: ResponseMessages.SIGN_UP_USER_ERROR,
        description: error.title,
      });
    }
  };

  const handleVerifyUser = async (): Promise<void> => {
    loadingStore.wait();

    const { status } = await nestApi.users.verify();

    loadingStore.stop();

    if (status === HttpResponses.NO_CONTENT.status) {
      userStore.setIsAuthenticated(true);

      return;
    }

    userStore.setIsAuthenticated(false);
  };

  return {
    handleSignInUser,
    handleSignUpUser,
    handleVerifyUser,
  };
};
