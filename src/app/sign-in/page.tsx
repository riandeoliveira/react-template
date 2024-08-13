"use client";

import { handleSignInUser } from "@/apis/nest-api/users/handlers";
import { signInUserSchema } from "@/apis/nest-api/users/schema";
import { Button } from "@/components/atoms/button";
import { Form } from "@/components/atoms/form";
import { Input } from "@/components/atoms/input";
import { Link } from "@/components/atoms/link";
import { Container } from "@/components/container";
import { useFormik } from "formik";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";

const SignInPage = observer((): ReactElement => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInUserSchema,
    onSubmit: handleSignInUser,
  });

  return (
    <div className="h-screen flex items-center justify-center">
      <Container className="p-8 !rounded-xl m-4 w-96">
        <h1 className="text-center mb-6 text-3xl font-bold">Entre na sua Conta</h1>
        <Form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <Input
            type="email"
            name="email"
            label="E-mail"
            placeholder="Digite seu e-mail"
            formInstance={formik}
          />
          <Input
            type="password"
            name="password"
            label="Senha"
            placeholder="Digite sua senha"
            formInstance={formik}
          />
          <Button type="submit" className="!mt-4">
            Entrar
          </Button>
          <span className="text-center">
            Não tem uma conta? <Link href="/sign-up">Cadastre-se</Link>
          </span>
        </Form>
      </Container>
    </div>
  );
});

export default SignInPage;
