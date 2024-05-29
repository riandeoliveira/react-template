import { SidebarPage } from "@/pages/features/sidebar-page";
import { TypographyPage } from "@/pages/features/typography-page";
import { HomePage } from "@/pages/home-page";
import { createBrowserRouter } from "react-router-dom";
import { Route } from "./Route";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Route page={HomePage} />,
  },
  {
    path: "/features/sidebar",
    element: <Route page={SidebarPage} />,
  },
  {
    path: "/features/typography",
    element: <Route page={TypographyPage} />,
  },
]);
