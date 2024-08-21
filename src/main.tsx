import "@/styles/globals.css";
import { Routes } from "@generouted/react-router";
import ReactDOM from "react-dom/client";
import { AppProviders } from "./providers/app-providers";

const rootElement = document.querySelector("#root") as Element;

ReactDOM.createRoot(rootElement!).render(
  <AppProviders>
    <Routes />
  </AppProviders>,
);
