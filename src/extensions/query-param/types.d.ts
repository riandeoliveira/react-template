// TODO: Adicionar descrição do método

export interface IQueryExtension {
  /**
   *
   */
  toQuery<T extends object>(params: T): URLSearchParams;
}
