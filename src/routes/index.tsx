import { User } from "features/user/pages";
import { Home } from "pages/home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user/listing",
    element: <User.Listing />,
  },
]);
