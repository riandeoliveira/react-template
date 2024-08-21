import type { HttpClient } from "@/apis/http-client";
import type { ApiResponse } from "@/apis/http-client/interfaces";
import type { IUserService } from "./interfaces";
import type { SignInUserRequest, SignUpUserRequest } from "./requests";
import type { SignInUserResponse, SignUpUserResponse } from "./responses";

export class UserService implements IUserService {
  private readonly url: string = "/user";

  public constructor(private readonly httpClient: HttpClient) {}

  public async renewRefreshToken(): Promise<ApiResponse<void>> {
    return await this.httpClient.post<undefined, void>(
      this.url.concat("/refresh-token/renew"),
      undefined,
    );
  }

  public async signIn(request: SignInUserRequest): Promise<ApiResponse<SignInUserResponse>> {
    return await this.httpClient.post<SignInUserRequest, SignInUserResponse>(
      this.url.concat("/sign-in"),
      request,
    );
  }

  public async signOut(): Promise<ApiResponse<void>> {
    return await this.httpClient.post<undefined, void>(this.url.concat("/sign-out"), undefined);
  }

  public async signUp(request: SignUpUserRequest): Promise<ApiResponse<SignUpUserResponse>> {
    return await this.httpClient.post<SignUpUserRequest, SignUpUserResponse>(
      this.url.concat("/sign-up"),
      request,
    );
  }

  public async verify(): Promise<ApiResponse<void>> {
    return await this.httpClient.get<void>(this.url.concat("/verify"));
  }
}
