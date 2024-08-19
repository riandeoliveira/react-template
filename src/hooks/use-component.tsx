import { useEffect, useRef } from "react";

type UseComponent = {
  isMounted: boolean;
};

export const useComponent = (): UseComponent => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    isMounted: isMounted.current,
  };
};
