import type { HttpClient } from "@/apis/http-client";
import type { ApiResponse } from "@/apis/http-client/interfaces";
import type { ICityService } from "./interfaces";
import type { FindAllCitiesResponse } from "./responses";

export class CityService implements ICityService {
  private readonly url: string = "/ibge/municipios/v1/";

  public constructor(private readonly httpClient: HttpClient) {}

  public async findAll(stateCode: string): Promise<ApiResponse<FindAllCitiesResponse[]>> {
    return await this.httpClient.get(this.url.concat(stateCode));
  }
}
