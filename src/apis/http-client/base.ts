import { HttpResponses } from "@/constants/http-responses";
import { PROBLEM_DETAILS_URI } from "@/constants/problem-details";
import { ResponseMessages } from "@/enums/response-messages";
import type { AxiosError } from "axios";
import type { ApiResponse, ProblemDetails } from "./interfaces";

export abstract class BaseHttpClient {
  protected toProblemDetails<TResponse>(error: unknown): ApiResponse<Required<TResponse>> {
    const axiosError = error as AxiosError;
    const response = axiosError.response;
    const status = HttpResponses.SERVICE_UNAVAILABLE.status;

    if (response) {
      const data = response.data as ProblemDetails;

      const problemDetails: ProblemDetails = {
        ...data,
        title: Array.isArray(data.title) ? data.title[0] : data.title,
      };

      return {
        error: problemDetails,
        status: data.status,
      };
    }

    return {
      error: {
        type: `${PROBLEM_DETAILS_URI}/${status}`,
        title: ResponseMessages.UNKNOWN_ERROR,
        status,
      },
      status,
    };
  }
}
