import { User } from "features/user/pages";
import { createBrowserRouter } from "react-router-dom";
import { AppRoute } from "./AppRoute";

export const router = createBrowserRouter([
  {
    path: "/user/create",
    element: <AppRoute page={User.Create} />,
  },
  {
    path: "/user/listing",
    element: <AppRoute page={User.Listing} />,
  },
  {
    path: "/user/update/:id",
    element: <AppRoute page={User.Update} />,
  },
]);
