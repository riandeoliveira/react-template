import { SignUp } from "features/auth/pages/SignUp";
import { User } from "features/user/pages";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { AppRoute } from "./AppRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/user/listing" />,
  },
  {
    path: "/signup",
    element: <AppRoute page={SignUp} />,
  },
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
