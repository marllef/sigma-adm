import {
  Badge,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Skeleton,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import { BiBell } from "react-icons/bi";

interface Props {
  count?: number;
  data?: [];
}

export const Notifications = ({ count = 99, data = [] }: Props) => {
  return (
    <span>
      <Popover>
        <PopoverTrigger>
          <span className="flex flex-row items-center justify-center  p-1 rounded-full select-none cursor-pointer">
            <span className="bg-red-500 px-1 font-mono text-white font-semibold text-xs rounded-full">
              {count != 0 ? count : null}
            </span>
            <BiBell size={22} />
          </span>
        </PopoverTrigger>
        <PopoverContent width={"15rem"}>
          <PopoverHeader>Notificações</PopoverHeader>
          <PopoverBody>
            <Stack>
              {data.length ? (
                data.map((item) => item)
              ) : (
                <>
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                </>
              )}
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </span>
  );
};
