// import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Movies } from "./pages/Movies/Movies";
import { MovieDetails } from "./pages/MovieDetails/MovieDetails";
import { RootLayout } from "./layouts/RootLayout";
import "./index.css";

const router = createBrowserRouter([
  {
    element: (
      <RootLayout>
        <Home />
      </RootLayout>
    ),
    path: "/",
  },
  {
    element: (
      <RootLayout>
        <Movies />
      </RootLayout>
    ),
    path: "/movies",
  },
  {
    element: (
      <RootLayout>
        <MovieDetails />
      </RootLayout>
    ),
    path: "/movies/:movieId",
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
