import { HttpClient } from "@/apis/http-client";
import { UsersService } from "./users/service";

export class NestApi {
  private readonly httpClient = new HttpClient(process.env.NEXT_PUBLIC_API_URL);

  public readonly users = new UsersService(this.httpClient, "/user");
}

export const nestApi = new NestApi();
