import React from "react";
import Root from "./Root.tsx";
import "./tailwind.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Inicio from "./pages/inicio/Index.tsx";
import Favoritos from "./pages/Favoritos/index.tsx";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <p>erro</p>,
    children: [
      {
        path: "/",
        element: <Inicio />
      },
      {
        path: "/favoritos",
        element: <Favoritos />
      }
    ]
  }
]);


createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);