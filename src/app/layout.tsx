// TODO: update metadata

import { LoadingArea } from "@/components/loading-area";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactElement, ReactNode } from "react";
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
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          {children}
          <Toaster />
          <LoadingArea />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
