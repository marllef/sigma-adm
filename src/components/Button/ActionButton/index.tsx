import { ButtonHTMLAttributes } from "react";
import styles from "./ActionButton.module.css";

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: "red" | "blue" | "green" | "unstyled";
}

export const ActionButton = ({
  label = "Clique aqui... ",
  variant = "unstyled",
  ...rest
}: ActionButtonProps) => {
  return (
    <button className={`${styles.base} ${styles[variant]}`} {...rest}>
      {label}
    </button>
  );
};
