import { AddIcon } from "@chakra-ui/icons";
import { Button, Heading, Select, Skeleton, Text } from "@chakra-ui/react";
import { Header } from "components/Header";
import { UserCard } from "features/user/components/UserCard";
import { handleGetAllUsers } from "features/user/get-all/handler";
import { getAllUsersStore } from "features/user/get-all/store";
import { userStore } from "features/user/store";
import _ from "lodash";
import { observer } from "mobx-react-lite";
import type { ChangeEvent } from "react";
import { useEffect, type ReactElement } from "react";
import { loadingStore } from "store/loading.store";
import styles from "./styles.module.scss";

export const Listing = observer((): ReactElement => {
  useEffect(() => {
    handleGetAllUsers();
  }, []);

  const handleSelectOption = async (event: ChangeEvent<HTMLSelectElement>): Promise<void> => {
    getAllUsersStore.setParams({ per_page: event.target.value });

    await handleGetAllUsers();
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.heading}>
            <div className={styles.heading_container}>
              <Heading as="h2" size="lg">
                Usuários
              </Heading>
              <Button rightIcon={<AddIcon />} colorScheme="green">
                Novo Usuário
              </Button>
            </div>
            <div className={styles.options}>
              <div className={styles.options_container}>
                <Text>Máximo de itens:</Text>
                <Select onChange={handleSelectOption}>
                  {[10, 20, 50, 100].map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  ))}
                </Select>
              </div>
            </div>
          </div>
          <div className={styles.list}>
            {loadingStore.isLoading ? (
              <>
                {_.times(10, () => (
                  <Skeleton borderRadius="md" h={385} />
                ))}
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
