import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: "red" | "blue" | "green" | "unstyled";
  colorScheme?: "red" | "blue" | "green" | "black" | "";
}

export const Button = ({
  label,
  variant = "blue",
  colorScheme = "black",
  ...rest
}: Props) => {
  return (
    <>
      <button
        className={`${styles.base} ${styles[variant]} ${styles[colorScheme]}`}
        {...rest}
      >
        {label ? label : rest.children}
      </button>
    </>
  );
};
