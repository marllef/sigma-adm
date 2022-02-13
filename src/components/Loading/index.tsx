import { Box, Spinner, As } from "@chakra-ui/react";
import { ReactNode } from "react";

interface LoadingProps {
  as?: As;
  children?: ReactNode;
}

export const Loading = ({ as = "div", children }: LoadingProps) => {
  return (
    <>
      <div className=" w-full flex justify-center items-center m-2">
        <Spinner as={as} />
      </div>
    </>
  );
};
