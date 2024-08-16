import { HttpClient } from "@/apis/http-client";
import { EnvironmentVariables } from "@/constants/environment-variables";
import { UsersService } from "./users/service";

export class NestApi {
  private readonly httpClient = new HttpClient(EnvironmentVariables.VITE_NEST_API_URL);

  public readonly users = new UsersService(this.httpClient, "/user");
}

export const nestApi = new NestApi();
