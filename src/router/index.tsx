import { createBrowserRouter } from "react-router";
import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/not-found";

export const router = createBrowserRouter([
  { path: "*", element: <NotFoundPage /> },
  { path: "/", element: <HomePage /> },
]);
