import { createRoot } from "react-dom/client";
import "./index.css";

import { App } from "./app.tsx";
import { BrowserRouter } from "react-router-dom";
import { NextBuyProvider } from "./contexts/contextProvide.js";
import ReactQueryProvider from "./utils/providers.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <ReactQueryProvider>
        <NextBuyProvider>
          <App />
        </NextBuyProvider>
      </ReactQueryProvider>
    </BrowserRouter>
  </>
);
