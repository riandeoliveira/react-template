import type { HttpClient } from "@/apis/http-client";
import type { ApiResponse } from "@/apis/http-client/types";
import type { SignInUserRequest, SignUpUserRequest } from "./requests";
import type { SignInUserResponse, SignUpUserResponse } from "./responses";

export class UsersService {
  public constructor(
    private readonly httpClient: HttpClient,
    private readonly url: string,
  ) {}

  public async signIn(request: SignInUserRequest): Promise<ApiResponse<SignInUserResponse>> {
    return await this.httpClient.post<SignInUserRequest, SignInUserResponse>(
      `${this.url}/sign-in`,
      request,
    );
  }

  public async signUp(request: SignUpUserRequest): Promise<ApiResponse<SignUpUserResponse>> {
    return await this.httpClient.post<SignUpUserRequest, SignUpUserResponse>(
      `${this.url}/sign-up`,
      request,
    );
  }

  public async verify(): Promise<ApiResponse<void>> {
    return await this.httpClient.get<void>(`${this.url}/verify`);
  }
}
