import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        vite: {
          name: "vite",
          type: "module",
          entry: "http://localhost:4001/remoteEntry.js",
        },
      },
      shared: ["react", "react-dom"],
    }),
  ],

  build: {
    target: "chrome89",
  },
});
