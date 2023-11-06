import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Divider,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { Form } from "components/Form";
import { handleSignUpUser } from "features/auth/services/signup/handler";
import { signUpUserSchema } from "features/auth/services/signup/schema";
import { useFormik } from "formik";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export const SignUp = observer((): ReactElement => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: signUpUserSchema,
    onSubmit: handleSignUpUser,
  });

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <CardHeader>
          <Center>
            <Heading size="lg">Crie sua Conta</Heading>
          </Center>
        </CardHeader>
        <Divider />
        <form noValidate onSubmit={formik.handleSubmit}>
          <CardBody className={styles.card_body}>
            <Form.TextField type="email" label="E-mail" field="email" model={formik} />
            <Form.TextField type="password" label="Senha" field="password" model={formik} />
          </CardBody>
          <CardFooter className={styles.footer}>
            <Button type="submit" colorScheme="blue">
              Cadastrar
            </Button>
            <div className={styles.footer_content}>
              <Text>Já possui uma conta?</Text>
              <Link href="/signin" color="blue.400">
                Entre
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
});
