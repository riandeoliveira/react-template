import { SidebarPage } from "@/pages/examples/sidebar-page";
import { TypographyPage } from "@/pages/examples/typography-page";
import { HomePage } from "@/pages/home-page";
import { createBrowserRouter } from "react-router-dom";
import { Route } from "./Route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Route page={HomePage} />,
  },
  {
    path: "/examples/sidebar",
    element: <Route page={SidebarPage} />,
  },
  {
    path: "/examples/typography",
    element: <Route page={TypographyPage} />,
  },
]);
