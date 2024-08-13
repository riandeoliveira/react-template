"use client";

import { handleSignUpUser } from "@/apis/nest-api/users/handlers";
import { signUpUserSchema } from "@/apis/nest-api/users/schema";
import { Form } from "@/components/atoms/form";
import { Link } from "@/components/atoms/link";
import { Container } from "@/components/container";
import { ThemeSelect } from "@/components/theme-select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useFormik } from "formik";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";

const SignUpPage = observer((): ReactElement => {
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
      <Container className="p-8 !rounded-xl m-4 w-96">
        <h1 className="text-center mb-6 text-3xl font-bold">Crie sua Conta</h1>
        <Form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
          <Button type="submit" className="!mt-4">
            Entrar
          </Button>
          <span className="text-center">
            Já tem uma conta? <Link href="/sign-in">Entre</Link>
          </span>
        </Form>
      </Container>
      <ThemeSelect />
    </div>
  );
});

export default SignUpPage;
