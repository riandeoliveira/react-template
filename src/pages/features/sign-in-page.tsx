import { Form } from "@/components/form";
import { Input } from "@/components/input";
import { Paper } from "@/components/paper";
import { signInSchema } from "@/schemas/sign-in-schema";
import { Button, Link } from "@mui/material";
import { useFormik } from "formik";
import type { ReactElement } from "react";

export const SignInPage = (): ReactElement => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: (values): void => {
      console.log(values);
    },
  });

  return (
    <div className="h-screen flex items-center justify-center">
      <Paper className="p-8 !rounded-xl m-4 w-96">
        <h1 className="text-center mb-6">Entre na sua Conta</h1>
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
          <Button type="submit">Entrar</Button>
          <Link href="#" className="text-center">
            Esqueci minha senha
          </Link>
        </Form>
      </Paper>
    </div>
  );
};
