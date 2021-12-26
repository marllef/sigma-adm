import { Cliente } from "@prisma/client";
import useSWR from "swr";

export const useFetchClientes = (url: string) => {
  const { data, error, isValidating } = useSWR(
    url,
    async (url) => {
      const response = await fetch(url, {
        method: "GET",
      });

      const data: Cliente[] = await response.json();
      return data;
    },
    {
      refreshInterval: 6000,
    }
  );

  return { data, error, isValidating };
};