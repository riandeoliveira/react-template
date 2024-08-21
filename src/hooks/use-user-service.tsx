import { nestApi } from "@/apis/nest-api";
import type { SignInUserRequest, SignUpUserRequest } from "@/apis/nest-api/user/requests";
import { HttpResponses } from "@/constants/http-responses";
import { ResponseMessages } from "@/enums/response-messages";
import { useNavigate } from "@/router";
import { useLoadingStore } from "@/stores/use-loading-store";
import { useUserStore } from "@/stores/use-user-store";
import { authorize } from "@/utilities/authorize";
import { useToast } from "./use-toast";

type UseUserService = {
  handleSignInUser: (request: SignInUserRequest) => Promise<void>;

  handleSignOutUser: () => Promise<void>;

  handleSignUpUser: (request: SignUpUserRequest) => Promise<void>;

  handleVerifyUser: () => Promise<void>;
};

export const useUserService = (): UseUserService => {
  const { toast } = useToast();
  const loadingStore = useLoadingStore();
  const navigate = useNavigate();
  const userStore = useUserStore();

  const handleSignInUser = async (request: SignInUserRequest): Promise<void> => {
    loadingStore.wait();

    const { status, error } = await nestApi.users.signIn(request);

    loadingStore.stop();

    if (status === HttpResponses.OK.status) {
      navigate("/");
    }

    if (error) {
      toast({
        variant: "destructive",
        title: ResponseMessages.SIGN_IN_USER_ERROR,
        description: error.title,
      });
    }
  };

  const handleSignOutUser = async (): Promise<void> => {
    loadingStore.wait();

    const { status, error } = await nestApi.users.signOut();

    loadingStore.stop();

    if (status === HttpResponses.NO_CONTENT.status) {
      userStore.setIsAuthenticated(false);

      navigate("/sign-in");
    }

    if (error) {
      toast({
        variant: "destructive",
        title: ResponseMessages.SIGN_OUT_USER_ERROR,
        description: error.title,
      });
    }
  };

  const handleSignUpUser = async (request: SignUpUserRequest): Promise<void> => {
    loadingStore.wait();

    const { status, error } = await nestApi.users.signUp(request);

    loadingStore.stop();

    if (status === HttpResponses.CREATED.status) {
      navigate("/");
    }

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

    const { isAuthorized, status } = await authorize<void>(() => nestApi.users.verify());

    loadingStore.stop();

    if (isAuthorized ?? status === HttpResponses.NO_CONTENT.status) {
      userStore.setIsAuthenticated(true);

      return;
    }

    userStore.setIsAuthenticated(false);
  };

  return {
    handleSignInUser,
    handleSignOutUser,
    handleSignUpUser,
    handleVerifyUser,
  };
};
