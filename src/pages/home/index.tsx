import { consoleExtension } from "extensions/console";
import { createUserStore } from "features/user/create/store";
import { getAllUsersStore } from "features/user/get-all/store";
import { getOneUserStore } from "features/user/get-one/store";
import { handleCreateUser, handleGetAllUsers, handleGetOneUser } from "features/user/handlers";
import { userStore } from "features/user/store";
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
    </div>
  );
});
