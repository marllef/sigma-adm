import { Cliente } from "@prisma/client";
import useSWR from "swr";

export const useFetchClientes = (url: string) => {
  const { data, error, isValidating } = useSWR(url, async (url) => {
    const response = await fetch(url, {
      method: "GET",
    });

    const data: Cliente[] = await response.json();
    return data;
  });

  return { data, error, isValidating };
};

export const useFetchCliente = (url: string, id: number) => {
  const { data, error, isValidating } = useSWR(
    url,
    async (url) => {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          id: id,
        }),
      });

      const data: Cliente = await response.json();
      return data;
    },
    {
      refreshInterval: 5000,
      
    }
  );

  return { data, error, isValidating };
};
