import { Select, SelectProps } from "@chakra-ui/react";
import { useField } from "@unform/core";
import { SelectHTMLAttributes, useEffect, useRef } from "react";
import styles from "./Select.module.css";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  placeholder?: string;
  label?: string;
}

export const SelectBox = ({ name, placeholder, label, ...rest }: Props) => {
  const ref = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref,
      getValue: (ref) => ref.current.value,
      setValue: (ref, value) => (ref.current.value = value),
      clearValue: (ref) => (ref.current.value = ""),
    });
  }, [fieldName, registerField]);

  return (
    <>
      <div className={styles.select}>
        <label className={styles.label} htmlFor={fieldName}>
          {label}
        </label>

        <Select
          variant={"unstyled"}
          className={`${styles["outline"]} ${error && styles["error"]}`}
          id={fieldName}
          ref={ref}
          _focus={{ outline: "none" }}
          placeholder={placeholder}
          defaultValue={defaultValue}
          name={name}
        >
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </Select>
      </div>
    </>
  );
};
