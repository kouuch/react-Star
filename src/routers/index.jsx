import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import Home from "../pages/Homepage";
import About from "../pages/About";
import Blogs from "../pages/blogs";
import _id from "../pages/blogs/_id";
import { post, postById } from "../apis/loaders";

import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blogs />,
        loader: post,
      },
      {
        path: "/blog/:id",
        element: <_id />,
        loader: postById,
      },
    ],
  },
]);
