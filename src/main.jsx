// import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Movies } from "./pages/Movies/Movies";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <Movies />,
    path: "/movies",
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
