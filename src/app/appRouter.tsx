import { createBrowserRouter, RouteObject } from "react-router";
import { HomePage } from "@/pages/HomePage/HomePage";
import { RootLayout } from "@/shared/ui/layouts/RootLayout/RootLayout";
import { RouterProvider } from "react-router/dom";
import { FavoritesRepositoriesPage } from "@/pages/FavoritesRepositoriesPage/FavoritesRepositoriesPage";
import { RepositoryPage } from "@/pages/RepositoryPage/RepositoryPage";
import { NotFoundPage } from "@/pages/NotFoundPage/NotFoundPage";

const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "favorites",
    element: <FavoritesRepositoriesPage />,
  },
  {
    path: "repositories/:favoriteId",
    element: <RepositoryPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: publicRoutes,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
