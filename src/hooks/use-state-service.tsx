import { brasilApi } from "@/apis/brasil-api";
import type { FindAllStatesResponse } from "@/apis/brasil-api/state/responses";
import { HttpResponses } from "@/constants/http-responses";
import { useCallback, useState } from "react";

type UseStateService = {
  states: FindAllStatesResponse[];

  handleFindAllStates: () => Promise<void>;
};

export const useStateService = (): UseStateService => {
  const [states, setStates] = useState<FindAllStatesResponse[]>([]);

  const handleFindAllStates = useCallback(async () => {
    const { data, status } = await brasilApi.states.findAll();

    if (data && status === HttpResponses.OK.status) {
      setStates(data);
    }
  }, []);

  return {
    handleFindAllStates,
    states,
  };
};
