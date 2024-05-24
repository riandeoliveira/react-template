import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [react(), svgr(), tsconfigPaths(), VitePWA()],
  test: {
    environment: "jsdom",
  },
});
