import { ClienteWithAddress as Cliente } from "~/interfaces/Prisma";
import useSWR from "swr";

export const useFetchClientes = (url: string | null) => {
  const { data, error, isValidating } = useSWR(
    url,
    async (url) => {
      try {
        const response = await fetch(url, {
          method: "GET",
        });

        if (response.ok) {
          const data: Cliente[] = await response.json();
          return data;
        }
      } catch (err: any) {
        throw new Error(err.message);
      }
    },
    {
      refreshInterval: 7000,
      errorRetryCount: 3,
      errorRetryInterval: 15000,
    }
  );
  return { data: data!, error, isValidating };
};
