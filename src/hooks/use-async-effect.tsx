import type { DependencyList } from "react";
import { useEffect } from "react";

export const useAsyncEffect = (effect: () => Promise<void>, deps: DependencyList): void => {
  useEffect(() => {
    const runEffect = async (): Promise<void> => {
      await effect();
    };

    runEffect();
  }, deps);
};
