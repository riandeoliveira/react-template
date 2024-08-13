import * as yup from "yup";

declare module "yup" {
  interface StringSchema {
    strongPassword(message: string): StringSchema;
    validEmail(message: string): StringSchema;
  }
}

yup.addMethod(yup.string, "strongPassword", function (message: string) {
  const strongPasswordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).+$/;

  return this.matches(strongPasswordRegex, message);
});

yup.addMethod(yup.string, "validEmail", function (message: string) {
  const validEmailRegex: RegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return this.matches(validEmailRegex, message);
});

export const yupExtension = yup;
