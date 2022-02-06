import { useField } from "@unform/core";
import { InputHTMLAttributes, useEffect, useRef } from "react";
import styles from "./InputMask.module.css";
import Input, { Props as InputProps } from "react-input-mask";

interface Props extends InputProps {
  name: string;
  placeholder?: string;
  label?: string;
}

export const InputMask = ({ name, placeholder, label, ...rest }: Props) => {
  const textInputRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textInputRef,
      getValue: (ref) => ref.current.value,
      setValue: (ref, value) => (ref.current.value = value),
      clearValue: (ref) => (ref.current.value = ""),
    });
  }, [fieldName, registerField]);

  return (
    <>
      <div className={styles.container}>
        <label className={styles.label} htmlFor={fieldName}>
          {label}
        </label>
        <Input
          className={`${styles["input-outline"]} ${error && styles["error"]} ${
            rest.disabled && styles["disabled"]
          }`}
          id={fieldName}
          ref={textInputRef}
          placeholder={placeholder}
          defaultValue={defaultValue}
          name={name}
          {...rest}
        />
      </div>
    </>
  );
};
