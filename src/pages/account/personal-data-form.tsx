import { Form } from "@/components/form";
import { useCityService } from "@/hooks/use-city-service";
import { useStateService } from "@/hooks/use-state-service";
import type { FormikProps } from "formik";
import _ from "lodash";
import { useEffect, type ReactElement } from "react";
import type { UpdateUserForm } from ".";

type PersonalDataFormProps = {
  form: FormikProps<UpdateUserForm>;
};

export const PersonalDataForm = ({ form }: PersonalDataFormProps): ReactElement => {
  const { handleFindAllStates, states } = useStateService();
  const { handleFindAllCities, cities } = useCityService();

  const stateList = states.map((state) => ({ value: state.sigla, label: state.nome }));
  const cityList = cities.map((city) => ({ value: city.codigo_ibge, label: city.nome }));

  const sortedStates = _.orderBy(stateList, [(state): string => state.label], ["asc"]);
  const sortedCities = _.orderBy(cityList, [(city): string => city.label], ["asc"]);

  useEffect(() => {
    handleFindAllStates();
  }, []);

  useEffect(() => {
    if (form.values.state !== "") handleFindAllCities(form.values.state);
  }, [form.values.state]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">Dados pessoais</h2>
      <div className="grid grid-cols-2 gap-4 s-720px:grid-cols-1 border border-input rounded-lg p-4">
        <Form.Area hasErrors={!!form.touched.fullName && !!form.errors.fullName}>
          <Form.Label>Nome completo</Form.Label>
          <Form.TextInput
            name="fullName"
            value={form.values.fullName}
            onChange={form.handleChange}
          />
          <Form.ErrorMessage>{form.errors.fullName}</Form.ErrorMessage>
        </Form.Area>
        <Form.Area hasErrors={!!form.touched.birthDate && !!form.errors.birthDate}>
          <Form.Label>Data de nascimento</Form.Label>
          <Form.DateInput
            name="birthDate"
            dateValue={form.values.birthDate}
            onChangeDate={(date) => form.setFieldValue("birthDate", date)}
            onClearDate={() => form.setFieldValue("birthDate", undefined)}
          />
          <Form.ErrorMessage>{form.errors.birthDate}</Form.ErrorMessage>
        </Form.Area>
        <Form.Area hasErrors={!!form.touched.cep && !!form.errors.cep}>
          <Form.Label>CEP</Form.Label>
          <Form.CepInput name="cep" value={form.values.cep} onChange={form.handleChange} />
          <Form.ErrorMessage>{form.errors.cep}</Form.ErrorMessage>
        </Form.Area>
        <Form.Area hasErrors={!!form.touched.cpf && !!form.errors.cpf}>
          <Form.Label>CPF</Form.Label>
          <Form.CpfInput name="cpf" value={form.values.cpf} onChange={form.handleChange} />
          <Form.ErrorMessage>{form.errors.cpf}</Form.ErrorMessage>
        </Form.Area>
        <Form.Area hasErrors={!!form.touched.phone && !!form.errors.phone}>
          <Form.Label>Telefone</Form.Label>
          <Form.PhoneInput name="phone" value={form.values.phone} onChange={form.handleChange} />
          <Form.ErrorMessage>{form.errors.phone}</Form.ErrorMessage>
        </Form.Area>
        <Form.Area hasErrors={!!form.touched.state && !!form.errors.state}>
          <Form.Label>Estado</Form.Label>
          <Form.Autocomplete
            items={sortedStates}
            value={form.values.state}
            onSelect={(state) => {
              form.setFieldValue("state", state);
              form.setFieldValue("city", "");
            }}
            selectMessage="Selecione um estado..."
            searchMessage="Pesquise um estado..."
            notFoundMessage="Nenhum estado encontrado."
          />
          <Form.ErrorMessage>{form.errors.state}</Form.ErrorMessage>
        </Form.Area>
        <Form.Area hasErrors={!!form.touched.city && !!form.errors.city}>
          <Form.Label>Cidade</Form.Label>
          <Form.Autocomplete
            items={sortedCities}
            value={form.values.city}
            onSelect={(city) => form.setFieldValue("city", city)}
            selectMessage="Selecione uma cidade..."
            searchMessage="Pesquise uma cidade..."
            notFoundMessage="Nenhuma cidade encontrada."
            disabled={form.values.state === ""}
          />
          <Form.ErrorMessage>{form.errors.city}</Form.ErrorMessage>
        </Form.Area>
      </div>
    </div>
  );
};
