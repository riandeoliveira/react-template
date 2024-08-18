import { HttpClient } from "@/apis/http-client";
import { UsersService } from "./users/service";

class NestApi {
  private readonly httpClient = new HttpClient(import.meta.env.VITE_NEST_API_URL);

  public readonly users = new UsersService(this.httpClient, "/user");
}

export const nestApi = new NestApi();
