import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import "./assets/lara-dark-green/theme.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <PrimeReactProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </PrimeReactProvider>
);
