import { signInUserSchema } from "@/apis/nest-api/user/schemas";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Form } from "@/components/form";
import { Link } from "@/components/link";
import { useUserService } from "@/hooks/use-user-service";
import { useFormik } from "formik";
import type { ReactElement } from "react";

const SignInPage = (): ReactElement => {
  const { handleSignInUser } = useUserService();

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
      <Container className="p-8 rounded-xl m-4 w-96">
        <h1 className="text-center mb-6 text-3xl font-bold">Entre na sua Conta</h1>
        <Form.Root onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <Form.Area hasErrors={!!formik.touched.email && !!formik.errors.email}>
            <Form.Label>E-mail</Form.Label>
            <Form.TextInput
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <Form.ErrorMessage>{formik.errors.email}</Form.ErrorMessage>
          </Form.Area>
          <Form.Area hasErrors={!!formik.touched.password && !!formik.errors.password}>
            <Form.Label>Senha</Form.Label>
            <Form.TextInput
              type="password"
              name="password"
              placeholder="Digite sua senha"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <Form.ErrorMessage>{formik.errors.password}</Form.ErrorMessage>
          </Form.Area>
          <Button type="submit" className="mt-4">
            Entrar
          </Button>
          <span className="text-center">
            Não tem uma conta?{" "}
            <Link.Internal href="/sign-up" className="text-blue-500 hover:underline">
              Cadastre-se
            </Link.Internal>
          </span>
        </Form.Root>
      </Container>
    </div>
  );
};

export default SignInPage;
