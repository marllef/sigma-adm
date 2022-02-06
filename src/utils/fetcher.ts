import { Cliente } from "@prisma/client";
import useSWR from "swr";

export const useFetchClientes = (url: string) => {
  try {
    const { data, error, isValidating } = useSWR(
      url,
      async (url) => {
        const response = await fetch(url, {
          method: "GET",
        });

        if (response.ok) {
          const data: Cliente[] = await response.json();
          return data;
        } else {
          const err = await response.json();
          throw new Error(err.message);
        }
      },
      {
        refreshInterval: 7000,
      }
    );
    return { data, error, isValidating };
  } catch (err: any) {
    console.log(err.message);
    return { data: [], error: err.message };
  }
};
