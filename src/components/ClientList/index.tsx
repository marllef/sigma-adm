import { List as CList, ListItem, Skeleton } from "@chakra-ui/react";
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

  useEffect(() => {
    if (error) {
      console.log(error.message);
    }
  }, [error]);

  return (
    <>
      <div className="flex w-full p-2 items-start justify-start ">
        <CList className="flex flex-col border-slate-300 w-full h-full justify-start bg-white overflow-y-auto">
          <ListItem>
            <ListHeader />
          </ListItem>

          {data?.length ? (
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
                    updated_at={item.created_at}
                  />
                </ListItem>
              );
            })
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              Loading...
            </div>
          )}
        </CList>
      </div>
    </>
  );
};
