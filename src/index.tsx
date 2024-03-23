import { render } from "react-dom";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import ThemeProvider from "./theme/ThemeProvider";

const root = document.getElementById("root");

createRoot(root).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
