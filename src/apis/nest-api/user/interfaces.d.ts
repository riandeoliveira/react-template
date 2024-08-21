import type { ApiResponse } from "@/apis/http-client/types";
import type { SignInUserRequest, SignUpUserRequest } from "./requests";
import type { SignInUserResponse, SignUpUserResponse } from "./responses";

export interface IUserService {
  renewRefreshToken(): Promise<ApiResponse<void>>;

  signIn(request: SignInUserRequest): Promise<ApiResponse<SignInUserResponse>>;

  signOut(): Promise<ApiResponse<void>>;

  signUp(request: SignUpUserRequest): Promise<ApiResponse<SignUpUserResponse>>;

  verify(): Promise<ApiResponse<void>>;
}
