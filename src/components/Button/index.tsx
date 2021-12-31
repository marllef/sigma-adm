import { Button as Btn, ButtonProps } from "@chakra-ui/react";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  colorScheme?: "red" | "blue" | "green";
}

export const Button = ({
  label = "Button",
  colorScheme = "blue",
  ...rest
}: Props) => {
  return (
    <button
      className={`${colorScheme} m-2 px-3 py-1 select-none`}
      {...rest}
    >
      {label}
    </button>
  );
};
