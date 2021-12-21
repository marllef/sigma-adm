import { Button as Btn, ButtonProps } from "@chakra-ui/react";

interface Props extends ButtonProps {
  label?: string;
}

export const Button = ({ label = "Button", ...props }: Props) => {
  return (
    <div className="bg-sky-500 rounded hover:bg-sky-600 m-2">
      <Btn size="sm" colorScheme="" {...props}>
        {label}
      </Btn>
    </div>
  );
};
