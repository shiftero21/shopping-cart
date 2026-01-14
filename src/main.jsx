import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./reset.css";
import App from "./app/App";
import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./app/router";
import { Suspense } from "react";
import i18n from "./i18next";
import { Analytics } from "@vercel/analytics/next";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<div>Loading language...</div>}>
      <RouterProvider router={router}></RouterProvider>
      <Analytics />
    </Suspense>
  </StrictMode>
);
