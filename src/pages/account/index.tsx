import { updateUserSchema } from "@/apis/nest-api/user/schemas";
import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { NavigationPanelLayout } from "@/layouts/navigation-panel-layout";
import { SignOutDialog } from "@/layouts/navigation-panel-layout/sign-out-dialog";
import { PrivateRoute } from "@/routes/private-route";
import { useFormik } from "formik";
import { type ReactElement } from "react";
import { AccessDataForm } from "./access-data-form";
import { PersonalDataForm } from "./personal-data-form";

export type UpdateUserForm = {
  birthDate?: Date;
  cep: string;
  city: string;
  cpf: string;
  email: string;
  fullName: string;
  password: string;
  passwordConfirmation: string;
  phone: string;
  state: string;
  username: string;
};

const AccountPage = (): ReactElement => {
  const formik = useFormik<UpdateUserForm>({
    initialValues: {
      birthDate: undefined,
      cep: "",
      city: "",
      cpf: "",
      email: "",
      fullName: "",
      password: "",
      passwordConfirmation: "",
      phone: "",
      state: "",
      username: "",
    },
    validationSchema: updateUserSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const hasAnyFilledField: boolean = Object.values(formik.values).some(
    (value) => value !== "" && value !== undefined && value !== null,
  );

  return (
    <PrivateRoute>
      <NavigationPanelLayout title="Conta">
        <Form.Root onSubmit={formik.handleSubmit} className="flex flex-col gap-8">
          <PersonalDataForm form={formik} />
          <AccessDataForm form={formik} />
          <Button type="submit" disabled={!hasAnyFilledField} className="mt-4">
            Enviar
          </Button>
        </Form.Root>
      </NavigationPanelLayout>
      <SignOutDialog />
    </PrivateRoute>
  );
};

export default AccountPage;
