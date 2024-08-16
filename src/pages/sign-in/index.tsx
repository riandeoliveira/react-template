import { signInUserSchema } from "@/apis/nest-api/users/schemas";
import { Container } from "@/components/container";
import { Form } from "@/components/form";
import { FormInput } from "@/components/form-input";
import { Link } from "@/components/link";
import { Button } from "@/components/ui/button";
import { useUsersService } from "@/hooks/use-users-service";
import { useFormik } from "formik";
import type { ReactElement } from "react";

const SignInPage = (): ReactElement => {
  const { handleSignInUser } = useUsersService();

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
            Entrar
          </Button>
          <span className="text-center">
            Não tem uma conta?{" "}
            <Link.Internal href="/sign-up" className="text-blue-500 hover:underline">
              Cadastre-se
            </Link.Internal>
          </span>
        </Form>
      </Container>
    </div>
  );
};

export default SignInPage;
