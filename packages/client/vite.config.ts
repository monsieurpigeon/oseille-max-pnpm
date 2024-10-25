import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8080",
    proxy: {
      "/api": {
        target: process.env.PROD
          ? "https://rocinanteqfp7qmyc-server.functions.fnc.fr-par.scw.cloud"
          : process.env.NODE_ENV === "docker"
          ? "http://server_c:3333"
          : "http://localhost:3333",
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ""),
      },
    },
  },
});
