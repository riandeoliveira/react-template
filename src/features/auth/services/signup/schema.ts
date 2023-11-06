import * as yup from "yup";

export const signUpUserSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .max(64, "Máximo de 64 caracteres!")
    .email("Campo deve ser um e-mail válido!")
    .required("Campo Obrigatório!"),

  password: yup
    .string()
    .trim()
    .min(12, "Mínimo de 12 caracteres!")
    .max(64, "Máximo de 64 caracteres!")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "A senha deve ser forte, contendo: uma letra maiúscula, uma letra minúscula, um número e um caractere especial!",
    )
    .required("Campo Obrigatório!"),
});
