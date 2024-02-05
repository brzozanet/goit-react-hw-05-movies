import { lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import "./index.css";

const Home = lazy(() => import("./pages/Home/Home"));
const Movies = lazy(() => import("./pages/Movies/Movies"));
const MovieDetails = lazy(() => import("./pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./components/Cast/Cast"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));

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
    children: [
      {
        element: <Cast />,
        path: "cast",
      },
      {
        element: <Reviews />,
        path: "reviews",
      },
    ],
  },
  {
    element: (
      <RootLayout>
        <Home />
      </RootLayout>
    ),
    path: "*",
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} basename="/" />
);
