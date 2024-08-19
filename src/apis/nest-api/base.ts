import { HttpClient } from "../http-client";

export abstract class BaseApi {
  protected readonly httpClient: HttpClient;

  public constructor(apiUrl: string) {
    this.httpClient = new HttpClient(apiUrl);
  }
}
