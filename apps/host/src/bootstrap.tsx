import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";

import App from "./App.tsx";
import "./assets/lara-light-blue/theme.css";

createRoot(document.getElementById("root")!).render(
  <PrimeReactProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </PrimeReactProvider>
);
