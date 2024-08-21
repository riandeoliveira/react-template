import type { ApiResponse } from "@/apis/http-client/interfaces";
import { nestApi } from "@/apis/nest-api";
import { HttpResponses } from "@/constants/http-responses";

type Authorize = {
  isAuthorized?: boolean;
};

export const authorize = async <TResponse>(
  requestFunction: () => Promise<ApiResponse<TResponse>>,
): Promise<ApiResponse<TResponse> & Authorize> => {
  const response: ApiResponse<TResponse> = await requestFunction();

  if (response.status === HttpResponses.UNAUTHORIZED.status) {
    const { status } = await nestApi.users.renewRefreshToken();

    if (status === HttpResponses.NO_CONTENT.status) {
      return {
        ...response,
        isAuthorized: true,
      };
    }
  }

  return response;
};
