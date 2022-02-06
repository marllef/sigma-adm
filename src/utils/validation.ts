import { Cliente } from "@prisma/client";
import Yup, { string, object, ValidationError, number } from "yup";

const cliente = async (data: Cliente) => {
  try {
    const schema = object().shape({
      id: number().optional(),
      name: string().required("O campo nome é obrigatório."),
      tel: string().required("O campo telefone é obrigatório."),
      cpf: string().required("O campo CPF é obrigatório."),
      location: string(),
    });

    return await schema.validate(data, { abortEarly: false });
  } catch (errors: any) {
    console.log(errors);
    if (errors instanceof ValidationError) {
      throw errors;
    }
  }
};

export const validate = {
  cliente,
};

export default {
  cliente,
};
