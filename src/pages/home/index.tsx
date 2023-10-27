import { handleGetAllUsers } from "features/user/handlers";
import { getAllUsersParams } from "features/user/services/get-all/params";
import { observer } from "mobx-react-lite";
import { useEffect, type ReactElement } from "react";

export const Home = observer((): ReactElement => {
  useEffect(() => {
    getAllUsersParams.setParams({ per_page: "5" });
  }, []);

  return (
    <div>
      <button type="button" style={{ backgroundColor: "red" }} onClick={handleGetAllUsers}>
        REQUEST
      </button>
    </div>
  );
});
