import {
  List as ChackraList,
  ListItem,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
} from "@chakra-ui/react";

interface Props {
  data?: number[];
}

export const ClientList = ({ data = [] }: Props) => {
  return (
    <>
      <div className="flex h-full w-full p-2 items-start justify-start ">
        <ChackraList className="flex flex-col w-full justify-start rounded border bg-white overflow-y-auto">
          {data.map((item, index) => {
            return (
              <ListItem className="flex h-12 p-3 border-b items-center ">
                <div>Cliente {index}</div>
              </ListItem>
            );
          })}
        </ChackraList>
      </div>
    </>
  );
};
