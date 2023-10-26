import { consoleExtension } from "extensions/console";
import { handleGetAllUsers } from "features/user/handlers";
import { userStore } from "features/user/store";
import { observer } from "mobx-react-lite";
import { useEffect, type ReactElement } from "react";

export const Home = observer((): ReactElement => {
  console.clear();
  consoleExtension.logJSON(userStore.list);

  useEffect(() => {
    userStore.setPerPage("2");
  }, []);

  return (
    <div>
      <button type="button" style={{ backgroundColor: "red" }} onClick={handleGetAllUsers}>
        REQUEST
      </button>
    </div>
  );
});
