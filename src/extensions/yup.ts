import * as yup from "yup";

declare module "yup" {
  interface StringSchema {
    cep(message: string): StringSchema;
    cpf(message: string): StringSchema;
    equivalent(field: string, message: string): StringSchema;
    phone(message: string): StringSchema;
    strongPassword(message: string): StringSchema;
    validEmail(message: string): StringSchema;
  }
}

yup.addMethod(yup.string, "cep", function (message: string) {
  return this.test("cep", message, (value) => !value?.includes("_"));
});

yup.addMethod(yup.string, "cpf", function (message: string) {
  return this.test("cpf", message, (value) => !value?.includes("_"));
});

yup.addMethod(yup.string, "equivalent", function (field: string, message: string) {
  return this.test(
    `equivalent-${field}`,
    message,
    (value, context) => context.parent[field] === value,
  );
});

yup.addMethod(yup.string, "phone", function (message: string) {
  return this.test("phone", message, (value) => !value?.includes("_"));
});

yup.addMethod(yup.string, "strongPassword", function (message: string) {
  const strongPasswordRegex: RegExp =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[-#!$@£%^&*()_+|~=`{}[\]:";'<>?,./\\ ]).+$/;

  return this.matches(strongPasswordRegex, message);
});

yup.addMethod(yup.string, "validEmail", function (message: string) {
  const validEmailRegex: RegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return this.matches(validEmailRegex, message);
});

export const yupExtension = yup;
