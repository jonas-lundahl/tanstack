import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme.ts";
import { Router } from "./router.tsx";
import { QueryProvider } from "./query-client.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <QueryProvider>
        <CssBaseline enableColorScheme />
        <Router />
      </QueryProvider>
    </ThemeProvider>
  </StrictMode>,
);
