import { FormHandles, FormProps } from "@unform/core";
import { Form } from "@unform/web";
import { ReactNode, Ref, useRef } from "react";
import { TextInput } from "../Input";

export const RegisterClientForm = () => {
  const formRef = useRef(null);

  function handleSubmit() {}

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <TextInput name="username" placeholder="Informe o nome" />
    </Form>
  );
};
