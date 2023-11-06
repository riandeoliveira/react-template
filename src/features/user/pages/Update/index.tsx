import { Button, Heading, Link } from "@chakra-ui/react";
import { Form } from "components/Form";
import { Header } from "components/Header";
import { LoadingArea } from "components/LoadingArea";
import { handleGetOneUser } from "features/user/services/get-one/handler";
import { handleUpdateUser } from "features/user/services/update/handler";
import { updateUserSchema } from "features/user/services/update/schema";
import { userStore } from "features/user/store";
import { useFormik } from "formik";
import { observer } from "mobx-react-lite";
import { useEffect, type ReactElement } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";

export const Update = observer((): ReactElement => {
  const { id } = useParams();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      job: userStore.current.first_name,
      name: userStore.current.last_name,
    },
    validationSchema: updateUserSchema,
    onSubmit: async (values): Promise<void> => {
      await handleUpdateUser({ id: id ?? "" }, values);
    },
  });

  useEffect(() => {
    handleGetOneUser({ id: id ?? "" });
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.section}>
          <Heading as="h2" size="lg">
            Edição de Usuário
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
                Atualizar
              </Button>
            </div>
          </form>
        </section>
      </main>
      <LoadingArea />
    </>
  );
});
