import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      /*
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Optional: remove /api prefix
      },
      "/another-api": {
        target: "http://localhost:6000",
        changeOrigin: true,
      },
      */
      //i.e, any request that starts with '/api' should be forwarded to 'http://localhost:5000'
      "/api": "http://localhost:8080",
    },
  },
});
