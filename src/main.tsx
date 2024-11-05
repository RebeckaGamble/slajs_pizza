import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { OrderProvider } from "./context/context.tsx";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <OrderProvider>
      <Router>
        <App />
      </Router>
    </OrderProvider>
  </StrictMode>
);
