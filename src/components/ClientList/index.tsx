import { List as CList, ListItem } from "@chakra-ui/react";
import { ListHeader } from "./ListHeader";
import { ClientListItem } from "./ListItem";

interface Props {
  data?: any[];
}

export const ClientList = ({ data = [] }: Props) => {
  return (
    <>
      <div className="flex w-full p-2 items-start justify-start ">
        <CList className="flex flex-col border-slate-300 w-full h-full justify-start bg-white overflow-y-auto">
          <ListItem>
            <ListHeader />
          </ListItem>
          {data.map((item, index) => {
            return (
              <ListItem
                className={`flex h-12 p-3  border-b items-center ${
                  index % 2 == 0 ? "bg-gray-100" : "bg-white"
                } border-x `}
              >
                <ClientListItem
                  key={item.id}
                  name={item.name}
                  location="Mossoró"
                  tel={item.tel}
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
