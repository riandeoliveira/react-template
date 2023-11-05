import * as yup from "yup";

export const createUserSchema = yup.object().shape({
  job: yup
    .string()
    .transform((value) => value.trimStart())
    .trim()
    .max(64, "Máximo de 64 caracteres!")
    .required("Campo Obrigatório!"),

  name: yup
    .string()
    .transform((value) => value.trimStart())
    .trim()
    .max(64, "Máximo de 64 caracteres!")
    .required("Campo Obrigatório!"),
});
