import isEmpty from "lodash/isEmpty";
import omitBy from "lodash/omitBy";
import type { IQueryExtension } from "./types";

export class QueryParamExtension implements IQueryExtension {
  public toQuery<T extends object>(params: T): string {
    return new URLSearchParams(omitBy(params, isEmpty)).toString();
  }
}

export const queryParamExtension = new QueryParamExtension();
