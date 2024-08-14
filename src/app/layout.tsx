// TODO: update metadata

import { AppProviders } from "@/components/providers/app-providers";
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
  title: "NextJS Template",
  description: "Lorem Ipsum...",
  keywords: ["javascript", "markdown", "nextjs", "nodejs", "react", "tailwindcss", "typescript"],
  authors: {
    name: "John Doe",
    url: "https://www.example.com/",
  },
};

const RootLayout = ({ children }: RootLayoutProps): ReactElement => {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
};

export default RootLayout;
