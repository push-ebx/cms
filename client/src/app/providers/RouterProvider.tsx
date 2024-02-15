import { createBrowserRouter } from "react-router-dom";
import { RootPage } from "@/pages/root";
import { RootLayoutPage } from "@/pages/root-layout";
import { AuthPage } from "@/pages/auth";
import { MainPage } from "@/pages/main";
import { NotFoundPage } from "@/pages/not-found";

export const router = createBrowserRouter([
  {
    element: <RootPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        element: <RootLayoutPage />,
        children: [
          { path: "/auth", element: <AuthPage /> },
        ],
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
      // {
      //   path: "/",
      //   element: <Navigate to="/transactions" replace />,
      // },
      // {
      //   path: "/currencies/:id",
      //   element: <CurrencyOverviewPage />,
      // }
    ],
  },
]);