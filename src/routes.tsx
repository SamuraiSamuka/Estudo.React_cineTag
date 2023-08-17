import React from "react";
import App from "./App.tsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <p>erro</p>,
    children: [
      {
        path: "/",
        element: <p>How are you doing?</p>
      }
    ]
  }
]);


createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);