"use client";

import { handleSignUpUser } from "@/apis/nest-api/users/handlers";
import { signUpUserSchema } from "@/apis/nest-api/users/schema";
import { Button } from "@/components/atoms/button";
import { Form } from "@/components/atoms/form";
import { Input } from "@/components/atoms/input";
import { Link } from "@/components/atoms/link";
import { Paper } from "@/components/atoms/paper";
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
      <Paper className="p-8 !rounded-xl m-4 w-96">
        <h1 className="text-center mb-6 text-3xl font-bold">Crie sua Conta</h1>
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
            Já tem uma conta? <Link href="/sign-in">Entre</Link>
          </span>
        </Form>
      </Paper>
    </div>
  );
});

export default SignUpPage;
