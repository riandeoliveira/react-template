"use client";

import { handleSignUpUser } from "@/apis/nest-api/users/handlers";
import { signUpUserSchema } from "@/apis/nest-api/users/schema";
import { Container } from "@/components/container";
import { Form } from "@/components/form";
import { FormInput } from "@/components/form-input";
import { Link } from "@/components/link";
import { ThemeSelect } from "@/components/theme-select";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import type { ReactElement } from "react";

const SignUpPage = (): ReactElement => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signUpUserSchema,
    onSubmit: handleSignUpUser,
  });

  return (
    <div className="h-screen flex items-center justify-center">
      <Container className="p-8 rounded-xl m-4 w-96">
        <h1 className="text-center mb-6 text-3xl font-bold">Crie sua Conta</h1>
        <Form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <FormInput
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            formInstance={formik}
          />
          <FormInput
            type="password"
            name="password"
            placeholder="Digite sua senha"
            formInstance={formik}
          />
          <Button type="submit" className="mt-4">
            Cadastrar-se
          </Button>
          <span className="text-center">
            Já tem uma conta? <Link href="/sign-in">Entre</Link>
          </span>
        </Form>
      </Container>
      <ThemeSelect />
    </div>
  );
};

export default SignUpPage;
