import { updateUserSchema } from "@/apis/nest-api/user/schemas";
import { Form } from "@/components/form";
import { FormInput } from "@/components/form-input";
import { Button } from "@/components/ui/button";
import { NavigationPanelLayout } from "@/layouts/navigation-panel-layout";
import { SignOutDialog } from "@/layouts/navigation-panel-layout/sign-out-dialog";
import { PrivateRoute } from "@/routes/private-route";
import { useFormik } from "formik";
import type { ReactElement } from "react";

const AccountPage = (): ReactElement => {
  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      password: "",
      passwordConfirmation: "",
      username: "",
    },
    validationSchema: updateUserSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const hasAnyFilledField: boolean = Object.values(formik.values).some((value) => value !== "");

  return (
    <PrivateRoute>
      <NavigationPanelLayout title="Conta">
        <h2 className="mb-8 text-2xl font-semibold">Dados pessoais e de acesso</h2>
        <Form onSubmit={formik.handleSubmit} className="flex flex-col gap-4" autoComplete="false">
          <div className="flex gap-2 [&>div]:flex-1 s-720px:flex-col s-720px:gap-4">
            <FormInput type="email" label="E-mail" name="email" formInstance={formik} />
            <FormInput label="Nome de usuário" name="username" formInstance={formik} />
            <FormInput label="Nome completo" name="fullName" formInstance={formik} />
          </div>
          <div className="flex gap-2 [&>div]:flex-1 s-720px:flex-col s-720px:gap-4">
            <FormInput type="password" label="Nova senha" name="password" formInstance={formik} />
            <FormInput
              type="password"
              label="Confirmação de senha"
              name="passwordConfirmation"
              disabled={formik.values.password.length === 0}
              formInstance={formik}
            />
          </div>
          <Button type="submit" disabled={!hasAnyFilledField} className="mt-4">
            Enviar
          </Button>
        </Form>
      </NavigationPanelLayout>
      <SignOutDialog />
    </PrivateRoute>
  );
};

export default AccountPage;
