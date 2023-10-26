import isEmpty from "lodash/isEmpty";
import omitBy from "lodash/omitBy";

// TODO: Criar testes unitários restantes para as classes de extensão!

// TODO: Testar coverage novamente e cobrir os pontos restantes com mais testes unitários!

export class QueryParamExtension {
  public toQuery<T extends object>(params: T): URLSearchParams {
    return new URLSearchParams(omitBy(params, isEmpty));
  }
}

export const queryParamExtension = new QueryParamExtension();
