import { Button as Btn, ButtonProps } from "@chakra-ui/react";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  colorScheme?: "button-red" | "button-blue" | "button-green";
}

export const Button = ({
  label = "Button",
  colorScheme = "button-blue",
  ...rest
}: Props) => {
  return (
    <button
      className={`m-2 px-3 py-1 ${colorScheme} text-white font-semibold rounded`}
      {...rest}
    >
      {label}
    </button>
  );
};
