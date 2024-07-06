import { api } from "@/apis";
import type { ApiRequestReturnType } from "@/types/api";
import { withApiRequest } from "@/utilities/with-api-request";
import type { AxiosResponse } from "axios";

export type SignInUserRequest = {
  email: string;
  password: string;
};

export type SignInUserResponse = {
  access_token: string;
  expires_in: string;
  token_type: string;
  user: {
    id: number;
    email: string;
  };
};

type SignInReturnType = ApiRequestReturnType<SignInUserResponse>;

export const signInUser = withApiRequest(async (request: SignInUserRequest): SignInReturnType => {
  const response: AxiosResponse<SignInUserResponse> = await api.post("/user/sign-in", request);

  return { data: response.data };
});
