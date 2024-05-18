import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  RootPage,
  SettingsPage,
  DashboardLayoutPage,
  AuthPage,
  NotFoundPage,
  ContentRepositoryPage,
  MediaCollectionPage
} from "@/pages";
import { CreatorOfStructurePage } from "@/pages/creator-of-structure/ui/creator-of-structure-page.tsx";

export const router = createBrowserRouter([
  {
    element: <RootPage />,
    children: [
      // { path: "/", element: <MainPage /> },
      { path: "/", element: <Navigate to="/dashboard/" replace /> },
      { path: "/auth", element: <AuthPage /> },
      {
        element: <DashboardLayoutPage />,
        children: [
          { path: "dashboard/content-repository", element: <ContentRepositoryPage /> },
          { path: "dashboard/creator-of-structure", element: <CreatorOfStructurePage /> },
          { path: "dashboard/media-collection", element: <MediaCollectionPage /> },
          { path: "dashboard/settings", element: <SettingsPage /> },
          { path: "dashboard/*", element: <ContentRepositoryPage /> }
        ]
      },
      {
        path: "*",
        element: <NotFoundPage />
      }
      // {
      //   path: "/",
      //   element: <Navigate to="/transactions" replace />,
      // },
      // {
      //   path: "/currencies/:id",
      //   element: <CurrencyOverviewPage />,
      // }
    ]
  }
]);