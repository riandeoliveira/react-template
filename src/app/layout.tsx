// TODO: update metadata

import { LoadingArea } from "@/components/common/loading-area";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactElement, ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type RootLayoutProps = {
  children: ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  authors: {
    name: "John Doe",
    url: "https://www.example.com/",
  },
  description: "Lorem Ipsum...",
  keywords: ["javascript", "markdown", "nextjs", "nodejs", "react", "tailwindcss", "typescript"],
  title: "My Project",
};

const RootLayout = ({ children }: RootLayoutProps): ReactElement => {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider attribute="class">
            {children}
            <ToastContainer />
            <LoadingArea />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
