import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home.jsx";
import { Movies } from "./pages/Movies/Movies";
import { RootLayout } from "./layouts/RootLayout/RootLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<RootLayout />} />
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
    </Route>
  )
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/movies",
//     element: <Movies />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
