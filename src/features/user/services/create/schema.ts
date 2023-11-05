import * as yup from "yup";

export const createUserSchema = yup.object().shape({
  job: yup.string().trim().max(64, "Máximo de 64 caracteres!").required("Campo Obrigatório!"),

  name: yup.string().trim().max(64, "Máximo de 64 caracteres!").required("Campo Obrigatório!"),
});
