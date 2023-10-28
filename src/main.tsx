import { ChakraProvider } from "@chakra-ui/react";
import { LoadingArea } from "components/LoadingArea";
import { AppProvider } from "providers/AppProvider";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "routes";
import "styles/_global.scss";

const rootElement = document.querySelector("#root") as Element;

ReactDOM.createRoot(rootElement!).render(
  <StrictMode>
    <ChakraProvider>
      <AppProvider>
        <LoadingArea />
        <RouterProvider router={router} />
      </AppProvider>
    </ChakraProvider>
  </StrictMode>,
);
