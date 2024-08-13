import type { AxiosError } from "axios";
import axios from "axios";

interface ApiProblemDetails {
  detail?: string;
  status: number;
  title: string;
  type: string;
}

export interface ApiResponse<TResponse> {
  data?: TResponse;
  error?: ApiProblemDetails;
  status: number;
}

interface IHttpClient {
  get<TResponse>(url: string): Promise<ApiResponse<TResponse>>;

  post<TRequest, TResponse = void>(url: string, request: TRequest): Promise<ApiResponse<TResponse>>;

  put<TRequest, TResponse = void>(url: string, request: TRequest): Promise<ApiResponse<TResponse>>;

  delete<TResponse = void>(url: string): Promise<ApiResponse<TResponse>>;
}

export class HttpClient implements IHttpClient {
  public constructor(private readonly apiUrl: string) {}

  public async get<TResponse>(url: string): Promise<ApiResponse<TResponse>> {
    try {
      const { data, status } = await axios.get<TResponse>(url, { baseURL: this.apiUrl });

      return { data, status };
    } catch (error: unknown) {
      return this.convertErrorResponse(error);
    }
  }

  public async post<TRequest, TResponse = void>(
    url: string,
    request: TRequest,
  ): Promise<ApiResponse<TResponse>> {
    try {
      const { data, status } = await axios.post(url, request, { baseURL: this.apiUrl });

      return {
        data,
        status,
      };
    } catch (error: unknown) {
      return this.convertErrorResponse(error);
    }
  }

  public async put<TRequest, TResponse = void>(
    url: string,
    request: TRequest,
  ): Promise<ApiResponse<TResponse>> {
    try {
      const { data, status } = await axios.put(url, request, { baseURL: this.apiUrl });

      return {
        data,
        status,
      };
    } catch (error: unknown) {
      return this.convertErrorResponse(error);
    }
  }

  public async delete<TResponse = void>(url: string): Promise<ApiResponse<TResponse>> {
    try {
      const { data, status } = await axios.delete(url, { baseURL: this.apiUrl });

      return {
        data,
        status,
      };
    } catch (error: unknown) {
      return this.convertErrorResponse(error);
    }
  }

  private convertErrorResponse(error: unknown): { error: ApiProblemDetails; status: number } {
    const axiosError = error as AxiosError<ApiProblemDetails>;
    const apiError = axiosError.response?.data as ApiProblemDetails;

    const errorResponse: ApiProblemDetails = {
      ...apiError,
      title: Array.isArray(apiError.title) ? apiError.title[0] : apiError.title,
    };

    return {
      error: errorResponse,
      status: apiError.status,
    };
  }
}
