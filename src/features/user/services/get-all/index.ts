import { reqresAPI } from "apis/reqres";
import { queryParamExtension } from "extensions/query-param";
import { userStore } from "features/user/store";
import type { User } from "../../types";
import type { GetAllUsersRequest } from "./types";

export class GetAllUsersService {
  public async handle(): Promise<User[]> {
    const params: string = queryParamExtension.toQuery({
      page: userStore.page,
      per_page: userStore.perPage,
    });

    try {
      const response: GetAllUsersRequest.Response = await reqresAPI.get(`/users?${params}`);

      return response.data.data;
    } catch (error) {
      console.error(error);

      return [];
    }
  }
}

export const getAllUsersService = new GetAllUsersService();
