import { router } from "@/routes";
import "@/styles/globals.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

const rootElement = document.querySelector("#root") as Element;

ReactDOM.createRoot(rootElement!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
