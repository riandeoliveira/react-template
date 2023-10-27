import { consoleExtension } from "extensions/console";
import { handleCreateUser, handleGetAllUsers, handleGetOneUser } from "features/user/handlers";
import { getAllUsersParams } from "features/user/services/get-all/params";
import { userStore } from "features/user/store";
import { observer } from "mobx-react-lite";
import { useEffect, type ReactElement } from "react";

export const Home = observer((): ReactElement => {
  console.clear();
  consoleExtension.logJSON(userStore.list);
  consoleExtension.logJSON(userStore.current);

  useEffect(() => {
    getAllUsersParams.setParams({ per_page: "5" });
    userStore.setName("John Doe");
    userStore.setJob("Web Developer");
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
        onClick={(): Promise<void> => handleGetOneUser(5)}
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
