import { Form } from "@/components/form";
import type { FormikProps } from "formik";
import type { ReactElement } from "react";
import type { UpdateUserForm } from ".";

type AccessDataFormProps = {
  form: FormikProps<UpdateUserForm>;
};

export const AccessDataForm = ({ form }: AccessDataFormProps): ReactElement => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">Dados de acesso</h2>
      <div className="grid grid-cols-2 gap-4 s-720px:grid-cols-1 border border-input rounded-lg p-4">
        <Form.Area hasErrors={!!form.touched.username && !!form.errors.username}>
          <Form.Label>Nome de usuário</Form.Label>
          <Form.TextInput
            name="username"
            value={form.values.username}
            onChange={form.handleChange}
          />
          <Form.ErrorMessage>{form.errors.username}</Form.ErrorMessage>
        </Form.Area>
        <Form.Area hasErrors={!!form.touched.email && !!form.errors.email}>
          <Form.Label>E-mail</Form.Label>
          <Form.TextInput
            type="email"
            name="email"
            value={form.values.email}
            onChange={form.handleChange}
          />
          <Form.ErrorMessage>{form.errors.email}</Form.ErrorMessage>
        </Form.Area>
        <Form.Area hasErrors={!!form.touched.password && !!form.errors.password}>
          <Form.Label>Senha</Form.Label>
          <Form.TextInput
            type="password"
            name="password"
            value={form.values.password}
            onChange={form.handleChange}
          />
          <Form.ErrorMessage>{form.errors.password}</Form.ErrorMessage>
        </Form.Area>
        <Form.Area
          hasErrors={!!form.touched.passwordConfirmation && !!form.errors.passwordConfirmation}
        >
          <Form.Label>Confirmação de senha</Form.Label>
          <Form.TextInput
            type="password"
            name="passwordConfirmation"
            value={form.values.passwordConfirmation}
            onChange={form.handleChange}
            disabled={form.values.password.length === 0}
          />
          <Form.ErrorMessage>{form.errors.passwordConfirmation}</Form.ErrorMessage>
        </Form.Area>
      </div>
    </div>
  );
};
