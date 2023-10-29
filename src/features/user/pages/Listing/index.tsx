import { AddIcon } from "@chakra-ui/icons";
import { Button, Heading, Skeleton } from "@chakra-ui/react";
import { Header } from "components/Header";
import { UserCard } from "features/user/components/UserCard";
import { handleGetAllUsers } from "features/user/get-all/handler";
import { userStore } from "features/user/store";
import { observer } from "mobx-react-lite";
import { useEffect, type ReactElement } from "react";
import { loadingStore } from "store/loading.store";
import styles from "./styles.module.scss";

export const Listing = observer((): ReactElement => {
  useEffect(() => {
    handleGetAllUsers();
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.heading}>
            <Heading as="h2" size="lg">
              Usuários
            </Heading>
            <Button rightIcon={<AddIcon />} colorScheme="green">
              Novo Usuário
            </Button>
          </div>
          <div className={styles.list}>
            {loadingStore.isLoading ? (
              <>
                <Skeleton borderRadius="md" h={385} />
                <Skeleton borderRadius="md" h={385} />
                <Skeleton borderRadius="md" h={385} />
                <Skeleton borderRadius="md" h={385} />
                <Skeleton borderRadius="md" h={385} />
              </>
            ) : (
              <>
                {userStore.list.map(({ avatar, email, first_name, last_name, id }) => (
                  <UserCard
                    avatar={avatar}
                    email={email}
                    first_name={first_name}
                    last_name={last_name}
                    key={id}
                  />
                ))}
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
});
