// import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Movies } from "./pages/Movies/Movies";
import { Movie } from "./pages/Movie/Movie";
import "./index.css";
import { RootLayout } from "./layouts/RootLayout";

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
    // children: {
    //   element: (
    //     <RootLayout>
    //       <Movie />
    //     </RootLayout>
    //   ),
    //   path: "/movies/:movieID",
    // },
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
