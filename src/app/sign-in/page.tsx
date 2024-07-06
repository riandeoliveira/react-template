"use client";

import { Button } from "@/components/abstractions/button";
import { Form } from "@/components/abstractions/form";
import { Input } from "@/components/abstractions/input";
import { Paper } from "@/components/abstractions/paper";
import type { SignInUserRequest } from "@/features/sign-in-user";
import { signInUser } from "@/features/sign-in-user";
import { signInUserSchema } from "@/schemas/sign-in-user-schema";
import { loadingStore } from "@/stores/loading-store";
import { useFormik } from "formik";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";

const SignInPage = observer((): ReactElement => {
  const handleSignInUser = async (request: SignInUserRequest): Promise<void> => {
    loadingStore.wait();

    const { data, error } = await signInUser(request);

    loadingStore.stop();
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInUserSchema,
    onSubmit: handleSignInUser,
  });

  return (
    <div className="h-screen flex items-center justify-center dark:bg-neutral-900">
      <Paper className="p-8 !rounded-xl m-4 w-96">
        <h1 className="text-center mb-6 text-3xl font-bold">Entre na sua Conta</h1>
        <Form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <Input
            type="email"
            name="email"
            label="E-mail"
            placeholder="Digite seu e-mail"
            instance={formik}
          />
          <Input
            type="password"
            name="password"
            label="Senha"
            placeholder="Digite sua senha"
            instance={formik}
          />
          <Button type="submit" className="!mt-4">
            Entrar
          </Button>
        </Form>
      </Paper>
    </div>
  );
});

export default SignInPage;
