import { brasilApi } from "@/apis/brasil-api";
import type { FindAllCitiesResponse } from "@/apis/brasil-api/city/responses";
import { HttpResponses } from "@/constants/http-responses";
import { useCallback, useState } from "react";

type UseCityService = {
  cities: FindAllCitiesResponse[];

  handleFindAllCities: (stateCode: string) => Promise<void>;
};

export const useCityService = (): UseCityService => {
  const [cities, setCities] = useState<FindAllCitiesResponse[]>([]);

  const handleFindAllCities = useCallback(async (stateCode: string) => {
    const { data, status } = await brasilApi.cities.findAll(stateCode);

    if (data && status === HttpResponses.OK.status) {
      setCities(data);
    }
  }, []);

  return {
    cities,
    handleFindAllCities,
  };
};
