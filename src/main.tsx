import { createRoot } from "react-dom/client";
import "./index.css";

import { App } from "./app.tsx";
import { BrowserRouter } from "react-router-dom";
import { NextBuyProvider } from "./contexts/context.js";


createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <NextBuyProvider>
        <App />
      </NextBuyProvider>
    </BrowserRouter>
  </>
);
