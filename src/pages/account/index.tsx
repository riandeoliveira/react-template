import { updateUserSchema } from "@/apis/nest-api/user/schemas";
import { Form } from "@/components/atoms/form";
import { Button } from "@/components/ui/button";
import { NavigationPanelLayout } from "@/layouts/navigation-panel-layout";
import { SignOutDialog } from "@/layouts/navigation-panel-layout/sign-out-dialog";
import { PrivateRoute } from "@/routes/private-route";
import { useFormik } from "formik";
import type { ReactElement } from "react";

const AccountPage = (): ReactElement => {
  const formik = useFormik({
    initialValues: {
      birthDate: undefined,
      cep: "",
      cpf: "",
      email: "",
      fullName: "",
      password: "",
      passwordConfirmation: "",
      phone: "",
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
        <Form.Root onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Dados pessoais</h2>
          <div className="grid grid-cols-2 gap-4 s-720px:grid-cols-1 border border-input rounded-lg p-4">
            <Form.Area hasErrors={!!formik.touched.fullName && !!formik.errors.fullName}>
              <Form.Label htmlFor="fullName">Nome completo</Form.Label>
              <Form.TextInput
                name="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
              />
              <Form.ErrorMessage>{formik.errors.fullName}</Form.ErrorMessage>
            </Form.Area>
            <Form.Area hasErrors={!!formik.touched.birthDate && !!formik.errors.birthDate}>
              <Form.Label htmlFor="birthDate">Data de nascimento</Form.Label>
              <Form.DateInput
                name="birthDate"
                dateValue={formik.values.birthDate}
                onChangeDate={(date) => formik.setFieldValue("birthDate", date)}
                onClearDate={() => formik.setFieldValue("birthDate", undefined)}
              />
              <Form.ErrorMessage>{formik.errors.birthDate}</Form.ErrorMessage>
            </Form.Area>
            <Form.Area hasErrors={!!formik.touched.cep && !!formik.errors.cep}>
              <Form.Label htmlFor="cep">CEP</Form.Label>
              <Form.CepInput name="cep" value={formik.values.cep} onChange={formik.handleChange} />
              <Form.ErrorMessage>{formik.errors.cep}</Form.ErrorMessage>
            </Form.Area>
            <Form.Area hasErrors={!!formik.touched.cpf && !!formik.errors.cpf}>
              <Form.Label htmlFor="cpf">CPF</Form.Label>
              <Form.CpfInput name="cpf" value={formik.values.cpf} onChange={formik.handleChange} />
              <Form.ErrorMessage>{formik.errors.cpf}</Form.ErrorMessage>
            </Form.Area>
            <Form.Area hasErrors={!!formik.touched.phone && !!formik.errors.phone}>
              <Form.Label htmlFor="phone">Telefone</Form.Label>
              <Form.PhoneInput
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
              <Form.ErrorMessage>{formik.errors.phone}</Form.ErrorMessage>
            </Form.Area>
          </div>
          <h2 className="text-2xl font-semibold">Dados de acesso</h2>
          <div className="grid grid-cols-2 gap-4 s-720px:grid-cols-1 border border-input rounded-lg p-4">
            <Form.Area hasErrors={!!formik.touched.username && !!formik.errors.username}>
              <Form.Label htmlFor="username">Nome de usuário</Form.Label>
              <Form.TextInput
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              <Form.ErrorMessage>{formik.errors.username}</Form.ErrorMessage>
            </Form.Area>
            <Form.Area hasErrors={!!formik.touched.email && !!formik.errors.email}>
              <Form.Label htmlFor="email">E-mail</Form.Label>
              <Form.TextInput
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <Form.ErrorMessage>{formik.errors.email}</Form.ErrorMessage>
            </Form.Area>
            <Form.Area hasErrors={!!formik.touched.password && !!formik.errors.password}>
              <Form.Label htmlFor="password">Senha</Form.Label>
              <Form.TextInput
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <Form.ErrorMessage>{formik.errors.password}</Form.ErrorMessage>
            </Form.Area>
            <Form.Area
              hasErrors={
                !!formik.touched.passwordConfirmation && !!formik.errors.passwordConfirmation
              }
            >
              <Form.Label htmlFor="passwordConfirmation">Confirmação de senha</Form.Label>
              <Form.TextInput
                type="password"
                name="passwordConfirmation"
                value={formik.values.passwordConfirmation}
                onChange={formik.handleChange}
                disabled={formik.values.password.length === 0}
              />
              <Form.ErrorMessage>{formik.errors.passwordConfirmation}</Form.ErrorMessage>
            </Form.Area>
          </div>
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
