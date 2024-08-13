"use client";

import type { Theme } from "@mui/material";
import { createTheme } from "@mui/material";
import { Inter } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const theme: Theme = createTheme({
  palette: {
    error: { main: "#dc2626" },
    info: { main: "#1d4ed8" },
    primary: { main: "#2563eb" },
    secondary: { main: "#9333ea" },
    success: { main: "#16a34a" },
    warning: { main: "#ea580c" },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});
