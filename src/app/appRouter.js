import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter } from "react-router";
import { HomePage } from "@/pages/HomePage/HomePage";
import { RootLayout } from "@/shared/ui/layouts/RootLayout/RootLayout";
import { RouterProvider } from "react-router/dom";
import { FavoritesRepositoriesPage } from "@/pages/FavoritesRepositoriesPage/FavoritesRepositoriesPage";
import { RepositoryPage } from "@/pages/RepositoryPage/RepositoryPage";
import { NotFoundPage } from "@/pages/NotFoundPage/NotFoundPage";
const publicRoutes = [
    {
        path: "/",
        element: _jsx(HomePage, {}),
        errorElement: _jsx(NotFoundPage, {}),
    },
    {
        path: "favorites",
        element: _jsx(FavoritesRepositoriesPage, {}),
    },
    {
        path: "repositories/:favoriteId",
        element: _jsx(RepositoryPage, {}),
    },
    {
        path: "*",
        element: _jsx(NotFoundPage, {}),
    },
];
const router = createBrowserRouter([
    {
        element: _jsx(RootLayout, {}),
        children: publicRoutes,
    },
]);
export const Router = () => {
    return _jsx(RouterProvider, { router: router });
};
