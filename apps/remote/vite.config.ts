import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "vite",
      filename: "remoteEntry.js",
      exposes: {
        "./Datenaustausch": "./src/components/datenaustausch/index",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 4001,
  },
  build: {
    target: "chrome89",
  },
});
