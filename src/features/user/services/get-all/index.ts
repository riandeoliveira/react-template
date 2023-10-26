import { reqresAPI } from "apis/reqres";
import { queryParamExtension } from "extensions/query-param";
import { userStore } from "features/user/store";
import type { User } from "../../types";
import type { GetAllUsersRequest } from "./types";

// TODO: Adicionar descrições para todas as classes de extensão!

export class GetAllUsersService {
  public async handle(): Promise<User[]> {
    // TODO: Descobrir como otimizar a chamada do queryParamExtension, pois ela irá acontecer em todos lugares que façam uma requisição GET com parâmetros na URL!

    const params: URLSearchParams = queryParamExtension.toQuery({
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
