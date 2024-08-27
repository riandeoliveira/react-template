import type { ApiResponse } from "@/apis/http-client/interfaces";
import type { FindAllStatesResponse } from "./responses";

export interface IStateService {
  findAll(): Promise<ApiResponse<FindAllStatesResponse[]>>;
}
