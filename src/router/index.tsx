import { createBrowserRouter } from "react-router";
import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/not-found";
import { PublicRoute } from "./public-route";

export const router = createBrowserRouter([
  { path: "*", element: <PublicRoute page={NotFoundPage} /> },
  { path: "/", element: <PublicRoute page={HomePage} /> },
]);
