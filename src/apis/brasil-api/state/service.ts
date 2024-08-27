import type { HttpClient } from "@/apis/http-client";
import type { ApiResponse } from "@/apis/http-client/interfaces";
import type { IStateService } from "./interfaces";
import type { FindAllStatesResponse } from "./responses";

export class StateService implements IStateService {
  private readonly url: string = "/ibge/uf/v1";

  public constructor(private readonly httpClient: HttpClient) {}

  public async findAll(): Promise<ApiResponse<FindAllStatesResponse[]>> {
    return await this.httpClient.get(this.url);
  }
}
