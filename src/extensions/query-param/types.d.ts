export interface IQueryExtension {
  /**
   * Converts an object to be sent in URL parameters.
   */
  toQuery<T extends object>(params: T): string;
}
