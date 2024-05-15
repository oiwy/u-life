import { createBrowserRouter } from "react-router-dom";

import { Home } from "@/pages";

import Layout from "@/widgets/layout/ui/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export { router };
