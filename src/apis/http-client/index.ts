import axios from "axios";
import { BaseHttpClient } from "./base";
import type { ApiResponse, IHttpClient } from "./types";

export class HttpClient extends BaseHttpClient implements IHttpClient {
  public constructor(private readonly apiUrl: string) {
    super();
  }

  public async get<TResponse>(url: string): Promise<ApiResponse<TResponse>> {
    try {
      const { data, status } = await axios.get<TResponse>(url, {
        baseURL: this.apiUrl,
      });

      return { data, status };
    } catch (error: unknown) {
      return this.toProblemDetails<TResponse>(error);
    }
  }

  public async post<TRequest, TResponse>(
    url: string,
    request: TRequest,
  ): Promise<ApiResponse<TResponse>> {
    try {
      const { data, status } = await axios.post(url, request, {
        baseURL: this.apiUrl,
        withCredentials: true,
      });

      return { data, status };
    } catch (error: unknown) {
      return this.toProblemDetails<TResponse>(error);
    }
  }

  public async put<TRequest, TResponse>(
    url: string,
    request: TRequest,
  ): Promise<ApiResponse<TResponse>> {
    try {
      const { data, status } = await axios.put(url, request, {
        baseURL: this.apiUrl,
      });

      return {
        data,
        status,
      };
    } catch (error: unknown) {
      return this.toProblemDetails<TResponse>(error);
    }
  }

  public async delete<TResponse>(url: string): Promise<ApiResponse<TResponse>> {
    try {
      const { data, status } = await axios.delete(url, {
        baseURL: this.apiUrl,
      });

      return {
        data,
        status,
      };
    } catch (error: unknown) {
      return this.toProblemDetails<TResponse>(error);
    }
  }
}
