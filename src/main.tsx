import "@/main.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router";
import { router } from "@/router";
import { ThemeProvider } from "./providers/theme-provider";

const root = document.getElementById("root") as HTMLElement;

createRoot(root).render(
  <ThemeProvider>
    <HelmetProvider>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </HelmetProvider>
  </ThemeProvider>,
);
