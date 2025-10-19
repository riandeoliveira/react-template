import "@/main.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router";
import { router } from "@/router";
import { AppProvider } from "./providers/app-provider";
import { ThemeProvider } from "./providers/theme-provider";

const root = document.getElementById("root") as HTMLElement;

createRoot(root).render(
  <ThemeProvider>
    <HelmetProvider>
      <StrictMode>
        <AppProvider>
          <RouterProvider router={router} />
        </AppProvider>
      </StrictMode>
    </HelmetProvider>
  </ThemeProvider>,
);
