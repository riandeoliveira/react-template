import { BaseApi } from "../http-client/api";
import { CityService } from "./city/service";
import { StateService } from "./state/service";

class BrasilApi extends BaseApi {
  public readonly cities = new CityService(this.httpClient);
  public readonly states = new StateService(this.httpClient);
}

export const brasilApi = new BrasilApi(import.meta.env.VITE_BRASIL_API_URL);
