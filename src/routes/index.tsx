import { User } from "features/user/pages";
import { Home } from "pages/home";
import { createBrowserRouter } from "react-router-dom";
import { AppRoute } from "./AppRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoute page={Home} />,
  },
  {
    path: "/user/create",
    element: <AppRoute page={User.Create} />,
  },
  {
    path: "/user/listing",
    element: <AppRoute page={User.Listing} />,
  },
]);
