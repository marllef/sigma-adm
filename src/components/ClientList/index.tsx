import { List as CList, ListItem, Skeleton, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useFetchClientes } from "../../utils/fetcher";
import { ListHeader } from "./ListHeader";
import { ClientListItem } from "./ListItem";

interface Props {
  data?: any[];
}

export const ClientList = () => {
  const { data, error, isValidating } = useFetchClientes(
    "api/database/get-clientes"
  );

  const toast = useToast({
    position: "bottom-right",
    isClosable: true,
    duration: 5000,
  });

  useEffect(() => {
    if (error) {
      toast({
        title: "Erro ao carregar dados",
        description: error,
        status: "error",
        position: "bottom-right",
        duration: 4000,
      });
    }
  }, [error]);

  return (
    <>
      <div className="flex w-full p-2 items-start justify-start">
        <CList className="flex flex-col border-slate-300 w-full justify-start bg-white">
          <ListItem>
            <ListHeader />
          </ListItem>

          {data?.length &&
            data.map((item, index) => {
              return (
                <ListItem
                  key={item.id + index}
                  className={`flex h-12 p-3 border-b items-center ${
                    index % 2 == 0 ? "bg-gray-100" : "bg-white"
                  } border-x `}
                >
                  <ClientListItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    location={item.location!}
                    tel={item.tel}
                    cpf={item.cpf!}
                    created_at={item.created_at}
                    updated_at={item.updated_at}
                  />
                </ListItem>
              );
            })}
        </CList>
      </div>
    </>
  );
};
