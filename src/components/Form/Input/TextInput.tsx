import { useField } from "@unform/core";
import { InputHTMLAttributes, useEffect, useRef } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder?: string;
  label?: string;
}

export const TextInput = ({
  name,
  required = false,
  placeholder,
  label,
  ...rest
}: Props) => {
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
      <div className="flex w-full flex-col">
        <label className="font-semibold py-1 text-gray-600" htmlFor={fieldName}>
          {label}
        </label>
        <input
          className="inpt-outline"
          id={fieldName}
          ref={textInputRef}
          required={required}
          placeholder={placeholder}
          defaultValue={defaultValue}
          name={name}
          {...rest}
        />
        {error && <span className="text-red-500">{error}</span>}
      </div>
    </>
  );
};
