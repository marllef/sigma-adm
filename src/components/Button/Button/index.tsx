import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: "red" | "blue" | "green" | "unstyled";
}

export const Button = ({
  label,
  variant = "blue",
  ...rest
}: Props) => {
  return (
    <>
      <button className={`${styles.base} ${styles[variant]}`} {...rest}>
        {label ? label : rest.children}
      </button>
    </>
  );
};
