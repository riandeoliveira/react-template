import { Header } from "components/Header";
import { consoleExtension } from "extensions/console";
import { UserCard } from "features/user/components/UserCard";
import { handleCreateUser } from "features/user/create/handler";
import { createUserStore } from "features/user/create/store";
import { handleGetAllUsers } from "features/user/get-all/handler";
import { getAllUsersStore } from "features/user/get-all/store";
import { handleGetOneUser } from "features/user/get-one/handler";
import { getOneUserStore } from "features/user/get-one/store";
import { userStore } from "features/user/store";
import { handleUpdateUser } from "features/user/update/handler";
import { observer } from "mobx-react-lite";
import { useEffect, type ReactElement } from "react";

export const Home = observer((): ReactElement => {
  console.clear();
  consoleExtension.logJSON(userStore.list);
  consoleExtension.logJSON(userStore.current);

  useEffect(() => {
    getAllUsersStore.setParams({ per_page: "5" });
    getOneUserStore.params.id = 5;

    createUserStore.form = {
      job: "Web Developer",
      name: "John Doe",
    };
  }, []);

  return (
    <>
      <Header />
      <div style={{ display: "flex", flexDirection: "column", margin: "64px", gap: 32 }}>
        <button
          type="button"
          style={{
            backgroundColor: "#dbdbdb",
            padding: "12px",
            borderRadius: "12px",
            cursor: "pointer",
          }}
          onClick={handleGetAllUsers}
        >
          GET ALL USERS
        </button>
        <button
          type="button"
          style={{
            backgroundColor: "#dbdbdb",
            padding: "12px",
            borderRadius: "12px",
            cursor: "pointer",
          }}
          onClick={handleGetOneUser}
        >
          GET ONE USER
        </button>
        <button
          type="button"
          style={{
            backgroundColor: "#dbdbdb",
            padding: "12px",
            borderRadius: "12px",
            cursor: "pointer",
          }}
          onClick={handleCreateUser}
        >
          CREATE USER
        </button>
        <button
          type="button"
          style={{
            backgroundColor: "#dbdbdb",
            padding: "12px",
            borderRadius: "12px",
            cursor: "pointer",
          }}
          onClick={handleUpdateUser}
        >
          UPDATE USER
        </button>
      </div>
    </>
  );
});
