import type { ApiResponse } from "@/apis/http-client/interfaces";
import type { FindAllCitiesResponse } from "./responses";

export interface ICityService {
  findAll(stateCode: string): Promise<ApiResponse<FindAllCitiesResponse[]>>;
}
