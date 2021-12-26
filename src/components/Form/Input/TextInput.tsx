import { useField } from "@unform/core";
import { InputHTMLAttributes, useEffect, useRef } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
}

export const TextInput = ({ name, ...rest }: Props) => {
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
      <input
        className="flex w-full p-2 outlined bg-gray-50 border rounded"
        ref={textInputRef}
        name={name}
        {...rest}
      />
      {error ? <p>{error}</p> : null}
    </>
  );
};
