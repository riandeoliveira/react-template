import { ResponseMessages } from "@/enums/response-messages";
import { yupExtension } from "@/extensions/yup";

export const signInUserSchema = yupExtension.object({
  email: yupExtension
    .string()
    .trim()
    .required(ResponseMessages.REQUIRED_FIELD)
    .validEmail(ResponseMessages.EMAIL_IS_VALID)
    .min(8, ResponseMessages.HAS_MINIMUM_8_LENGTH)
    .max(64, ResponseMessages.HAS_MAXIMUM_64_LENGTH),

  password: yupExtension
    .string()
    .trim()
    .required(ResponseMessages.REQUIRED_FIELD)
    .strongPassword(ResponseMessages.PASSWORD_IS_STRONG)
    .min(8, ResponseMessages.HAS_MINIMUM_8_LENGTH)
    .max(64, ResponseMessages.HAS_MAXIMUM_64_LENGTH),
});

export const signUpUserSchema = yupExtension.object({
  email: yupExtension
    .string()
    .trim()
    .required(ResponseMessages.REQUIRED_FIELD)
    .validEmail(ResponseMessages.EMAIL_IS_VALID)
    .min(8, ResponseMessages.HAS_MINIMUM_8_LENGTH)
    .max(64, ResponseMessages.HAS_MAXIMUM_64_LENGTH),

  password: yupExtension
    .string()
    .trim()
    .required(ResponseMessages.REQUIRED_FIELD)
    .strongPassword(ResponseMessages.PASSWORD_IS_STRONG)
    .min(8, ResponseMessages.HAS_MINIMUM_8_LENGTH)
    .max(64, ResponseMessages.HAS_MAXIMUM_64_LENGTH),
});

export const updateUserSchema = yupExtension.object({
  email: yupExtension
    .string()
    .trim()
    .validEmail(ResponseMessages.EMAIL_IS_VALID)
    .min(8, ResponseMessages.HAS_MINIMUM_8_LENGTH)
    .max(64, ResponseMessages.HAS_MAXIMUM_64_LENGTH),

  fullName: yupExtension
    .string()
    .trim()
    .min(8, ResponseMessages.HAS_MINIMUM_8_LENGTH)
    .max(64, ResponseMessages.HAS_MAXIMUM_64_LENGTH),

  password: yupExtension
    .string()
    .trim()
    .strongPassword(ResponseMessages.PASSWORD_IS_STRONG)
    .min(8, ResponseMessages.HAS_MINIMUM_8_LENGTH)
    .max(64, ResponseMessages.HAS_MAXIMUM_64_LENGTH),

  passwordConfirmation: yupExtension
    .string()
    .equivalent("password", ResponseMessages.PASSWORDS_ARE_EQUIVALENT),

  username: yupExtension
    .string()
    .trim()
    .min(8, ResponseMessages.HAS_MINIMUM_8_LENGTH)
    .max(64, ResponseMessages.HAS_MAXIMUM_64_LENGTH),
});
