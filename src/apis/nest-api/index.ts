import { BaseApi } from "../http-client/api";
import { UserService } from "./user/service";

class NestApi extends BaseApi {
  public readonly users = new UserService(this.httpClient);
}

export const nestApi = new NestApi(import.meta.env.VITE_NEST_API_URL);
