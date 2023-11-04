import { Button, Heading, Link } from "@chakra-ui/react";
import { Form } from "components/Form";
import { Header } from "components/Header";
import { LoadingArea } from "components/LoadingArea";
import { createUserSchema } from "features/user/schema";
import { handleCreateUser } from "features/user/services/create/handler";
import { createUserStore } from "features/user/services/create/store";
import { useFormik } from "formik";
import { observer } from "mobx-react-lite";
import { type ReactElement } from "react";
import styles from "./styles.module.scss";

export const Create = observer((): ReactElement => {
  const formik = useFormik({
    initialValues: {
      job: "",
      name: "",
    },
    validationSchema: createUserSchema,
    onSubmit: async (values) => {
      createUserStore.setForm({
        job: values.job.trim(),
        name: values.name.trim(),
      });

      await handleCreateUser();
    },
  });

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.section}>
          <Heading as="h2" size="lg">
            Criação de Usuário
          </Heading>
          <form className={styles.form} onSubmit={formik.handleSubmit}>
            <div className={styles.fields}>
              <div className={styles.field_container}>
                <Form.TextField label="Nome" field="name" model={formik} />
              </div>
              <div className={styles.field_container}>
                <Form.TextField label="Ocupação" field="job" model={formik} />
              </div>
            </div>
            <div className={styles.buttons}>
              <Link href="/user/listing">
                <Button className={styles.back_button}>Voltar</Button>
              </Link>
              <Button type="submit" colorScheme="green">
                Cadastrar
              </Button>
            </div>
          </form>
        </section>
      </main>
      <LoadingArea />
    </>
  );
});
