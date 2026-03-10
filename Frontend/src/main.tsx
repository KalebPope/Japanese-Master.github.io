import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Providers from "./providers/Providers.tsx";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Providers>
        <App />
      </Providers>
    </HashRouter>
  </StrictMode>
);
