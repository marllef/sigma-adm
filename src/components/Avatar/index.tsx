import { Avatar as ChakraAvatar } from "@chakra-ui/react";

interface AvatarProps {
  name?: string;
}

export const Avatar = ({ name = "Marllef" }: AvatarProps) => {
  return (
    <div className="mr-2 select-none">
      <ChakraAvatar size="xs" name={name} />
    </div>
  );
};
