import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import useAuthStore from "./store/authStore";
import { setAuthToken } from "./services/api";

// persist token on load
const token = useAuthStore.getState().token;
if (token) setAuthToken(token);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
