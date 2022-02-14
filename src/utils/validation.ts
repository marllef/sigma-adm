import { ClienteWithAddress as Cliente } from "~/interfaces/Prisma";
import { string, object, ValidationError, number } from "yup";

const cliente = async (data: Cliente) => {
  try {
    const schema = object().shape({
      id: number().optional(),
      name: string().required("O campo nome é obrigatório."),
      gender: string().required("O campo gênero é obrigatório."),
      tel: string().required("O campo telefone é obrigatório."),
      cpf: string().required("O campo CPF é obrigatório."),
      email: string().required("O campo email é obrigatório."),
      address: object().shape({
        street: string().required("O campo logradouro é obrigatório."),
        number: string().required("O campo número é obrigatório."),
        district: string().required("O campo bairro é obrigatório."),
        postalcode: string().required("O campo CEP é obrigatório."),
        city: string().required("O campo cidade é obrigatório."),
        state: string().required("O campo estado é obrigatório."),
        complement: string().optional(),
      }),
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
