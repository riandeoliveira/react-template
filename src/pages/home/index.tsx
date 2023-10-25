import { getAllUsersService } from "features/user/services/get-all";
import { observer } from "mobx-react-lite";
import { type ReactElement } from "react";

export const Home = observer((): ReactElement => {
  return (
    <div>
      <button type="button" style={{ backgroundColor: "red" }} onClick={getAllUsersService.handle}>
        REQUEST
      </button>
    </div>
  );
});
